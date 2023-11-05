import {usePathname, useRouter} from 'next/navigation'
import Link, {LinkProps} from 'next/link'
import React, {Children} from 'react'

export interface INavLinkProps extends React.PropsWithChildren<LinkProps> {
    activeClassName?: string;
    exact: boolean;
    className: string;
}

export default function NavLink({href, exact, children, activeClassName, ...props}: INavLinkProps) {
    const pathname = usePathname();
    const hrefStr = typeof href === 'string' ? href : href.pathname;
    const isActive = hrefStr && (exact ? pathname === href : pathname.startsWith(hrefStr));

    if (isActive) {
        props.className += activeClassName;
    }

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    )
}
