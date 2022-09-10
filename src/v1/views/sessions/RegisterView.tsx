import React, {useEffect, useRef, useState} from 'react'
import * as ReactGA from 'react-ga'
import Main from '../../shared/Main'
import Form from '../../shared/forms/Form'
import Input from '../../shared/forms/Input'
import Submit from '../../shared/forms/Submit'
import Flash from '../../../utils/Flash'
import {Link} from 'react-router-dom'
import compose, {withConfig, withCurrentUser} from '../../../utils/compose'
import ReCAPTCHA from 'react-google-recaptcha'
import {useHistory} from 'react-router'
import {Checkbox, Row, Col, Select} from 'react-materialize'
import {useSearchParams} from "../../../utils/useSearchParams";

export interface IRegisterViewProps {
    setCurrentUser: (any) => void;
    config: {
        recaptchaSiteKey?: string;
    }
}

const RegisterView: React.FC<IRegisterViewProps> = ({setCurrentUser, config}) => {
    const captchaRef = useRef<ReCAPTCHA>(null);
    const query = useSearchParams();
    const history = useHistory();

    const [userData, setUserData] = useState({
        username: query.username,
        email: null,
        password: null,
        password_confirmation: null,
        dob_m: (new Date()).getMonth() + 1,
        dob_d: (new Date()).getDate(),
        dob_y: (new Date()).getFullYear()
    });

    const [registrationData, setRegistrationData] = useState({
        captchaData: null,
        tosAgree: false,
    });

    useEffect(() => {
        document.body.classList.add('no-footer')

        return () => {
            document.body.classList.remove('no-footer')
        }
    }, []);

    function _handleChange(user) {
        ReactGA.event({
            category: 'User',
            action: 'Sign Up',
        })

        Flash.info(
            'Thank you for registering! Please check your email for confirmation.'
        )

        setCurrentUser(user)
        history.push('/')
    }

    function handleCaptchaChange(data) {
        setRegistrationData({
            ...registrationData,
            captchaData: data,
        });
    }

    function _handleError(e) {
        captchaRef.current && captchaRef.current.reset()
    }

    function handleTosAgree(e) {
        setRegistrationData({
            ...registrationData,
            tosAgree: e.target.checked,
        });
    }

    return (
        <Main title="Register" className="modal-page-content shaded-background">
            <div className="modal-page-content">
                <div className="narrow-container responsive">
                    <h1>Register</h1>

                    <Form
                        action="/users"
                        method="POST"
                        formName={'register_full'}
                        model={userData}
                        extraData={registrationData}
                        onChange={_handleChange.bind(this)}
                        onError={_handleError.bind(this)}
                        modelName="user"
                    >
                        <Row>
                            <Col s={12} l={6}>
                                <Input
                                    name="username"
                                    value={userData.username}
                                    label="Username"
                                    autoComplete="username"
                                    autoFocus
                                />

                                <Input
                                    name="email"
                                    type="email"
                                    value={userData.email}
                                    label="Email"
                                />

                                <Input
                                    name="password"
                                    value={userData.password}
                                    type="password"
                                    label="Password"
                                    autoComplete="new-password"
                                />

                                <Input
                                    name="password_confirmation"
                                    value={userData.password_confirmation}
                                    type="password"
                                    label="Confirm Password"
                                    autoComplete="new-password"
                                />

                                <Row>
                                    <Select
                                        name="dob_m"
                                        value={userData.dob_m.toString()}
                                        label="Birthday"
                                        s={5}
                                    >
                                        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((name, i) => (
                                            <option value={i + 1}>{name}</option>
                                        ))}
                                    </Select>
                                    <Select
                                        name="dob_m"
                                        value={userData.dob_d.toString()}
                                        s={3}
                                    >
                                        {Array.from({length: 31}, (x, i) => i + 1).map((name) => (
                                            <option value={name}>{name}</option>
                                        ))}
                                    </Select>
                                    <Select
                                        name="dob_m"
                                        value={userData.dob_y.toString()}
                                        s={4}
                                    >
                                        {Array.from({length: 100}, (x, i) => (new Date()).getFullYear() - i).map((name) => (
                                            <option value={name}>{name}</option>
                                        ))}
                                    </Select>
                                </Row>

                            </Col>
                            <Col s={12} l={6}>
                                {config.recaptchaSiteKey && (
                                    <>
                                        <ReCAPTCHA
                                            ref={captchaRef}
                                            sitekey={config.recaptchaSiteKey}
                                            theme={'dark'}
                                            onChange={handleCaptchaChange}
                                        />
                                        <div className={'muted margin-top--small'}>
                                            ^- We &lt;3 all robotic creatures, but we must ensure that
                                            you are a good, sentient robot.
                                        </div>
                                    </>
                                )}

                                <div className={'tos margin-top--large padding-bottom--large white-text'}>
                                    <p className="white-text">
                                        <strong>One more thing,</strong> when you use this site, you
                                        have to follow the rules listed in our{' '}
                                        <a href={'/terms'} rel="noreferrer" target={'_blank'}>
                                            Terms of Service
                                        </a>
                                        . You must also be over the age of 16. Lastly, you must
                                        promise to only ever be excellent to one another when on this
                                        site.
                                    </p>
                                    <Checkbox
                                        id={'tos_agree_or_be_ban'}
                                        value={'agree'}
                                        checked={registrationData.tosAgree}
                                        onChange={handleTosAgree}
                                        label={
                                            'I agree to follow the ToS, I am over 16, and I will be excellent to others.'
                                        }
                                    />
                                </div>
                            </Col>
                        </Row>


                        <div className="form-actions margin-top--large">
                            <Link
                                to="/login"
                                query={{username: userData.username}}
                                className="btn grey darken-3"
                            >
                                Log In
                            </Link>
                            <Submit
                                className={'right'}
                                disabled={!registrationData.tosAgree}
                            >
                                Register
                            </Submit>
                        </div>
                    </Form>
                </div>
            </div>
        </Main>
    )
}

export default compose(
    withCurrentUser(true),
    withConfig
)(RegisterView)
