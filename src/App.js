import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm.jsx';
import './App.css';

const App = ()=>{

    if(!localStorage.getItem('username')) return<LoginForm/>
    return(
        <ChatEngine
            height="100vh"
            projectID="cedb5443-9e19-4f01-9466-beff12ac2370"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed  {...chatAppProps} />}
            onNewMessage={()=>new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}
export default App