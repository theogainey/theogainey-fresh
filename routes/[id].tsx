import { Handlers, PageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import Markdoc from 'markdoc';
import Layout from '../components/Layout.jsx';
import NotFound from '../components/NotFound.jsx';
import SEO from '../components/SEO.jsx';

interface Post {
  content: string;
  title: string;
}

export const handler: Handlers<Post> = {
  async GET(_, ctx) {
    const imgWrapper = {
      render: 'div',
      description: 'wrap a image in a div',
      attributes: {
        class: {
          type: String,
          default: 'cmp-img-container',
        },
      },
    };
    const imgLink = {
      render: 'a',
      description: 'wrap a image in a link',
      attributes: {
        href: {
          type: String,
          default: '',
        },
      },
    };
    const imgRoot = {
      render: 'img',
      description: 'img root',
      attributes: {
        src: {
          type: String,
          default: '',
        },
        alt: {
          type: String,
          default: '',
        },
      },
    };
    const { id } = ctx.params;
    try {
      const source = new TextDecoder().decode(
        await Deno.readFile(`${Deno.cwd()}/content/work/${id}.md`),
      );
      const ast = Markdoc.parse(source);
      const frontmatter = JSON.parse(ast.attributes.frontmatter);
      const content = Markdoc.transform(ast, {
        tags: {
          imgWrapper: imgWrapper,
          imgRoot: imgRoot,
          imgLink: imgLink,
        },
      });

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

export default function Post({ data }: PageProps<Post>) {
  return (
    <Layout home={false}>
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
