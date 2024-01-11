import React from 'react';
import fetch from 'node-fetch';

export const metadata = {
    title: 'Refsheet.net Shard',
    description: 'The content here has been served by a distributed server shard. It is not officially endorsed by Refsheet.'
}

export interface IShardLayoutProps {
    params: {
        username: string
    }
}

export default async function ShardLayout({children, params: {username}}: React.PropsWithChildren<IShardLayoutProps>) {
    let [handle, ...server] = username.split('.');

    if (server.length === 0) {
        server.push('ref')
        server.push('st')
    }

    console.log({username, handle, server});

    const fetchUrl = `https://${server.join('.')}/~${username}`;

    const data = await fetch(fetchUrl);
    console.log({data});

    return (
        <div>
            {children}
        </div>
    );
}
