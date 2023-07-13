import { useRouter } from "next/router";
import Section from "../Shared/Section";
import Main from "../Shared/Main";
import React from "react";
import {extractRoles, IUserRoles} from "../../utils/UserUtils";
import UserProfileHeader from "./UserProfileHeader";
import {GetUserProfileQuery} from "../../../@types/schema";
import CharacterGroupList from "./CharacterGroupList";
import type { CharacterGroup } from "./types";
import useCurrentCharacterGroup from "./useCurrentCharacterGroup";

export interface IUserViewProps {
    characterGroups: readonly CharacterGroup[];
    user: NonNullable<GetUserProfileQuery['getUser']>
}

const UserView: React.FC<IUserViewProps> = ({ characterGroups, user }) => {
    const roles: IUserRoles = extractRoles(user);
    const currentCharacterGroupId = useCurrentCharacterGroup();

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
                <div className="sidebar-container">
                    <div className="sidebar">
                        <CharacterGroupList
                            currentGroupId={currentCharacterGroupId}
                            groups={characterGroups}
                            username={user.username || "deleted-" + user.id}
                        />
                    </div>

                    <div className="main-content">
                        {currentCharacterGroupId ? `(characters from ${currentCharacterGroupId})` : "(all characters)"}
                    </div>
                </div>
            </Section>
        </Main>
    );
}

export default UserView;
