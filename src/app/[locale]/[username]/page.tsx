"use client";

import React from 'react'
import getUserProfile from '@refsheet/graph/queries/getUserProfile.graphql';
import UserView from 'components/User/View';
import {GetUserProfileQuery} from "../../../../@types/schema";
import type {CharacterGroup} from "components/User/types";
import NotFound from "components/Shared/views/NotFound";
import {getShardClient} from "@refsheet/services/shardClient";

export interface UserProfileProps {
    characterGroups: readonly CharacterGroup[];
    numCharacters: number;
    user: NonNullable<GetUserProfileQuery['getUser']>;
}

export default async function Page({params}) {
    const shard = getShardClient();
    if (!shard) return NotFound;
    const username = params?.username.split('.')[0];
    console.log("=======================> ", username);

    const {data, ...rest} = await shard.query<GetUserProfileQuery>({
        query: getUserProfile,
        variables: {username}
    });

    console.log({data, rest, errors: rest.errors});

    if (!data || !data.getUser) {
        return <NotFound/>;
    }

    const characterGroups = data.getUser.character_groups?.map((group): CharacterGroup | null => {
        if (!group || !group.slug) {
            return null;
        }

        console.log({group});

        return {
            id: group.slug,
            characterCount: group.characters_count,
            name: group.name,
        }
    }).filter((x): x is CharacterGroup => !!x) ?? [];

    const numCharacters = parseInt(data.getUser.characters_count ?? "0", 10);
    const user = data.getUser;

    return <UserView characterGroups={characterGroups} numCharacters={numCharacters} user={user}/>;
}
