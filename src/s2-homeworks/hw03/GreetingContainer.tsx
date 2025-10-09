import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: UserType['name']) => void
}

export const pureAddUser = (name: UserType['name'], setError:React.Dispatch<React.SetStateAction<string>>, setName: React.Dispatch<React.SetStateAction<string>>, addUserCallback: (name: UserType['name']) => void):void => {
    if (name.trim().length === 0) {
        setError('Error name too short')
    } else {
        addUserCallback(name.trim())
        setName('')
    }

}

export const pureOnBlur = (name:  UserType['name'], setError:React.Dispatch<React.SetStateAction<string>>):void => { // если имя пустое - показать ошибку
    if(name.trim().length === 0) setError('Error name too short');
}

export const pureOnEnter = (e:KeyboardEvent<HTMLInputElement>, addUser: ()=>void):void => { // если нажата кнопка Enter - добавить
if(e.key=== 'Enter') addUser()
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e:KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName: string | undefined = users.length > 0 ? users[users.length - 1].name : undefined


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
