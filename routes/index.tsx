import { Handlers, PageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import Markdoc from 'markdoc';
import postSorter from '../utils/postSorter.ts';
import Layout from '../components/Layout.tsx';
import HomeHero from '../components/HomeHero.tsx';
import WorkPreview from '../components/WorkPreview.tsx';
import SEO from '../components/SEO.tsx';
import { Post } from '../types.d.ts';

interface Posts {
  posts: Post[];
}
export const handler: Handlers<Posts> = {
  async GET(_, ctx) {
    const posts = [];
    for await (const dirEntry of Deno.readDir(`${Deno.cwd()}/content/work`)) {
      const source = new TextDecoder().decode(
        await Deno.readFile(`${Deno.cwd()}/content/work/${dirEntry.name}`),
      );
      const ast = Markdoc.parse(source);
      const frontmatter = JSON.parse(ast.attributes.frontmatter);
      posts.push(frontmatter);
    }
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
      {data.posts && <WorkPreview posts={data.posts.sort(postSorter)} />}
    </Layout>
  );
}
