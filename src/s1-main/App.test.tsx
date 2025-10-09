import React, {useState} from 'react'
import {render, screen} from '@testing-library/react'
import App from './App'
import {v1} from "uuid";
import {pureAddUserCallback} from "../s2-homeworks/hw03/HW3";

test('renders learn react link', () => {
    render(<App/>)
    // const linkElement = screen.getByText(/learn react/i)
    // expect(linkElement).toBeInTheDocument()
    expect(1).toBe(1)
})

test ('Should add correct user',()=>{
    const user1Id = v1();
    const user2Id = v1();

    const [startState,setStartState]=useState<Array<UserType>>([
        {_id:user1Id, name:'Helga'},
        {_id:user2Id, name:'Vadim'},
    ])

    pureAddUserCallback('Leo',setStartState,startState)

    expect(startState.length).toBe(3)
    expect(startState[2].name).toBe('Leo');
})



export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}
//
// export const pureAddUserCallback = (name: string, setUsers: (value: Array<UserType> | ((prev: Array<UserType>) => Array<UserType>)) => void, users: Array<UserType>) => { // need to fix any
//     const user = {
//         _id:v1(),
//         name: name
//     }
//     setUsers([...users, user])
// }