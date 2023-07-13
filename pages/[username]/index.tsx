import React from 'react'
import client from "services/ApplicationService";
import getUserProfile from '../../src/graph/queries/getUserProfile.graphql';
import UserView from 'components/User/View';
import {GetUserProfileQuery} from "../../@types/schema";
import type { GsspParams, GsspResult } from '@refsheet/types';
import type { CharacterGroup } from "@refsheet/components/User/types";

export interface UserProfileProps {
    characterGroups: readonly CharacterGroup[]; 
    user: NonNullable<GetUserProfileQuery['getUser']>;
}

const UserProfile: React.FC<UserProfileProps> = ({ characterGroups, user}) => {
    return <UserView characterGroups={characterGroups} user={user}/>;
}

export async function getServerSideProps({params}: GsspParams<{ username: string }>): GsspResult<UserProfileProps> {
    const {data} = await client.query<GetUserProfileQuery>({
        query: getUserProfile,
        variables: {username: params?.username}
    });

    if (!data.getUser) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            characterGroups: data.getUser.character_groups?.map((group): CharacterGroup | null => {
                if (!group || !group.id) {
                    return null;
                }

                return {
                    id: group.id,
                    characterCount: group.characters_count,
                    name: group.name,
                }
            }).filter((x): x is CharacterGroup => !!x) ?? [],
            user: data.getUser
        }
    }
}

export default UserProfile;
