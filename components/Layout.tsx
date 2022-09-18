import Header from './Header.tsx';
import Footer from './Footer.tsx';

type LayoutProps = {
  home?: boolean;
  children: preact.ComponentChild;
};

export default function Layout({ children, home }: LayoutProps) {
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
