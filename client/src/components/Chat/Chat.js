import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'http://localhost:5000';

    useEffect(()=>{
        const {name, room} = queryString.parse(location.search);
        setName(name);
        setRoom(room);

        var socket = io(ENDPOINT, { transports: ['websocket', 'polling', 'flashsocket'] });
        socket.emit('join',{name,room});

    },[ENDPOINT,location.search]);
   
    return(
        <h1>Chat</h1>
    )
};

export default Chat;