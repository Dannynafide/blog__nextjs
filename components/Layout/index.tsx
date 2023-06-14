import Nav from 'components/Nav';
import Footer from '../Footer/Footer';

export default function Layout({children}) {
  return (
    <div className="font-mono max-w-screen-xl mx-auto">
      <div className="px-10 py-2 border-solid border-b border-black">
        <Nav />
      </div>

      <main className="px-10">{children}</main>

      <div className="px-10 bg-neutral-800">
        <Footer />
      </div>
    </div>
  );
}
