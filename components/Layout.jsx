/** @jsx h */
import { h } from 'preact';
import { Head } from '$fresh/runtime.ts';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout({ children }) {
  return (
    <div class='obj-layout'>
      <Header />
      <main id='main-content'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
