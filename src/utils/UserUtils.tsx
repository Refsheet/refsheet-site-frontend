import c from 'classnames'

// Keep this in sync with user-rank-colors.sass

export const USER_FG_COLOR = {
    admin: '#2480C8',
    patron: '#F96854',
    moderator: '#B298DC',
    supporter: '#C95D63',
}

export const USER_BG_COLOR = {
    admin: '#030a0f',
    patron: '#0f0404',
    moderator: '#0c050f',
    supporter: '#0f0505',
}

export interface IUserRoles {
    admin?: boolean | null;
    patron?: boolean | null;
    supporter?: boolean | null;
    moderator?: boolean | null;
}

export interface IUserRolesLegacy {
    is_admin?: boolean | null;
    is_patron?: boolean | null;
    is_supporter?: boolean | null;
    is_moderator?: boolean | null;
}

export type TUserRoles = IUserRoles | IUserRolesLegacy;

function isLegacyRole(roles: TUserRoles): roles is IUserRolesLegacy {
    return ("is_admin" in roles) || ("is_patron" in roles) || ("is_supporter" in roles) || ("is_moderator" in roles);
}

export function extractRoles(roles: TUserRoles): IUserRoles {
    if (isLegacyRole(roles)) {
        return {
            admin: roles.is_admin,
            patron: roles.is_patron,
            supporter: roles.is_supporter,
            moderator: roles.is_moderator
        };
    } else {
        return roles;
    }
}

export const userClasses = (roles: TUserRoles | null, className = 'user-color'): string => {
    if (!roles) {
        return ''
    }

    const {admin, patron, supporter, moderator} = extractRoles(roles);
    return c(className, {admin, patron, supporter, moderator})
}

export const userFgColor = (roles: TUserRoles | null) => {
    if (!roles) return ''
    const {admin, patron, moderator, supporter} = extractRoles(roles)
    if (admin) return USER_FG_COLOR.admin
    if (moderator) return USER_FG_COLOR.moderator
    if (patron) return USER_FG_COLOR.patron
    if (supporter) return USER_FG_COLOR.supporter
}

export const userBgColor = (roles: TUserRoles | null) => {
    if (!roles) return ''
    const {admin, patron, moderator, supporter} = extractRoles(roles)
    if (admin) return USER_BG_COLOR.admin
    if (moderator) return USER_BG_COLOR.moderator
    if (patron) return USER_BG_COLOR.patron
    if (supporter) return USER_BG_COLOR.supporter
}
