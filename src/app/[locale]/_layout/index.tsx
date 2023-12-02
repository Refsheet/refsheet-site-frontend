'use client';

import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import Chat from '@refsheet/components/Chat/ConversationTray'
import {useSelector} from 'react-redux'
import {ThemeProvider} from 'styled-components'
import themes from '@refsheet/themes'
import "scss/index.scss";
import {GlobalState} from "components/App/state";


export default function Layout({children}: React.PropsWithChildren) {
    const themeState = useSelector<GlobalState, GlobalState["theme"]>(state => state.theme);
    const theme = themes[themeState.name] || themes.dark

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
                    notice={""}
                />

                {children}
                <Footer/>

                <Chat/>
            </div>
        </ThemeProvider>
    );
}
