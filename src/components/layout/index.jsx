import Header from "./header";
import { Footer } from "./footer";

export default function Layout({ children }) {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
}
