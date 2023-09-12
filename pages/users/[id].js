import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";

export default function ({user}) {

    const {query} = useRouter()

    return (
        <MainContainer>
            <p>Пользователь s id {query.id}</p>
            <p>Пользователь s name {user.name}</p>
        </MainContainer>
    );
};


export async function getServerSideProps(c) {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users/' + c.query.id)
    const user = await  responce.json()

    return {
        props: {user}
    }
}
