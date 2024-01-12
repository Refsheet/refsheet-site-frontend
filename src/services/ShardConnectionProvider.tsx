'use client';

import React from 'react';
import ShardContext from "@refsheet/services/ShardContext";
import buildShardClient from "@refsheet/services/shardClient";

export interface IShardConnectionProviderProps {
    hostname: string;
}

export default function ShardConnectionProvider(props: React.PropsWithChildren<IShardConnectionProviderProps>) {
    const client = buildShardClient(props.hostname);

    return (
        <ShardContext.Provider value={{
            hostname: props.hostname,
            client: client,
        }}>
            {props.children}
        </ShardContext.Provider>
    );
}
