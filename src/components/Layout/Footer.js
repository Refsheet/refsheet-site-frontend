/* global Refsheet */

import React, { Component } from "react";
import compose from "../../utils/compose";
import { Link } from "react-router-dom";
import { Row, Col } from "react-materialize";
import Restrict from "../Shared/Restrict";
import i18n from "../../services/i18n";
import c from "classnames";
import SessionService from "../../services/SessionService";
import { H3 } from "../Styled/Headings";
import styled from "styled-components";
import { withErrorBoundary } from "../Shared/ErrorBoundary";

import PatreonWhite from "assets/images/third_party/patreon_white.png";
import Image from "next/image";
import Refsheet from "services/Refsheet";

class _Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: i18n.language,
    };
  }

  componentDidMount() {
    const apply = (locale) => {
      this.setState({ locale });
    };

    i18n.on("languageChanged", apply.bind(this));
  }

  setLocale(locale) {
    return (e) => {
      e.preventDefault();
      i18n
        .changeLanguage(locale)
        .then(() => {
          SessionService.set({ locale }).then(console.log).catch(console.error);
        })
        .catch(console.error);
    };
  }

  setTheme(theme) {
    return (e) => {
      e.preventDefault();
    };
  }

  render() {
    return (
      <footer className={"page-footer " + this.props.className}>
        <div className="container margin-top--large">
          <Row>
            <Col s={12} m={4}>
              <div className="caption white-text">
                <div className="social-links" style={{ float: "right" }}>
                  <a
                    href="https://twitter.com/Refsheet"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={"Follow us on Twitter!"}
                  >
                    <i className="fab fa-fw fa-twitter" />
                  </a>
                  <a
                    href="mailto:mau@refsheet.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={"Send an email"}
                  >
                    <i className="fa fa-fw fa-envelope" />
                  </a>
                  <a
                    href={"https://discord.gg/nzdEHub"}
                    target={"_blank"}
                    rel="noopener noreferrer"
                    title={"Join us on Discord!"}
                  >
                    <i className={"fab fa-fw fa-discord"} />
                  </a>{" "}
                  <a
                    href="https://www.patreon.com/refsheet"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={"Support us on Patreon!"}
                  >
                    <Image
                      placeholder="blur"
                      src={PatreonWhite}
                      alt="Support us on Patreon!"
                    />
                  </a>
                </div>
                <span>Refsheet.net</span>
              </div>
              <p style={{ clear: "both" }}>
                A new, convenient way to organize your character designs, art
                and world. All of this supported by{" "}
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

            <Col s={12} m={2} />

            <Col s={6} m={2}>
              <ul className="margin-top--none">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/browse">Characters</Link>
                </li>
                <Restrict development>
                  <li>
                    <Link to="/artists">Artists</Link>
                  </li>
                </Restrict>
                <li>
                  <Link to="/explore">Images</Link>
                </li>
                <li>
                  <Link to="/forums">Forums</Link>
                </li>
              </ul>
            </Col>

            <Col s={6} m={3}>
              <ul className="margin-top--none">
                <li>
                  <Link to="/terms">Terms</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy</Link>
                </li>
                <li>
                  <a href="/api">API</a>
                </li>
              </ul>
            </Col>

            <Col s={12} m={1}>
              <ul className="right-align margin-top--none">
                <li>
                  <a
                    className={c(
                      this.state.locale === "en" ? "white-text" : "grey-text",
                    )}
                    href="/?locale=en"
                    onClick={this.setLocale("en").bind(this)}
                  >
                    English
                  </a>
                </li>
                <li>
                  <a
                    className={c(
                      this.state.locale === "es" ? "white-text" : "grey-text",
                    )}
                    href="/?locale=es"
                    onClick={this.setLocale("es").bind(this)}
                  >
                    Español
                  </a>
                </li>
                <li>
                  <a
                    className={c(
                      this.state.locale === "pt" ? "white-text" : "grey-text",
                    )}
                    href="/?locale=pt"
                    onClick={this.setLocale("pt").bind(this)}
                  >
                    Português
                  </a>
                </li>
                <li>
                  <a
                    className={c(
                      this.state.locale === "ru" ? "white-text" : "grey-text",
                    )}
                    href="/?locale=ru"
                    onClick={this.setLocale("ru").bind(this)}
                  >
                    Русский
                  </a>
                </li>
                <li>
                  <a
                    className={c(
                      this.state.locale === "ja" ? "white-text" : "grey-text",
                    )}
                    href="/?locale=ja"
                    onClick={this.setLocale("ja").bind(this)}
                  >
                    日本語
                  </a>
                </li>
              </ul>
            </Col>
          </Row>

          <div className="smaller center margin-bottom--large">
            Copyright &copy;2017-2023 Refsheet.net &bull; Version:{" "}
            <a
              href={
                "https://github.com/Refsheet/refsheet-site-frontend/tree/" +
                Refsheet.version
              }
              target={"_blank"}
              rel={"noreferrer"}
            >
              {Refsheet.version.substr(0, 7)}
            </a>
            <br />
            <div className="smaller container margin-top--small">
              Character and user media ownership is subject to the copyright and
              distribution policies of the owner.
              <br /> Use of character and user media is granted to Refsheet.net
              to display and store.
              <br /> Unauthorized uploads and media usage may be reported to{" "}
              <a href="mailto:mau@refsheet.net">mau@refsheet.net</a>. See{" "}
              <Link to="/terms">Terms</Link> for more details.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

const Footer = styled(_Footer)`
  background-color: ${(props) => props.theme.cardBackground} !important;
  color: ${(props) => props.theme.text} !important;
`;

export default compose(withErrorBoundary)(Footer);
