/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
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
        <link href='/favicons/favicon.ico' rel='shortcut icon' />
        <link href='/favicons/site.webmanifest' rel='manifest' />
        <link
          href='/favicons/apple-touch-icon.png'
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href='/favicons/favicon-32x32.png'
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href='/favicons/favicon-16x16.png'
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            const toggleLightMode = () => {
              const url = new URL(document.URL);
              if(url.hash === '#theme-dark') {
                url.hash = '#';
                document.documentElement.setAttribute('data-theme','light');
                const links = document.getElementsByTagName('a');
                for (let i = 0; i < links.length; i++) {
                  const href = links[i].getAttribute('href');
                  links[i].setAttribute('href', href?.slice(0, -11));
                }
              }
              else {
                url.hash = '#theme-dark';
                document.documentElement.setAttribute('data-theme','dark');
                const links = document.getElementsByTagName('a');
                for (let i = 0; i < links.length; i++) {
                  const href = links[i].getAttribute('href');
                  links[i].setAttribute('href',  href + '#theme-dark')
                }
              }
              document.location.href = url.href;
            } 
            window.onload = () => {   
              let isSelfReferrer = false;
              if(document.referrer){
                const referrerOrigin = new URL(document.referrer).origin;
                const self = new URL(document.documentURI).origin;
                isSelfReferrer = referrerOrigin === self;
              }
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const defaultHash = window.location?.hash;
              if(defaultHash==='#theme-dark' || (!isSelfReferrer && prefersDark)){
                const url = new URL(document.URL);
                url.hash = '#theme-dark';
                document.location.href = url.href;
                document.documentElement.setAttribute('data-theme','dark');
                const links = document.getElementsByTagName('a');
                for (let i = 0; i < links.length; i++) {
                  const href = links[i].getAttribute('href');
                  links[i].setAttribute('href', href + '#theme-dark')
                }
              }
              document.getElementById('light-mode-toggle').addEventListener('click', () =>toggleLightMode());
            }
        `,
          }}
        />
      </Head>
      <props.Component />
    </>
  );
}
