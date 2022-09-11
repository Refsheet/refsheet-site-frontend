import React from 'react'
import {GetServerSideProps} from "next";
import {ParsedUrlQuery} from "querystring";
import client from "services/ApplicationService";
import getUserProfile from './getUserProfile.graphql';
import NotFound from "components/Shared/views/NotFound";
import Main from "../../src/components/Shared/Main";
import Header from "../../src/v1/views/user/Header";
import Characters from "../../src/v1/views/user/Characters";
import Section from 'components/Shared/Section';

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
        <Main title={[user.name, 'Users']}>
            <Header
                user={user}
                blocked={user.is_blocked}
                blocks={user.blocks}
                followed={user.is_followed}
                onFollow={() => null}
            />

            <Section container className="margin-top--large padding-bottom--none">
                ( characters )
            </Section>
        </Main>
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
