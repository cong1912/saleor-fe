import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '../../services/index';
import { SWRConfig } from 'swr';
import { fetcher } from '../../helper/apiHandle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}
