import { NextPage } from 'next';
import Link from 'next/link';

import RootLayout from '@/components/layouts/base';
import type { PageProps } from '@/types';

const Page: NextPage<PageProps> = ({ params, searchParams }) => {
  return (
    <RootLayout pageTitle='landing'>
      <div>
        <h1 className="">
          Typography {'<'}h1{'>'}
        </h1>
        <h2 className="">
          Typography {'<'}h2{'>'}
        </h2>
        <h3 className="">
          Typography {'<'}h3{'>'}
        </h3>
        <p className="">
          Typography {'<'}p{'>'}
        </p>
        <Link href="/about">Jump</Link>
      </div>
    </RootLayout>
  );
};

export default Page;
