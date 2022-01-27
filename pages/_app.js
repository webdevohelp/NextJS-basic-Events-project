import Layout from '../components/layout/layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale="
                />
                <title>Events app</title>
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
