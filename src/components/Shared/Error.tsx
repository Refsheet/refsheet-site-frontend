import React from 'react'
import Main from './Main'

const findError = error => {
    if (typeof error === 'undefined') {
        return 'Unknown Error'
    } else if (error.map) {
        return error.map(findError).join(', ')
    } else {
        return error.toString()
    }
}

export interface ErrorProps {
    error?: any;
    message?: string;
}

const Error: React.FC<ErrorProps> = ({error, message}) => {
    const classNames = ['modal-page-content']

    let finalText = message
    if (!finalText) {
        finalText = findError(error)
    }

    return (
        <Main className={classNames.join(' ')}>
            <div className="container">
                <h1>{finalText}</h1>
            </div>
        </Main>
    )
}

export default Error
