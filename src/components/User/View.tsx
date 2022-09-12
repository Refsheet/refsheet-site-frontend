import Section from "../Shared/Section";
import Main from "../Shared/Main";
import React from "react";
import {extractRoles, IUserRoles} from "../../utils/UserUtils";
import UserProfileHeader from "./UserProfileHeader";
import {GetUserProfileQuery} from "../../../@types/schema";

export interface IUserViewProps {
    user: NonNullable<GetUserProfileQuery['getUser']>
}

const UserView: React.FC<IUserViewProps> = ({user}) => {
    const roles: IUserRoles = extractRoles(user);

    return (
        <Main title={[user.name, 'Users']}>
            <UserProfileHeader
                username={user.username || 'deleted-' + user.id}
                roles={roles}
                profile={user.profile || ''}
                avatarUrl={user.profile_image_url || ''}
                displayName={user.name || 'Deleted User [' + user.id + ']'}
                blocked={user.is_blocked || false}
                followed={user.is_followed || false}
            />

            <Section container className="margin-top--large padding-bottom--none">
                {JSON.stringify(user.character_groups)}
                ( characters )
            </Section>
        </Main>
    );
}

export default UserView;
