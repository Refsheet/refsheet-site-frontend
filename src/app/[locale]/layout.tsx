import {default as AppMain} from '@refsheet/components/App';
import React from 'react'
import "@refsheet/scss/index.scss";
import {dir} from 'i18next';
import Layout from "./_layout";
import {Inter} from "next/font/google";
import {NextIntlClientProvider} from "next-intl";
import {notFound} from "next/navigation";

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

export default async function RootLayout({children, params: {locale}}: React.PropsWithChildren<IRootLayoutProps>) {
    let messages;
    try {
        messages = (await import(`@refsheet/i18n/messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale} dir={dir(locale)}>
        <body className={inter.className}>
        <AppMain>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <Layout>
                    {children}
                </Layout>
            </NextIntlClientProvider>
        </AppMain>
        </body>
        </html>
    )
}
