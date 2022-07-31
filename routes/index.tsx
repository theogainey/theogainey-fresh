/** @jsx h */
import { h } from 'preact';
import { Head } from '$fresh/runtime.ts';
import { Handlers, PageProps } from '$fresh/server.ts';
import Layout from '../components/Layout.jsx';
import HomeHero from '../components/HomeHero.jsx';
import WorkPreview from '../components/WorkPreview.jsx';

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
      {
        title: 'Xbar Weather Alerts',
        preview:
          'I made a weather app for the macOS menu bar and it turned out great',
        uri: 'xbar-weatheralerts',
      },
    ];
    // const posts:string[]= [];
    // for await (const dirEntry of Deno.readDir(`${Deno.cwd()}/content/work`)) {
    //   posts.push(dirEntry.name.slice(0,-3))
    // }
    return ctx.render({ posts: posts });
  },
};

export default function Home({ data }: PageProps<Posts>) {
  return (
    <Layout>
      <Head>
        <title>Theo Gainey - Full Stack Developer</title>
      </Head>
      <HomeHero />
      {data.posts && <WorkPreview posts={data.posts} />}
    </Layout>
  );
}
