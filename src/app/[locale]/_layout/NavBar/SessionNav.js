import React from 'react'
import DropdownLink from './DropdownLink'
import {Link} from '@refsheet/navigation'
import {useNsfwOk, useSession} from "@refsheet/hooks/useCurrentUser";

export default function SessionNav() {
  const [nsfwOk, setNsfwOk] = useNsfwOk();
  const nsfwClassName = nsfwOk ? 'nsfw' : 'no-nsfw'

  const onNsfwClick = (e) => {
    e.preventDefault();
    setNsfwOk(!nsfwOk);
  }

  return (
    <ul className="right">
      <DropdownLink icon="person" text="Sign In" data-testid={'session-nav'}>
        <ul className="dropdown-menu">
          <li>
            <a
              href="#session-modal"
              className="modal-trigger"
              data-testid={'login-modal'}
            >
              <i className="material-icons left">person</i>
              <span>Sign In</span>
            </a>
          </li>
          <li>
            <Link href="/register" data-testid={'register-link'}>
              <i className="material-icons left">create</i>
              <span>Register</span>
            </Link>
          </li>

          <li className="divider"/>

          <li>
            <a onClick={onNsfwClick} className={nsfwClassName}>
              <i className="material-icons left">
                {nsfwOk ? 'remove_circle' : 'remove_circle_outline'}
              </i>
              <span>{nsfwOk ? 'Hide NSFW' : 'Show NSFW'}</span>
            </a>
          </li>
        </ul>
      </DropdownLink>
    </ul>
  )
}
