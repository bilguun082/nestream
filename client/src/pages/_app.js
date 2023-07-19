import "../styles/globals.css";
import Header from "../layout/header";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
