import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import Link, {LinkProps} from 'next/link'
import React, {Children} from 'react'

export interface INavLinkProps {
    activeClassName?: string
}

const ActiveLink: React.FC<React.PropsWithChildren<INavLinkProps & LinkProps>> = ({
                                                                                      children,
                                                                                      activeClassName,
                                                                                      ...props
                                                                                  }) => {
    const {asPath} = useRouter()

    const className =
        asPath === props.href || asPath === props.as
            ? `active ${activeClassName}`.trim()
            : ''

    return (
        <Link {...props}>
            <a className={className}>
                {children}
            </a>
        </Link>
    )
}

ActiveLink.propTypes = {
    activeClassName: PropTypes.string.isRequired,
}

export default ActiveLink
