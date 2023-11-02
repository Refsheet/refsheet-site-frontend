import React from 'react'
import Main from '../../Shared/Main'
import Link from 'next/link'

const View = ({data: {artists, currentPage, perPage}}) => {
  return (
    <Main title={'Artists'}>
      <div className={'container'}>
        <ul>
          {artists.map(artist => (
            <li key={artist.slug}>
              <Link href={`/artists/${artist.slug}`}>{artist.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Main>
  )
}

export default View
