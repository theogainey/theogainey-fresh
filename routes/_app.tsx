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
              const theme = localStorage.getItem("theme");
              if(theme === 'dark') {
                document.documentElement.setAttribute('data-theme','light');
                localStorage.setItem("theme", "light");
              }
              else {
                document.documentElement.setAttribute('data-theme','dark');
                localStorage.setItem("theme", "dark");
              }
            } 
            window.onload = () => {   
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = localStorage.getItem("theme");
              if(theme){
                document.documentElement.setAttribute('data-theme',theme);
              }
              else if(prefersDark){
                document.documentElement.setAttribute('data-theme','dark')
                localStorage.setItem("theme", "dark");
              }
              else {
                document.documentElement.setAttribute('data-theme','light')
                localStorage.setItem("theme", "light");
              }
              document.getElementById('light-mode-toggle').addEventListener('click', () =>toggleLightMode());
            }        `,
          }}
        />
      </Head>
      <props.Component />
    </>
  );
}
