import React, {ReactNode} from 'react';

import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav';

interface Props {
  children?: ReactNode;
}

export default function Layout({children}: Props) {
  return (
    <div className="font-mono max-w-screen-xl mx-auto">
      <div className="px-10 py-2 border-solid border-b border-black">
        <Nav />
      </div>

      <main>{children}</main>

      <div className="px-10 bg-neutral-800">
        <Footer />
      </div>
    </div>
  );
}
