import { asset, Head } from '$fresh/runtime.ts';
import { AppProps } from '$fresh/server.ts';

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <link href={asset('/styles.css')} rel='stylesheet' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <link href={asset('/favicons/favicon.ico')} rel='shortcut icon' />
        <link href={asset('/favicons/site.webmanifest')} rel='manifest' />
        <link
          href={asset('/favicons/apple-touch-icon.png')}
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href={asset('/favicons/favicon-32x32.png')}
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href={asset('/favicons/favicon-16x16.png')}
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-VERG9WQXHD'
        >
        </script>
        <script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VERG9WQXHD');`,
          }}
        />
      </Head>
      <props.Component />
    </>
  );
}
