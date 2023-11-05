'use client';

import React, {useEffect, useState} from 'react'

// Providers
import {ApolloProvider} from '@apollo/client/react'
import {Provider as ReduxProvider} from 'react-redux'
import DropzoneProvider from '../Dropzone'
import {I18nextProvider} from 'react-i18next'
import {HTML5Backend as Backend} from 'react-dnd-html5-backend'
import {DndProvider} from 'react-dnd'

// Initialization
import {createStore} from 'redux'
import rootReducer from '@refsheet//reducers'
import client, {host} from '@refsheet//services/ApplicationService'
import {createBrowserHistory} from 'history'
import i18n from '@refsheet/services/i18n.js'

// Utilities
import ReactGA from 'react-ga'
import WindowAlert from '@refsheet/utils/WindowAlert'
import StringUtils from '@refsheet//utils/StringUtils'

// Configuration
import defaultState from './defaultState.json'
import ConfigContext from './ConfigContext'

// Children
import {withErrorBoundary} from '../Shared/ErrorBoundary'
import {StaticRouter, BrowserRouter} from "react-router-dom";
import {NextRouter, useRouter} from "next/router";
import {GetSessionQuery} from '../../../@types/schema'
import getSession from '@refsheet//graph/queries/GetSession.graphql'
import {setCurrentUser} from '@refsheet//actions'


export interface IAppServerProps {
    session: GetSessionQuery['getSession']
}

export interface IAppProps {
    eagerLoad: any;
    config: any;
    state: any;
    gaPropertyID: string;
}

const buildState = (eagerLoad, state) => {
    let session = (eagerLoad && eagerLoad.session) || {}
    session = StringUtils.camelizeKeys(session)

    let theme =
        (session.currentUser && session.currentUser.settings.theme) || {}
    theme = StringUtils.camelizeKeys(theme)

    const newState = {
        ...defaultState,
        ...state,
        session: {
            ...defaultState.session,
            ...session,
            ...state.session,
        },
        theme: {
            ...defaultState.theme,
            ...theme,
        },
    }

    if (!newState.session.identity.name && newState.session.currentUser) {
        newState.session.identity = {
            avatarUrl: newState.session.currentUser.avatar_url,
            name: newState.session.currentUser.name,
            characterId: null,
        }
    }

    return newState
}

const buildStore = (state) => {
    const store = createStore(rootReducer, state)
    return store
}

const App: React.FC<React.PropsWithChildren<IAppProps & IAppServerProps>> = ({children, session, ...props}) => {
    const [eagerLoad, setEagerLoad] = useState(props.eagerLoad);
    const [config, setConfig] = useState(props.config);

    const state = buildState(eagerLoad, props.state || {});
    const store = buildStore(state);


    useEffect(() => {
        // Init Window Alerts
        WindowAlert.initSound();
    }, []);

    return (
        <ConfigContext.Provider value={config}>
            <I18nextProvider i18n={i18n}>
                <ApolloProvider client={client}>
                    <ReduxProvider store={store}>
                        <DropzoneProvider>
                            <DndProvider backend={Backend}>
                                {children}
                            </DndProvider>
                        </DropzoneProvider>
                    </ReduxProvider>
                </ApolloProvider>
            </I18nextProvider>
        </ConfigContext.Provider>
    )
}

export default withErrorBoundary(App)
