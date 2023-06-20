import type {AppProps} from 'next/app';
import {Toaster} from 'react-hot-toast';

import 'styles/index.css';

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}
