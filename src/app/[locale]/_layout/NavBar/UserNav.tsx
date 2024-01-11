import React from 'react'
import UserMenu from './UserMenu'
import UploadMenu from './UploadMenu'

export default function UserNav() {
    return (
        <ul className="right">
            <UploadMenu/>
            <UserMenu/>
        </ul>
    )
};
