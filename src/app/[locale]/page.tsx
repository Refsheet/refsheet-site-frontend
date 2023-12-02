import React from 'react'
import Link from 'next/link'
import Main from '@refsheet/components/Shared/Main'
import Jumbotron from '@refsheet/components/Shared/Jumbotron'
import Typewriter from '@refsheet/assets/images/unsplash/typewriter.jpg'
import {useTranslations} from "next-intl"
import {useCurrentUser} from "@refsheet/hooks/useCurrentUser";

export default function Home() {
    const t = useTranslations('Home');

    return (
        <Main title={`Refsheet.net: ${t('tagline')}`}
              className="flex">
            <Jumbotron backgroundImage={Typewriter} className="flex-grow">
                <h1>
                    {t.rich('tagline-rich', {
                        organized: (o) => <strong>{o}</strong>
                    })}
                </h1>
                <p className="flow-text">
                    {t('cta-text')}
                </p>
                <div className="jumbotron-action">
                    <Link href="/register" className="btn btn-large">
                        {t('cta-button')}
                    </Link>
                </div>
            </Jumbotron>
        </Main>
    )
}
