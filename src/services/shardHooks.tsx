import {useContext} from "react";
import ShardContext from "@refsheet/services/ShardContext";
import {DocumentNode, OperationVariables, TypedDocumentNode} from "@apollo/client/core";
import {NoInfer, QueryHookOptions} from "@apollo/client/react/types/types";
import {QueryResult, useQuery} from "@apollo/client";

export function useShardConnection() {
    const ctx = useContext(ShardContext);
    return ctx.client;
}

export function useShardQuery<TData = any, TVariables extends OperationVariables = OperationVariables>(query: DocumentNode | TypedDocumentNode<TData, TVariables>, options?: QueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>): QueryResult<TData, TVariables> {
    const client = useShardConnection();
    return useQuery<TData, TVariables>(query, {client: client, ...options});
}
