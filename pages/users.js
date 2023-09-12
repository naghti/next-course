import {useEffect, useState} from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {

    return (
        <MainContainer>

            <h1>Список пользователей</h1>

            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>
                            <Link href={'/users/' + user.id}>
                                {user.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </MainContainer>
    );
};

export async function getServerSideProps(c) {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await  responce.json()

    return {
        props: {users}
    }
}

export default Users;