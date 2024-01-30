import './App.css';
import gpt3 from './gpt3.png';

function App() {
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
          <div className='chatbox-log'>
            <div className='avatar'>
                  
            </div>
            <div className='message'>
              Hello world
          </div>
          </div>
        </div><div className='gpt-message'>
          <div className='chatbox-log'>
            <div className='gptavatar'>
                  <image src={gpt3} alt='gpt3' />
            </div>
            <div className='message'>
              I am a bot
          </div>
          </div>
        </div>
      <div className='chat-input-holder'>
        <textarea className='chat-input-area' rows="1" placeholder='Type your message here...'></textarea>
      </div>
      </section>
      
    </div>
  );
}

export default App;
