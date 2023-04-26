import { Spin as Hamburger } from 'hamburger-react';

import Link from 'next/link';

import { useState } from 'react';
import type { FC } from 'react';

const Item: FC<{
  id: string;
  href: string;
  text: string;
  newpage?: boolean;
}> = ({ id, href, text, newpage }) => {
  return (
    <Link
      id={id}
      href={href}
      passHref={true}
      target={newpage ? '_blank' : '_self'}
      // className="hover:no-underline"
    >
      <div
      // className="py-2 px-3 rounded-md laptop:rounded-xl
      //           outline outline-1 laptop:outline-0 laptop:hover:outline-1 outline-brand-yellow
      //           font-sans font-semibold tracking-widest text-brand-white
      //         bg-brand-onyx laptop:bg-transparent hover:bg-brand-onyx"
      >
        {text}
      </div>
    </Link>
  );
};

export const NavMenu: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const MenuItems = (props: { open: boolean }) => {
    return (
      <div
        id="nav menu"
        className={`${
          props.open ? '' : 'hidden '
        }absolute inset-y-16 right-4 flex flex-col items-end space-y-2 laptop:relative laptop:inset-y-0 laptop:flex-row laptop:space-y-0 laptop:space-x-6`}
      >
        {/* Portal */}
        <Item id="start" href="https://app.unchain.tech/" text="Start" />
        <Item id="news" href="/news" text="News" />

        {/* contact */}
        <Item
          id="contact"
          href="https://shiftbase.xyz/contact"
          text="Contact"
          newpage
        />
      </div>
    );
  };

  return (
    <div className="mx-2 items-center desktop:mx-12">
      <div id="laptopmenu" className="hidden laptop:block">
        <MenuItems open />
      </div>
      <div id="mobilemenu" className="block laptop:hidden">
        <Hamburger rounded={true} toggled={isMenuOpen} toggle={setMenuOpen} />
        <MenuItems open={isMenuOpen} />
      </div>
    </div>
  );
};