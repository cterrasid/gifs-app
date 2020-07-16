import App from "next/app";
import { GifsContextProvider } from "../context/GifsContext";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <GifsContextProvider>
        <Component {...pageProps} />
      </GifsContextProvider>
    );
  }
}

export default MyApp;
