'use client';

import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import Chat from '../../components/Chat/ConversationTray'
import {useSelector} from 'react-redux'
import {ThemeProvider} from 'styled-components'
import themes from '../../themes'
import {useSearchParams} from "next/navigation";

import "@refsheet/scss/index.scss";
import {GlobalState} from "@refsheet/components/App/state";


export default function Layout({children}: React.PropsWithChildren) {
    const themeState = useSelector<GlobalState, GlobalState["theme"]>(state => state.theme);
    const theme = themes[themeState.name] || themes.dark
    const query = useSearchParams();

    return (
        <ThemeProvider theme={theme.base}>
            <div id={'rootApp'}>
                {/*<Lightbox/>*/}
                {/*<UploadModal/>*/}
                {/*/!*<SessionModal/>*!/*/}
                {/*<SupportModal/>*/}
                {/*<NewCharacterModal/>*/}
                {/*<ReportModal/>*/}

                <NavBar
                    query={query.get('q')}
                    onUserChange={console.log}
                    notice={""}
                />

                {children}
                <Footer/>

                <Chat/>
            </div>
        </ThemeProvider>
    );
}
