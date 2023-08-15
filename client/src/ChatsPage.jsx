import {MultiChatWindow, MultiChatSocket, useMultiChatLogic} from 'react-chat-engine-advanced'
import {PrettyChatWindow} from 'react-chat-engine-pretty';
import React from "react";
require('dotenv').config();

const ChatsPage = (props) => {
    const projectId = process.env.REACT_APP_PROJECT_ID;

    const chatProps = useMultiChatLogic(
        projectId,
        props.user.username,
        props.user.secret,
        props.user.name
    );

    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <PrettyChatWindow
                projectId={projectId}
                username={props.user.username}
                secret={props.user.secret}
                name={props.user.name}
                style={{ height: '100vh' }}
            />
        </div>
    );
};

export default ChatsPage;