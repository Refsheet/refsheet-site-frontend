'use client';

import Section from "../Shared/Section";
import {useSearchParams} from "next/navigation";
import Main from "../Shared/Main";
import React from "react";
import {extractRoles, IUserRoles} from "@refsheet/utils/UserUtils";
import UserProfileHeader from "./UserProfileHeader";
import {GetUserProfileQuery} from "../../../@types/schema";
import CharacterGroupList from "./CharacterGroupList";
import type {CharacterGroup} from "./types";

export interface IUserViewProps {
    characterGroups: readonly CharacterGroup[];
    numCharacters: number;
    user: NonNullable<GetUserProfileQuery['getUser']>
}

const UserView: React.FC<IUserViewProps> = ({characterGroups, numCharacters, user}) => {
    const searchParams = useSearchParams();
    const currentCharacterGroupSlug = searchParams.get("group");

    if (!user) return null;
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
                <div className="sidebar-container">
                    <div className="sidebar">
                        <CharacterGroupList
                            currentGroupId={currentCharacterGroupSlug}
                            groups={characterGroups}
                            numCharacters={numCharacters}
                            username={user.username || "deleted-" + user.id}
                        />
                    </div>

                    <div className="main-content">
                        {currentCharacterGroupSlug ? `(characters from ${currentCharacterGroupSlug})` : "(all characters)"}
                    </div>
                </div>
            </Section>
        </Main>
    );
}

export default UserView;
