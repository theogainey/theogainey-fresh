/** @jsx h */
import { h } from 'preact';
import { Head } from '$fresh/runtime.ts';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout({ children }) {
  return (
    <div class='obj-layout'>
      <Head>
        <link rel='stylesheet' href='/styles.css' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap'
          rel='stylesheet'
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
      <Header />
      <main id='main-content'>
        {children}
      </main>
      <Footer />
    </div>
  );
}