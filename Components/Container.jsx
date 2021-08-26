import Head from "next/head";
import Script from "next/script";

const Container = ({children}) => {
  return (
    <div>
      <Head>
        <title>ini title</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossorigin="anonymous"
        ></link>
      </Head>
      {children}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" />
    </div>
  );
};

export default Container;
