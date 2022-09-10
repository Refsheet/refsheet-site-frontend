// CSS
import 'scss/index.scss';
import type {ReactElement, ReactNode} from 'react'
import {AppProps} from 'next/app'
import {default as AppMain} from 'components/App';
import {NextPage} from "next";
import Layout from "components/Layout";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({Component, pageProps}: AppPropsWithLayout): JSX.Element {
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <AppMain>
            <Layout>
                {getLayout(<Component {...pageProps} />)}
            </Layout>
        </AppMain>
    )
}
