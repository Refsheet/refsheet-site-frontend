import React, {useState, useEffect} from 'react'
import AppMain from '../src/components/App'

global.Refsheet = {
    "environment": "production",
    "version": "4a14b2052eca9d50162d7bc122b287ae49359cdf",
    "sentryDsn": "https://7418c4c0bc4e4dc1bff9b5c44de07b17@sentry.io/1307540",
    "instance": {
        "id": "",
        "name": ""
    }
};

function App() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
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

    return <AppMain {...props} />
}

export default App
