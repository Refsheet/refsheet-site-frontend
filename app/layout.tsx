import Layout from "components/Layout";

import {default as AppMain} from 'components/App';

export const metadata = {
    title: 'Refsheet.net',
    description: 'The Next evolution of Refsheet. Cheaper. Faster. More efficient.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
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

