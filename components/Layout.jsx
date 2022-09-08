import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout({ children, home }) {
  return (
    <div class='obj-layout'>
      <Header home={home} />
      <main id='main-content'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
