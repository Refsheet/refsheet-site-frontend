import React from 'react'
import {GetServerSideProps} from "next";
import {ParsedUrlQuery} from "querystring";
import client from "services/ApplicationService";
import getUserProfile from './getUserProfile.graphql';
import NotFound from "components/Shared/views/NotFound";

export interface UserProfileParams extends ParsedUrlQuery {
    username: string;
}

export interface UserProfileProps {
    user: IUserProfile;
}

export interface IUserProfile {
    name: string;
}

const UserProfile: React.FC<UserProfileProps> = ({user}) => {
    if (!user) return <NotFound/>
    
    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<UserProfileProps, UserProfileParams> = async ({params}) => {
    const {data} = await client.query({
        query: getUserProfile,
        variables: {username: params.username}
    });

    console.log(data);

    return {
        props: {
            user: data.getUser || null
        }
    }
}

export default UserProfile;
