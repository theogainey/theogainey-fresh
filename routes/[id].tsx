import { Handlers, PageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import Layout from '../components/Layout.tsx';
import Markdoc from 'markdoc';
import markdownConfig from '../markdown/index.ts';
import SEO from '../components/SEO.tsx';

interface PageContent {
  content: string;
  title: string;
}

export const handler: Handlers<PageContent> = {
  async GET(_, ctx) {
    const { id } = ctx.params;
    try {
      const source = new TextDecoder().decode(
        await Deno.readFile(`${Deno.cwd()}/content/work/${id}.md`),
      );
      const ast = Markdoc.parse(source);
      const frontmatter = JSON.parse(ast.attributes.frontmatter);
      const content = Markdoc.transform(ast, markdownConfig);
      const html = Markdoc.renderers.html(content);
      return ctx.render({
        content: html,
        ...frontmatter,
      });
    } catch (_err) {
      return ctx.renderNotFound();
    }
  },
};

export default function Post({ data }: PageProps<PageContent>) {
  return (
    <Layout>
      <SEO uri={''} title={data.title} home={false} />
      <Head>
        <title>{`${data.title} | Theo Gainey`}</title>
      </Head>
      <div
        class='cmp-content'
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </Layout>
  );
}
