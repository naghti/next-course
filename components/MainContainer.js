import React from 'react';
import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta property="og:title" keywords={"ubli" + keywords} key="title" />
            </Head>
            <div>
                <A href={'/'} text={'Главная'}/>
                <A href={'/users'} text={'Пользователи'}/>
            </div>
            {children}
        </div>
    );
};

export default MainContainer;