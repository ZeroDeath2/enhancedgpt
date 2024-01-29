import './App.css';

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
      <div className='chat-input-holder'>
        <textarea className='chat-input-area' rows="1" placeholder='Type your message here...'></textarea>
      </div>
      </section>
      
    </div>
  );
}

export default App;
