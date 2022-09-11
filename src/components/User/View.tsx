import Section from "../Shared/Section";
import Main from "../Shared/Main";
import React from "react";
import {extractRoles, IUserRoles} from "../../utils/UserUtils";
import UserProfileHeader from "./UserProfileHeader";

export interface IUserProfile {
    name: string;
    username: string;
    created_at: string;
    profile: string;
    profile_html: string;
    profile_image_url: string;

    blocks: boolean;
    is_blocked: boolean;
    is_followed: boolean;
    is_admin: boolean;
    is_managed: boolean;
    is_moderator: boolean;
    is_supporter: boolean;
    is_patron: boolean;
}

export interface IUserViewProps {
    user: IUserProfile
}

const UserView: React.FC<IUserViewProps> = ({user}) => {
    const roles: IUserRoles = extractRoles(user);

    return (
        <Main title={[user.name, 'Users']}>
            <UserProfileHeader
                username={user.username}
                roles={roles}
                profile={user.profile}
                avatarUrl={user.profile_image_url}
                displayName={user.name}
                blocked={user.is_blocked}
                followed={user.is_followed}
            />

            <Section container className="margin-top--large padding-bottom--none">
                ( characters )
            </Section>
        </Main>
    );
}

export default UserView;
