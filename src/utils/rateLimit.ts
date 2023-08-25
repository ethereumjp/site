import { LRUCache } from 'lru-cache';
import { NextApiResponse } from 'next';

type Options = {
  uniqueTokenPerInterval?: number;
  interval?: number;
};

const rateLimit = (options?: Options) => {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 100, // max 100 unique users per interval
    ttl: options?.interval || 1000 * 60 * 5, // 5 minutes
  });

  return {
    check: (res: NextApiResponse, limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= limit;
        res.setHeader('X-RateLimit-Limit', limit);
        res.setHeader(
          'X-RateLimit-Remaining',
          isRateLimited ? 0 : limit - currentUsage,
        );

        return isRateLimited ? reject() : resolve();
      }),
  };
};
export default rateLimit;
