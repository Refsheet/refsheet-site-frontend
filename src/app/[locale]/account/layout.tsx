import React from 'react';
import Container from "v1/shared/material/Container";
import UserCard from "v1/views/account/_user_card";
import Button from "components/Styled/Button";
import Advertisement from "v1/shared/advertisement";
import Suggestions from "v1/views/account/_suggestions";
import Main from "v1/shared/Main";
import {useTranslation} from "react-i18next";
import useModals from "hooks/useModals";
import {useCurrentUser} from "hooks/useCurrentUser";
import SideNav from "./_layout/SideNav";

export default function Layout({children}: React.PropsWithChildren) {
    const {t} = useTranslation();
    const {openNewCharacterModal} = useModals();
    const currentUser = useCurrentUser();

    return (
        <Main flex className="with-sidebar">
            <Container flex className="activity-feed">
                <div className="sidebar">
                    <UserCard user={currentUser}/>

                    <Button
                        className={'margin-top--medium'}
                        small
                        onClick={openNewCharacterModal}
                    >
                        <i className={'material-icons left'}>note_add</i>
                        <span>{t('actions.new_character', 'New Character')}</span>
                    </Button>

                    <SideNav/>
                </div>

                <div className="content">{children}</div>

                <div className="sidebar aside transparent">
                    <Advertisement/>
                    <Suggestions/>
                </div>
            </Container>
        </Main>
    );
}
