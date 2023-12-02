import React from 'react'
import NavLink from '@refsheet/components/Shared/NavLink'
import Restrict from '@refsheet/components/Shared/Restrict'
import {useTranslations} from "next-intl";

export default function SiteNav() {
  const t = useTranslations('NavBar');

  return (
    <ul className="site-nav visible-on-med-and-up">
      <li>
        <NavLink href="/" exact activeClassName="primary-text">
          {t('home')}
        </NavLink>
      </li>

      <li>
        <NavLink href="/browse" activeClassName="primary-text">
          {t('characters')}
        </NavLink>
      </li>

      <Restrict development>
        <li>
          <NavLink href="/artists" activeClassName="primary-text strong">
            {t('artists')}
          </NavLink>
        </li>
      </Restrict>

      <li>
        <NavLink href="/explore" activeClassName="primary-text">
          {t('images')}
        </NavLink>
      </li>

      <li>
        <NavLink href="/forums" activeClassName="primary-text">
          {t('forums')}
        </NavLink>
      </li>

      {/*<li>*/}
      {/*<NavLink href='/guilds' activeClassName='primary-text'>Guilds</NavLink>*/}
      {/*</li>*/}

      {/*<li>*/}
      {/*<NavLink href='/marketplace'>Marketplace</NavLink>*/}
      {/*</li>*/}
    </ul>
  )
}
