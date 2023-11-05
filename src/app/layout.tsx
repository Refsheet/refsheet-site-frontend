import {default as AppMain} from '@refsheet/components/App';
import React from 'react'
import "@refsheet/scss/index.scss";
import Layout from "./_layout";

export const metadata = {
    title: 'Refsheet.net',
    description: 'The Next evolution of Refsheet. Cheaper. Faster. More efficient.',
}

export default function App({children}: React.PropsWithChildren) {
    return (
        <html lang="en">
        <body>
        <AppMain>
            <Layout>
                {children}
            </Layout>
        </AppMain>
        </body>
        </html>
    )
}
