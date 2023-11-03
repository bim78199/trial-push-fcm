import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';
import React from 'react';

function App() {
  React.useEffect(()=>{
    const messaging = firebase.messaging();

// Minta izin notifikasi
if ('Notification' in window) {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Izin notifikasi diberikan');
    } else if (permission === 'denied') {
      console.log('Izin notifikasi ditolak');
    } else {
      console.log('Izin notifikasi diabaikan');
    }
  });
}

// Dapatkan token FCM
messaging.getToken().then((token) => {
  console.log("FCM Token: ", token);
}).catch((err) => {
  console.log("Error getting FCM token: ", err);
});
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
