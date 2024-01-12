import {createContext} from 'react';
import {ApolloClient} from "@apollo/client";

export interface IShardContext {
    hostname?: string;
    client?: ApolloClient<any>;
}

const defaultState: IShardContext = {};

const ShardContext = createContext<IShardContext>(defaultState);
export default ShardContext;
