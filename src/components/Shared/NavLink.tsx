import {useRouter} from 'next/navigation'
import PropTypes from 'prop-types'
import Link, {LinkProps} from 'next/link'
import React, {Children} from 'react'

export interface INavLinkProps {
    activeClassName?: string;
}

const ActiveLink: React.FC<React.PropsWithChildren<INavLinkProps & LinkProps>> = ({
                                                                                      children,
                                                                                      activeClassName,
                                                                                      ...props
                                                                                  }) => {

    const className =
        (false)
            ? `active ${activeClassName}`.trim()
            : ''

    return (
        <Link {...props} className={className}>
            {children}
        </Link>
    )
}

ActiveLink.propTypes = {
    activeClassName: PropTypes.string.isRequired,
}

export default ActiveLink
