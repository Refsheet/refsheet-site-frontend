import React from 'react'
import UserMenu from './UserMenu'
import CartMenu from './CartMenu'
import TransferMenu from './TransferMenu'
import NotificationMenu from './NotificationMenu'
import ConversationMenu from './ConversationMenu'
import UploadMenu from './UploadMenu'

export default function UserNav() {
    return (
        <ul className="right">
            {/*<CartMenu/>*/}
            {/*<TransferMenu/>*/}
            <UploadMenu/>
            <ConversationMenu/>
            <NotificationMenu/>
            <UserMenu/>
        </ul>
    )
};
