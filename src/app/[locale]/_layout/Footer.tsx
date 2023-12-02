'use client';

import React from 'react'
import {Link} from '@refsheet/navigation'
import {Row, Col} from 'react-materialize'
import Restrict from '@refsheet/components/Shared/Restrict'
import styled, {StyledProps} from 'styled-components'

import PatreonWhite from '@refsheet/assets/images/third_party/patreon_white.png'
import Image from 'next/image'
import Refsheet from '@refsheet/services/Refsheet'
import {languages} from "@refsheet/i18n";

export function Footer({className}: StyledProps) {
    return (
        <footer className={'page-footer ' + className}>
            <div className="container margin-top--large">
                <Row>
                    <Col s={12} m={4}>
                        <div className="caption white-text">
                            <div className="social-links" style={{float: "right"}}>
                                <a
                                    href="https://twitter.com/Refsheet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={'Follow us on Twitter!'}
                                >
                                    <i className="fab fa-fw fa-twitter"/>
                                </a>
                                <a
                                    href="mailto:mau@refsheet.net"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={'Send an email'}
                                >
                                    <i className="fa fa-fw fa-envelope"/>
                                </a>
                                <a
                                    href={'https://discord.gg/nzdEHub'}
                                    target={'_blank'}
                                    rel="noopener noreferrer"
                                    title={'Join us on Discord!'}
                                >
                                    <i className={'fab fa-fw fa-discord'}/>
                                </a>{' '}
                                <a
                                    href="https://www.patreon.com/refsheet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={'Support us on Patreon!'}
                                >
                                    <Image
                                        placeholder='blur'
                                        src={PatreonWhite}
                                        alt="Support us on Patreon!"
                                    />
                                </a>
                            </div>
                            <span>Refsheet.net</span>
                        </div>
                        <p style={{clear: "both"}}>
                            A new, convenient way to organize your character designs, art
                            and world. All of this supported by{' '}
                            <a
                                href="https://www.patreon.com/refsheet"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Patreon
                            </a>
                            !
                        </p>
                    </Col>

                    <Col s={12} m={2}/>

                    <Col s={6} m={2}>
                        <ul className="margin-top--none">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/browse">Characters</Link>
                            </li>
                            <Restrict development>
                                <li>
                                    <Link href="/artists">Artists</Link>
                                </li>
                            </Restrict>
                            <li>
                                <Link href="/explore">Images</Link>
                            </li>
                            <li>
                                <Link href="/forums">Forums</Link>
                            </li>
                        </ul>
                    </Col>

                    <Col s={6} m={3}>
                        <ul className="margin-top--none">
                            <li>
                                <Link href="/terms">Terms</Link>
                            </li>
                            <li>
                                <Link href="/privacy">Privacy</Link>
                            </li>
                            <li>
                                <a href="/api">API</a>
                            </li>
                        </ul>
                    </Col>

                    <Col s={12} m={1}>
                        <ul className="right-align margin-top--none">
                            {languages.map(({code, name}) =>
                                <li key={code}>
                                    <Link href="/" locale={code}>{name}</Link>
                                </li>
                            )}
                        </ul>
                    </Col>
                </Row>

                <div className="smaller center margin-bottom--large">
                    Copyright &copy;2017-2023 Refsheet.net &bull; Version:{' '}
                    <a
                        href={
                            'https://github.com/Refsheet/refsheet-site-frontend/tree/' +
                            Refsheet.version
                        }
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        {Refsheet.version.substr(0, 7)}
                    </a>
                    <br/>
                    Character and user media ownership is subject to the copyright and
                    distribution policies of the owner. Use of character and user media
                    is granted to Refsheet.net to display and store.<br/> Unauthorized
                    uploads and media usage may be reported to{' '}
                    <a href="mailto:mau@refsheet.net">mau@refsheet.net</a>. See{' '}
                    <Link href="/terms">Terms</Link> for more details.

                    <noscript>
                        <div className="margin-top--small">
                            Javascript is disabled. Interactive elements of this page will not be available.
                        </div>
                    </noscript>
                </div>
            </div>
        </footer>
    )
}

export default styled(Footer)`
  background-color: ${props => props.theme.cardBackground} !important;
  color: ${props => props.theme.text} !important;
`
