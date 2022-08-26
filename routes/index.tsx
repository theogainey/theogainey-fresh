import { Handlers, PageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import Markdoc from 'markdoc';
import Layout from '../components/Layout.jsx';
import HomeHero from '../components/HomeHero.jsx';
import WorkPreview from '../components/WorkPreview.jsx';
import SEO from '../components/SEO.jsx';

type Post = {
  title: string;
  uri: string;
  preview: string;
  date: string;
  dateTime: string;
};
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
    <Layout home={true}>
      <SEO home uri={''} title={'Theo Gainey - Full Stack Developer'} />
      <Head>
        <title>Theo Gainey - Full Stack Developer</title>
      </Head>
      <HomeHero />
      {data.posts && <WorkPreview posts={data.posts} />}
    </Layout>
  );
}
