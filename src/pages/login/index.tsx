import React, { FC, useState, useContext } from 'react'

import { Context as ContextAuth } from '~/store/auth'

import { get as getAuth } from '~/services/fake/auth/get'

import {LayoutDefault} from "~/layouts/default";
import {Header} from "~/components/header";
import {Redirect} from "react-router-dom";
import {Footer} from "~/components/footer";
import {Aside} from "~/components/Aside";

import styles from "./style.css";

type InputChangeEvent = import('react').ChangeEvent<HTMLInputElement>
type FormSubmitEvent = import('react').FormEvent<HTMLFormElement>

type ContextTypeAuth = import('~/store/auth').ContextType

const Form: FC = () => {
    const { dispatch: dispatchAuth } = useContext<ContextTypeAuth>(ContextAuth)

    const [username, setUsername] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(false)
    const [password, setPassword] = useState<string>('')

    const handleSubmit = async (ev: FormSubmitEvent) => {
        ev.preventDefault()
        const response = await getAuth({ username: username, password: password })
        switch (response.result) {
            case true:
                dispatchAuth({ type: 'LOGIN', token: response.data.token })
                break
            case false:
            default:
                setIsError(true)
        }
    }

    const handleUsername = (ev: InputChangeEvent) => {
        setIsError(false)
        setUsername(ev.target.value)
    }

    const handlePassword = (ev: InputChangeEvent) => {
        setIsError(false)
        setPassword(ev.target.value)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {isError &&
                <div className={styles.errorBox}>
                    <span className={styles.error}>Wrong Login or Password</span>
                </div>
            }
            <div className={styles.inputBox}>
                <label htmlFor="username" className={styles.label}>Username: </label>
                <input id={'username'} type="text" className={styles.input} value={username} onChange={handleUsername} autoComplete={'on'}/>
            </div>
            <div className={styles.inputBox}>
                <label htmlFor="password" className={styles.label}>Password: </label>
                <input id={'password'} type="password" className={styles.input} value={password} onChange={handlePassword} autoComplete={'on'}/>
            </div>
            <button type={"submit"}>LOGIN</button>
        </form>
    )
}

const PageLogin: FC = () => {
    const { state: stateAuth } = useContext<ContextTypeAuth>(ContextAuth)

    return (
        !stateAuth.token ?
            <LayoutDefault
                header={<Header />}
                content={<Form />}
                aside={<Aside />}
                footer={<Footer />}
            />
            : <Redirect to={'/profile'} />
    )
}

export { PageLogin }
