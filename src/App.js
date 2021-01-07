import './App.css';

function App() {
  return (
    <div className="App">
        <input type="text" id="chatbox" placeholder="Send a message..." />
        <div className="message">
          <h2 style={{color: '#FDD171', margin: '0 14px', fontSize: '16px', fontWeight: '500'}}>Brandon<span style={{fontSize: '12px', color: 'grey', marginLeft: '10px', fontWeight: '400'}}>Today at 9:18 AM</span></h2>
          <p style={{color: '#DCDDDE', margin: '0 14px', fontSize: '16px', fontWeight: '400'}}>Hey man! How are you doing?</p>
        </div>
        <div className="message">
          <h2 style={{color: '#FDD171', margin: '0 14px', fontSize: '16px', fontWeight: '500'}}>Brandon<span style={{fontSize: '12px', color: 'grey', marginLeft: '10px', fontWeight: '400'}}>Today at 9:18 AM</span></h2>
          <p style={{color: '#DCDDDE', margin: '0 14px', fontSize: '16px', fontWeight: '400'}}>Hey man! How are you doing?</p>
        </div>
    </div>
  );
}

export default App;
