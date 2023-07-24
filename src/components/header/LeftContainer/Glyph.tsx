import ethjp_logo from '/public/logo/ej.png';

import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const Glyph: FC = () => {
  const glyphStyle = css`
    border-radius: 50%;
    cursor: pointer;
    height: auto;
    max-width: 76px;
  `;

  return (
    /* Logo */
    <Link href='/' passHref={true}>
      <Image alt='Ethereum Japan' src={ethjp_logo} css={glyphStyle} />
    </Link>
  );
};
