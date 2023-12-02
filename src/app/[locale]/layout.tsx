import {default as AppMain} from '@refsheet/components/App';
import React from 'react'
import "@refsheet/scss/index.scss";
import {dir} from 'i18next';
import Layout from "./_layout";
import {Inter} from "next/font/google";

export const metadata = {
    title: 'Refsheet.net',
    description: 'The Next evolution of Refsheet. Cheaper. Faster. More efficient.',
}

export interface IRootLayoutProps {
    params: {
        locale: string
    }
}

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children, params: {locale}}: React.PropsWithChildren<IRootLayoutProps>) {
    return (
        <html lang={locale} dir={dir(locale)}>
        <body className={inter.className}>
        <AppMain>
            <Layout>
                {children}
            </Layout>
        </AppMain>
        </body>
        </html>
    )
}
