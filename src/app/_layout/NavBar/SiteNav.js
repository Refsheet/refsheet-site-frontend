import React from 'react'
import NavLink from '@refsheet/components/Shared/NavLink'
import {withTranslation} from 'react-i18next'
import Restrict from '@refsheet/components/Shared/Restrict'

const SiteNav = ({t}) => {
  return (
    <ul className="site-nav visible-on-med-and-up">
      <li>
        <NavLink href="/" exact activeClassName="primary-text">
          {t('nav.home', 'Home')}
        </NavLink>
      </li>

      <li>
        <NavLink href="/browse" activeClassName="primary-text">
          {t('nav.characters', 'Characters')}
        </NavLink>
      </li>

      <Restrict development>
        <li>
          <NavLink href="/artists" activeClassName="primary-text strong">
            {t('nav.artists', 'Artists')}
          </NavLink>
        </li>
      </Restrict>

      <li>
        <NavLink href="/explore" activeClassName="primary-text">
          {t('nav.images', 'Images')}
        </NavLink>
      </li>

      <li>
        <NavLink href="/forums" activeClassName="primary-text">
          {t('nav.forums', 'Forums')}
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

SiteNav.propTypes = {}

export default withTranslation('common')(SiteNav)
