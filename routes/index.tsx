/** @jsx h */
import { h } from 'preact';
import { Handlers, PageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import Layout from '../components/Layout.jsx';
import HomeHero from '../components/HomeHero.jsx';
import WorkPreview from '../components/WorkPreview.jsx';
import SEO from '../components/SEO.tsx';

type Post = {
  title: string;
  uri: string;
  preview: string;
};
interface Posts {
  posts: Post[];
}
export const handler: Handlers<Posts> = {
  GET(_, ctx) {
    const posts = [
      {
        title: 'Deno xbar',
        preview: 'How I made it easy to write xbar plugins in TypeScript',
        uri: 'deno-xbar',
      },
      {
        title: 'Sparkbox Availability Planner',
        preview: 'Check out my part in building an internal planning tool',
        uri: 'sparkbox-availability-planner',
      },
    ];
    return ctx.render({ posts: posts });
  },
};

export default function Home({ data }: PageProps<Posts>) {
  return (
    <Layout>
      <SEO home uri={''} title={'Theo Gainey - Full Stack Developer'} />
      <Head>
        <title>Theo Gainey - Full Stack Developer</title>
      </Head>
      <HomeHero />
      {data.posts && <WorkPreview posts={data.posts} />}
    </Layout>
  );
}
