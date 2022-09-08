import { Head } from '$fresh/runtime.ts';

export default function SEO({ uri, title, home }) {
  return (
    <Head>
      <link
        rel='canonical'
        href={home ? `https://theogainey.com/${uri}` : 'https://theogainey.com'}
        key='canonical'
      />
      <meta name='description' content={title} />
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content='Theo Gainey' />
      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content={home
          ? `https://theogainey.com/${uri}`
          : 'https://theogainey.com'}
      />
      <meta property='og:description' content={title} />
      {home && (
        <meta
          property='og:image'
          content='https://theogainey.com/theo-gainey.webp'
        />
      )}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@GaineyTheo' />
      {home && (
        <meta
          name='twitter:image'
          content='https://theogainey.com/theo-gainey.webp'
        />
      )}
      <meta name='twitter:image:alt' content={title} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={title} />
    </Head>
  );
}
