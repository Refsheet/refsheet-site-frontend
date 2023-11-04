import React from 'react'
import client from "@refsheet/services/ApplicationService";
import getUserProfile from '../../graph/queries/getUserProfile.graphql';
import UserView from '@refsheet/components/User/View';
import {GetUserProfileQuery} from "../../../@types/schema";
import type {CharacterGroup} from "@refsheet/components/User/types";
import NotFound from "@refsheet/components/Shared/views/NotFound";

export interface UserProfileProps {
    characterGroups: readonly CharacterGroup[];
    numCharacters: number;
    user: NonNullable<GetUserProfileQuery['getUser']>;
}

export default async function Page({params}) {
    const {data} = await client.query<GetUserProfileQuery>({
        query: getUserProfile,
        variables: {username: params?.username}
    });

    if (!data.getUser) {
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

export const dynamic = "force-dynamic";
