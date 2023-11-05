import React from 'react';
import Button from "../Styled/Button";
import Icon from "@refsheet/v1/shared/material/Icon";
import {Icon as MIcon} from "react-materialize";
import {useCurrentUser} from "@refsheet/hooks/useCurrentUser";
import {IUserRoles} from "@refsheet/utils/UserUtils";

export interface IUserActionButtonsProps {
    username: string;
    roles: IUserRoles;
    blocked: boolean;
    followed: boolean;
}

const UserActionButtons: React.FC<IUserActionButtonsProps> = ({username, blocked, roles, followed}) => {
    const currentUser = useCurrentUser();

    let canBlock = false;
    let canFollow = false;
    let canMessage = false;

    if (currentUser && username !== currentUser.username) {
        canFollow = !blocked;
        canMessage = !blocked;
        canBlock = !roles.admin;
    }

    const handleFollowClick = (e: React.MouseEvent) => {
        e.preventDefault();
    }

    const handleMessageClick = (e: React.MouseEvent) => {
        e.preventDefault();
    }

    const handleBlockClick = (e: React.MouseEvent) => {
        e.preventDefault();
    }

    return (
        <div className={'user-actions'} style={{width: 200}}>
            {canFollow && (
                <Button
                    className="btn-muted btn-flat btn-block margin-bottom--medium"
                    onClick={handleFollowClick}
                >
                <span className="hide-on-med-and-down">
                  {followed ? 'Following' : 'Follow'}
                </span>
                    <Icon style={{color: followed ? '#ffca28' : 'rgba(255, 255, 255, 0.7)'}} className="right">
                        person_add
                    </Icon>
                </Button>
            )}

            {canMessage && (
                <Button
                    onClick={handleMessageClick}
                    className={'btn-block btn-flat margin-bottom--medium'}
                >
                    <MIcon right>message</MIcon>
                    Message
                </Button>
            )}

            {canBlock && (
                <Button
                    onClick={handleBlockClick}
                    className={
                        'btn-block btn-flat btn-secondary margin-bottom--medium'
                    }
                >
                    <MIcon right>block</MIcon>
                    {blocked ? 'Unblock' : 'Block'}
                </Button>
            )}
        </div>
    );
}

export default UserActionButtons;
