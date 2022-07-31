/** @jsx h */
import { h } from 'preact';
import { UnknownPageProps } from '$fresh/server.ts';
import Layout from '../components/Layout.jsx';
import NotFound from '../components/NotFound.jsx';

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <Layout>
      <NotFound />
    </Layout>
  );
}