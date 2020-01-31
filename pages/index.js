import React, { Component, useState, useEffect } from 'react';

import axios from 'axios';

const Home = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            const datas = res.data;
            setDatas(datas);
        });
    };

    return (
        <>
            {datas.map((data) => (
                <p key={data.id}>{data.name}</p>
            ))}
        </>
    );
};

export default Home;
