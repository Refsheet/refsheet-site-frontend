'use client';

import React from 'react'
import Link from 'next/link'
import Main from '@refsheet/components/Shared/Main'
import Jumbotron from '@refsheet/components/Shared/Jumbotron'

import Typewriter from '@refsheet/assets/images/unsplash/typewriter.jpg'
import {Trans, useTranslation} from "react-i18next";
import {useCurrentUser} from "@refsheet/hooks/useCurrentUser";
import Views from '@refsheet/v1/views/_views'

const Home: React.FC = () => {
    const currentUser = useCurrentUser();

    const {t} = useTranslation();

    if (currentUser) {
        return <h1>{currentUser.username}</h1>
    }

    return (
        <Main title={`Refsheet.net: ${t('tagline.your_characters_simple', "Your Characters, Organized.")}`}
              className="flex">
            <Jumbotron backgroundImage={Typewriter} className="flex-grow">
                <h1>
                    <Trans i18nKey="tagline.your_characters">
                        Your characters, <strong>organized.</strong>
                    </Trans>
                </h1>
                <p className="flow-text">
                    <Trans i18nKey="tagline.let_refsheet">
                        Let Refsheet help you commission, share, and socialize
                    </Trans>
                </p>
                <div className="jumbotron-action">
                    <Link href="/register" className="btn btn-large">
                        <Trans i18nKey="cta.get_started">Get Started</Trans>
                    </Link>
                </div>
            </Jumbotron>
        </Main>
    )
};

export default Home
