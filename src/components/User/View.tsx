import Section from "../Shared/Section";
import Main from "../Shared/Main";
import React from "react";
import {extractRoles, IUserRoles} from "../../utils/UserUtils";
import UserProfileHeader from "./UserProfileHeader";
import {GetUserProfileQuery} from "../../../@types/schema";
import Link from "next/link";
import NumberUtils from "../../v1/utils/NumberUtils";

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
                <div className="sidebar-container">
                    <div className="sidebar">
                        <ul className="character-group-list margin-bottom--none">
                            <li className="all fixed">
                                <i className="material-icons left folder">person</i>
                                <Link href={`/${user.username}`} className="name">All Characters</Link>
                                <span className="count">
                                    {NumberUtils.format(999999)}
                                </span>
                            </li>

                            {user.character_groups?.map((group) => group && (
                                <li className="something">
                                    <i className="material-icons left folder">folder</i>
                                    <Link href={`/${user.username}#${group.slug}`}>{group.name}</Link>
                                    <span className="count">{NumberUtils.format(group.characters_count)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="main-content">
                        ( characters )
                    </div>
                </div>
            </Section>
        </Main>
    );
}

export default UserView;
