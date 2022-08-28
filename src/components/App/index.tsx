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
import rootReducer from 'reducers'
import client, {host} from 'services/ApplicationService'
import {createBrowserHistory} from 'history'
import i18n from '../../services/i18n.js'

// Utilities
import ReactGA from 'react-ga'
import WindowAlert from '../../utils/WindowAlert'
import StringUtils from 'utils/StringUtils'

// Configuration
import defaultState from './defaultState.json'
import ConfigContext from './ConfigContext'

// Children
import Layout from '../Layout'
import {BrowserRouter} from 'react-router-dom'
import {withErrorBoundary} from '../Shared/ErrorBoundary'

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

const App: React.FC<IAppProps> = (props) => {
    console.log("PROPS: ", props);

    const [eagerLoad, setEagerLoad] = useState(props.eagerLoad);
    const [config, setConfig] = useState(props.config);
    const [loading, setLoading] = useState<boolean>(false);

    const state = buildState(eagerLoad, props.state || {});
    const store = buildStore(state);

    const handleRouteUpdate = () => {
        if (props.gaPropertyID && typeof ReactGA !== 'undefined') {
            ReactGA.set({
                // page: window.location.pathname,
            })

            // ReactGA.pageview(window.location.pathname)
        }
    }

    useEffect(() => {
        // Set Google Analytics
        if (props.gaPropertyID && typeof ReactGA !== 'undefined') {
            ReactGA.initialize(props.gaPropertyID)
            // ReactGA.set({page: window.location.pathname})
            // ReactGA.pageview(window.location.pathname)
        }

        // Init Window Alerts
        WindowAlert.initSound();

        // Fade Out Loader
        const loader = document.getElementById('rootAppLoader')
        if (loader) {
            loader.style.opacity = '1.0';

            function fadeLoader() {
                const opacity = parseFloat(loader.style.opacity) - 0.1;
                if (opacity < 0) {
                    loader.style.display = 'none';
                } else {
                    loader.style.opacity = opacity.toString();
                    setTimeout(fadeLoader, 40);
                }
            }

            fadeLoader();
        }

        setEagerLoad({});
    }, []);

    return (
        <ConfigContext.Provider value={config}>
            <I18nextProvider i18n={i18n}>
                <ApolloProvider client={client}>
                    <ReduxProvider store={store}>
                        <DropzoneProvider>
                            <DndProvider backend={Backend}>
                                <BrowserRouter>
                                    <Layout/>
                                </BrowserRouter>
                            </DndProvider>
                        </DropzoneProvider>
                    </ReduxProvider>
                </ApolloProvider>
            </I18nextProvider>
        </ConfigContext.Provider>
    )
}

export default withErrorBoundary(App)
