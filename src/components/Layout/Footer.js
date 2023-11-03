/* global Refsheet */

import React, {Component} from 'react'
import compose from '../../utils/compose'
import Link from 'next/link'
import {Row, Col} from 'react-materialize'
import Restrict from '../Shared/Restrict'
import i18n from '../../services/i18n'
import c from 'classnames'
import SessionService from '../../services/SessionService'
import {H3} from '../Styled/Headings'
import styled from 'styled-components'
import {withErrorBoundary} from '../Shared/ErrorBoundary'

import PatreonWhite from 'assets/images/third_party/patreon_white.png'
import Image from 'next/image'
import Refsheet from 'services/Refsheet'

class _Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      locale: i18n.language,
    }
  }

  componentDidMount() {
    const apply = locale => {
      this.setState({locale})
    }

    i18n.on('languageChanged', apply.bind(this))
  }

  setLocale(locale) {
    return e => {
      console.log("Locale.");
      e.preventDefault()
      i18n
        .changeLanguage(locale)
        .then(() => {
          SessionService.set({locale}).then(console.log).catch(console.error)
        })
        .catch(console.error)
    }
  }

  setTheme(theme) {
    return e => {
      e.preventDefault()
    }
  }

  render() {
    const languages = [
      {code: 'en', name: "English"},
      {code: 'es', name: "Español"},
      {code: 'pt', name: "Português"},
      {code: 'ru', name: "Русский"},
      {code: 'fr', name: "Français"},
      {code: 'de', name: "Deutsch"},
      {code: 'ja', name: "日本語"},
    ];

    console.log({"Locale": this.state.locale});

    return (
      <footer className={'page-footer ' + this.props.className}>
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
                    <a
                      className={c(
                        this.state.locale === code ? 'white-text' : 'grey-text'
                      )}
                      href={`/?locale=${code}`}
                      onClick={this.setLocale(code).bind(this)}
                    >
                      {name}
                    </a>
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
            <div className="smaller container margin-top--small">
              Character and user media ownership is subject to the copyright and
              distribution policies of the owner.<br/> Use of character and user media
              is granted to Refsheet.net to display and store.<br/> Unauthorized
              uploads and media usage may be reported to{' '}
              <a href="mailto:mau@refsheet.net">mau@refsheet.net</a>. See{' '}
              <Link href="/terms">Terms</Link> for more details.
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

const Footer = styled(_Footer)`
  background-color: ${props => props.theme.cardBackground} !important;
  color: ${props => props.theme.text} !important;
`

export default compose(withErrorBoundary)(Footer)
