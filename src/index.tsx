import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss';
import App from './components/App'
import reportWebVitals from './reportWebVitals'

// @ts-ignore
window.Refsheet = {
    environment: "production",
    version: "ba7e3cd5cc398e07424bdfdaca9727f80223c7e2",
    sentryDsn: "https://7418c4c0bc4e4dc1bff9b5c44de07b17@sentry.io/1307540",
    instance: {
        id: "",
        name: ""
    }
}

const props = {
    "gaPropertyID": "UA-82222637-3",
    "eagerLoad": {
        "session": {
            "nsfw_ok": true,
            "nsfwOk": true,
            "locale": "en",
            "session_id": "bdcbe06d9b5dc521",
            "time_zone": null,
            "current_user": null,
        }
    },
    "flash": {},
    "environment": "production",
    "notice": "",
    "assets": {"notificationSoundPaths": ["https://assets.refsheet.net/assets/woo-2897f91eafefd813e754a48d3d8c9b3d7da37f96a32182320bbf7cb27b17a3f7.mp3"]},
    "config": {"recaptchaSiteKey": "6LdKyPoZAAAAAExxN2X80CNdxds7tzVstBpuSTH-"}
};


ReactDOM.render(<App
    {...props}
/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
