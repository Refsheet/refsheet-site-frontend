import React from 'react'
import client from "services/ApplicationService";
import getUserProfile from '../../src/graph/queries/getUserProfile.graphql';
import UserView from 'components/User/View';
import {GetUserProfileQuery} from "../../@types/schema";
import type { GsspParams, GsspResult } from '@refsheet/types';

export interface UserProfileProps {
    user: NonNullable<GetUserProfileQuery['getUser']>;
}

const UserProfile: React.FC<UserProfileProps> = ({user}) => {
    return <UserView user={user}/>;
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
            user: data.getUser
        }
    }
}

export default UserProfile;
