import { Handlers, PageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import Layout from '../components/Layout.jsx';
import marked from '../marked.ts';
import SEO from '../components/SEO.jsx';

interface Post {
  content: string;
  title: string;
}

export const handler: Handlers<Post> = {
  async GET(_, ctx) {
    const { id } = ctx.params;
    try {
      const content = new TextDecoder().decode(
        await Deno.readFile(`${Deno.cwd()}/content/work/${id}.md`),
      );
      return ctx.render({
        content: content,
        title: id.replaceAll('-', ' '),
      });
    } catch (_err) {
      return ctx.renderNotFound();
    }
  },
};

export default function Post({ data }: PageProps<Post>) {
  marked.setOptions({ gfm: true, headerIds: false });

  const html = data.content ? marked.parse(data.content) : '';
  return (
    <Layout home={false}>
      <SEO uri={''} title={data.title} home={false} />
      <Head>
        <title>{`${data.title} | Theo Gainey`}</title>
      </Head>
      <div class='cmp-content' dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}
