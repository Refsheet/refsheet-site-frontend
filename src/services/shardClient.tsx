import {DefaultOptions, HttpLink, NormalizedCacheObject} from "@apollo/client";
import introspectionQueryResultData from "@refsheet/config/possibleTypes.json";
import {setContext} from "@apollo/client/link/context";
import Cookies from 'js-cookie';
import {
    NextSSRInMemoryCache,
    NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";

const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: 'network-only',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
    },
    mutate: {
        errorPolicy: 'all',
    },
};

const cache = new NextSSRInMemoryCache({
    possibleTypes: introspectionQueryResultData,
});

function csrf() {
    const token = Cookies.get('CSRF_TOKEN')

    if (!token) {
        console.warn('CSRF Meta tag not found!')
        return {}
    }

    return {
        'X-CSRF-Token': token,
    }
}

const authLink = setContext((_, {headers}) => {
    return {
        headers: {
            ...headers,
            ...csrf(),
            Accept: 'application/json',
        },
    }
})

let shardClient: NextSSRApolloClient<NormalizedCacheObject> | undefined = undefined;

export default function buildShardClient(hostname: string): NextSSRApolloClient<NormalizedCacheObject> {
    const link = new HttpLink({
        uri: `https://${hostname}/graphql`,
        credentials: 'include',
        fetch,
    });

    shardClient = new NextSSRApolloClient({
        link: authLink.concat(link),
        cache: cache,
        defaultOptions,
    });

    return shardClient;
}

export function getShardClient(): NextSSRApolloClient<NormalizedCacheObject> | undefined {
    return shardClient;
}
