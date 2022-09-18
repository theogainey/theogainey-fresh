import { Handlers, PageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import Layout from '../components/Layout.tsx';
import HomeHero from '../components/HomeHero.tsx';
import WorkPreview from '../components/WorkPreview.tsx';
import SEO from '../components/SEO.tsx';
import { Post } from '../types.d.ts';

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
        date: 'May 20, 2022',
        dateTime: '2022-05-20',
      },
      {
        title: 'Sparkbox Availability Planner',
        preview: 'Check out my part in building an internal planning tool',
        uri: 'sparkbox-availability-planner',
        date: 'June 30, 2022',
        dateTime: '2022-06-30',
      },
    ];
    return ctx.render({ posts: posts });
  },
};

export default function Home({ data }: PageProps<Posts>) {
  return (
    <Layout home>
      <SEO home uri={''} title={'Theo Gainey - Full Stack Developer'} />
      <Head>
        <title>Theo Gainey - Full Stack Developer</title>
      </Head>
      <HomeHero />
      {data.posts && <WorkPreview posts={data.posts} />}
    </Layout>
  );
}
