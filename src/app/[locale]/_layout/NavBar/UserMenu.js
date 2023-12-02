import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import DropdownLink from './DropdownLink'
import Restrict from '@refsheet/components/Shared/Restrict'
import {withTranslation} from 'react-i18next'
import {connect} from 'react-redux'
import {openNewCharacterModal} from '@refsheet/actions'
import compose from '@refsheet/utils/compose'
import useModals from "@refsheet/hooks/useModals";
import {useCurrentUser} from "@refsheet/hooks/useCurrentUser";

export default function UserMenu() {
  const {openNewCharacterModal} = useModals();
  const currentUser = useCurrentUser();

  const nsfwClassName = nsfwOk ? 'nsfw' : 'no-nsfw'

  const handleIdentityClick = (e) => {
    e.preventDefault();
  }

  const handleNewCharacterClick = (e) => {
    e.preventDefault();
    openNewCharacterModal();
  }

  return (
    <DropdownLink
      imageSrc={identity.avatarUrl}
      className={nsfwClassName}
      data-testid={'user-menu'}
    >
      <ul className="dropdown-menu">
        <li>
          <Link
            className="flex align-center"
            href={'/' + user.username}
            data-testid={'user-profile-link'}
          >
            <div className="no-grow">
              <i className="material-icons left">
                {identity.characterId !== null ? 'people' : 'person'}
              </i>
            </div>
            <div className="flex-grow-1">
              <span>{identity.name}</span>
              <br/>
              <span className="muted">@{user.username}</span>
            </div>
          </Link>
        </li>

        <li>
          <a href={'#identity-select'} onClick={handleIdentityClick}>
            <i className={'material-icons left'}>swap_horiz</i>
            <span>{t('identity.change', 'Change Identity')}</span>
          </a>
        </li>

        <li>
          <a href={'#'} onClick={handleNewCharacterClick}>
            <i className={'material-icons left'}>note_add</i>
            <span>{t('actions.new_character', 'New Character')}</span>
          </a>
        </li>

        <Restrict admin>
          <li>
            <a href="/admin" target={'_blank'}>
              <i className="material-icons left">vpn_key</i>
              <span>{t('nav.admin', 'Admin')}</span>
            </a>
          </li>
        </Restrict>

        <li className="divider"/>

        <li>
          <a onClick={onNsfwClick} className={nsfwClassName}>
            <i className="material-icons left">
              {nsfwOk ? 'remove_circle' : 'remove_circle_outline'}
            </i>
            <span>
                {nsfwOk
                  ? t('nav.hide-nsfw', 'Hide NSFW')
                  : t('nav.show-nsfw', 'Show NSFW')}
              </span>
          </a>
        </li>

        <li>
          <a onClick={onLogoutClick}>
            <i className="material-icons left">exit_to_app</i>
            <span>{t('nav.logout', 'Sign Out')}</span>
          </a>
        </li>
      </ul>
    </DropdownLink>
  )
}
