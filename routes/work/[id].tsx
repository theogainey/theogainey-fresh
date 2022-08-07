/** @jsx h */
import { h } from 'preact';
import { Handlers, PageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import Layout from '../../components/Layout.jsx';
import marked from '../../marked.ts';
import NotFound from '../../components/NotFound.jsx';

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
      return ctx.render({
        content: '',
        title: 'Not Found',
      });
    }
  },
};

export default function Post({ data }: PageProps<Post>) {
  marked.setOptions({ gfm: true, headerIds: false });

  const html = data.content ? marked.parse(data.content) : '';
  return (
    <Layout>
      <Head>
        <title>{`${data.title} | Theo Gainey`}</title>
      </Head>
      {html
        ? <div class='cmp-content' dangerouslySetInnerHTML={{ __html: html }} />
        : <NotFound />}
    </Layout>
  );
}
