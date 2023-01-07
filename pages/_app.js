// import '../styles/globals.css';
import '../public/css/main.css';
import '../i18n';
import { Providers } from '../global/providers';

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
