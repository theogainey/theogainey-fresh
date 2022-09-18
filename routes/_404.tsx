import { UnknownPageProps } from '$fresh/server.ts';
import Layout from '../components/Layout.tsx';
import NotFound from '../components/NotFound.tsx';

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <Layout>
      <NotFound />
    </Layout>
  );
}
