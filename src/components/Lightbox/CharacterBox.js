import React from 'react'
import Link from 'next/link'
import Moment from 'react-moment'

const CharacterBox = ({name, profile_image, path, createdAt}) => (
  <div className={'character-box'}>
    <Link className={'character-avatar'} href={path}>
      <img src={profile_image.url.thumbnail} alt={name} title={name}/>
    </Link>
    <div className={'character-details'}>
      <Link className={'name'} href={path}>
        {name}
      </Link>
      <div className={'date'}>
        <Moment unix format={'MMMM D, YYYY'}>
          {createdAt}
        </Moment>
      </div>
    </div>
  </div>
)

export default CharacterBox
