import './App.css';
import gpt3 from './gpt3.png';
import {useState} from 'react';

function App() {
  //add input for state and chat log
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([{
    user:'gpt',
    message:'How can I help you today?'
  }]);

  async function handleSubmit(e){
    e.preventDefault();
    setChatLog([...chatLog,   {user:'me',message:'${input}'}]);
    setInput('');

  }
  return (
    <div className="App">
      <aside className='sidemenu'>
        <section> 
          <div className='side-menu-button'>
            <span>+</span>
            New Chat
            </div>
        </section>
      </aside>
      <section className='chatbox'>
        <div className='chat-message'>
          {Chatlog.map((message, index) => (
            <Chatlog message={message} />
            ))  }
        </div>
        <div className='gpt-message'>
          <div className='chatbox-log'>
            <div className='gptavatar'>
                  <image src={gpt3} alt='gpt3' />
            </div>
            <div className='gptmessage'>
              I am a bot
          </div>
          </div>
        </div>
      <div className='chat-input-holder'>
        <form onSubmit={handleSubmit}>
        <input className='chat-input-area' rows="1" value={input} onChange={(e)=> setInput(e.target.value)} placeholder='Type your message here...'></input>
        </form>
      </div>
      </section>
      
    </div>
  );
}

const Chatlog = ({message}) => {
  return (
    <div className='chatbox-log'>
      <div className={`avatar ${message.user === 'gpt' && 'chatgpt'}`}>
                  
      </div>
            <div className='message'>
              Hello world
          </div>
          </div>
  )
}
export default App;
