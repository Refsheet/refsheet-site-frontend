'use client';

import React from 'react'
import {withTranslation} from 'react-i18next'
import compose from 'utils/compose'
import Footer from './Footer'
import NavBar from '../NavBar'
import Chat from '../Chat/ConversationTray'
import Lightbox from '../Lightbox'
import UploadModal from '../Image/UploadModal'
import SessionModal from '../../v1/shared/modals/SessionModal'
import {withErrorBoundary} from '../Shared/ErrorBoundary'
import SupportModal from '../SupportModal'
import {connect} from 'react-redux'
import {openNewCharacterModal, openSupportModal} from '../../actions'
import NewCharacterModal from '../User/Modals/NewCharacterModal'
import ReportModal from '../../v1/views/images/report_modal'
import {ThemeProvider} from 'styled-components'
import themes from '../../themes'
import {useSearchParams} from "next/navigation";

import "scss/index.scss";

interface LayoutProps {
    notice?: string;
    updateAvailable?: boolean;
    theme?: {
        name: string;
    }
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({children, ...props}) => {
    const {notice, theme: themeSettings} = props
    const {name: themeName} = themeSettings || {}
    const theme = themes[themeName] || themes.dark
    const query = useSearchParams();

    return (
        <ThemeProvider theme={theme.base}>
            <div id={'rootApp'}>
                <Lightbox/>
                <UploadModal/>
                <SessionModal/>
                <SupportModal/>
                <NewCharacterModal/>
                <ReportModal/>

                <NavBar
                    query={query.get('q')}
                    onUserChange={console.log}
                    notice={notice}
                />

                {children}
                <Footer/>

                <Chat/>
            </div>
        </ThemeProvider>
    )
}

const mapStateToProps = ({theme}) => ({
    theme,
})

const mapDispatchToProps = {
    openNewCharacterModal,
}

export default compose(
    withErrorBoundary,
    withTranslation('common'),
    connect(mapStateToProps, mapDispatchToProps)
)(Layout)
