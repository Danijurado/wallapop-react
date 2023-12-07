import Header from "./header";
import Footer from "./footer";
function Layout({ title, children }) {
  return (
    <div>
      <Header />
      <main>
        <h2>{title}</h2>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
