import React from 'react'
import {GetServerSideProps} from "next";
import {ParsedUrlQuery} from "querystring";
import client from "services/ApplicationService";
import getUserProfile from './getUserProfile.graphql';
import NotFound from "components/Shared/views/NotFound";
import UserView, {IUserProfile} from 'components/User/View';

export interface UserProfileParams extends ParsedUrlQuery {
    username: string;
}

export interface UserProfileProps {
    user: IUserProfile;
}

const UserProfile: React.FC<UserProfileProps> = ({user}) => {
    if (!user) return <NotFound/>;
    return <UserView user={user}/>;
}

export const getServerSideProps: GetServerSideProps<UserProfileProps, UserProfileParams> = async ({params}) => {
    const {data} = await client.query({
        query: getUserProfile,
        variables: {username: params.username}
    });

    return {
        props: {
            user: data.getUser || null
        }
    }
}

export default UserProfile;
