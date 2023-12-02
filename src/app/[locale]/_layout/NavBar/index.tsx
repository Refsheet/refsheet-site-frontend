'use client';

import React, {useState} from 'react'
import Link from 'next/link'
import SearchBar from './SearchBar'
import SiteNav from './SiteNav'
import UserNav from './UserNav'
import SessionNav from './SessionNav'
import c from 'classnames'
import IdentityModal from '@refsheet/components/Shared/CommentForm/IdentityModal'
import Image from 'next/image'
import RefsheetLogo64 from '@refsheet/assets/images/logos/RefsheetLogo_64.png'
import {useCurrentUser, useNsfwOk} from "@refsheet/hooks/useCurrentUser";
import {useSearchParam} from "@refsheet/hooks/useSearchParam";
import {useTranslations} from "next-intl";

interface INavBarProps {
    className?: string;
    notice?: string;
}

export default function NavBar({className, notice}: INavBarProps) {
    const query = useSearchParam('q');
    const currentUser = useCurrentUser();
    const identity = undefined; // useCurrentIdentity();
    const [nsfwOk, _] = useNsfwOk();

    const [sessionModalOpen, setSessionModalOpen] = useState<boolean>(false);
    const [identityModalOpen, setIdentityModalOpen] = useState<boolean>(false);
    const [register, setRegister] = useState<boolean>(false);
    const [noticeClosed, setNoticeClosed] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleMenuToggle = (e) => {
        e.preventDefault()
        setMenuOpen(v => !v);
    }

    const handleMenuClose = (e) => {
        e.preventDefault()
        setMenuOpen(false);
    }

    const handleNoticeClose = (e) => {
        e.preventDefault()
        setNoticeClosed(true);
    }

    const handleIdentityOpen = (e) => {
        e.preventDefault()
        setIdentityModalOpen(true);
    }

    const handleIdentityClose = () => {
        setIdentityModalOpen(false);
    }

    const t = useTranslations('NavBar');

    return (
        <div
            className={c('NavBar navbar-fixed user-bar', className, {menuOpen})}
        >
            <div className="navbar-shroud" onClick={handleMenuClose}/>

            {!noticeClosed && notice && (
                <div
                    className={'navbar-notice'}
                    onClick={handleNoticeClose}
                >
                    <div className={'container'}>
                        <strong>{t('notice')}:</strong> {notice}
                    </div>

                    <button
                        type={'button'}
                        className={'notice-close'}
                        onClick={handleNoticeClose}
                    >
                        <i className={'material-icons'}>close</i>
                    </button>
                </div>
            )}

            {identityModalOpen && (
                <IdentityModal onClose={handleIdentityClose}/>
            )}

            <nav>
                <div className="container">
                    <ul className="menu left hide-on-med-and-up">
                        <li>
                            <a onClick={handleMenuToggle}>
                                <i className="material-icons">menu</i>
                            </a>
                        </li>
                    </ul>

                    <Link href="/" className="logo left">
                        <Image
                            src={RefsheetLogo64}
                            alt="Refsheet.net"
                            width="32"
                            height="32"
                        />
                    </Link>

                    <SiteNav/>

                    <div className="right">
                        <SearchBar query={query}/>

                        {currentUser ? (
                            <UserNav/>
                        ) : (
                            <SessionNav/>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}
