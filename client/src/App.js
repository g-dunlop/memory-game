import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import './App.css';
import GameContainer from './containers/GameContainer';
import {useToggle} from './hooks/useToggle';
import {getUser, createUser} from './HighScoreService';

function App() {

  const [isDarkMode, setIsDarkMode] = useToggle(false);
  const [existingUsername, setExistingUsername] = useState (null);
  const [newUsername, setNewUsername] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUserInfo();
  }, [isModalOpen])

  const handleExistingNameChange = (e) => {
    setExistingUsername(e.target.value)
  }

  const handleNewNameChange = (e) => {
    setNewUsername(e.target.value)
  }

  const handleExistingClick = (e) => {
    setIsModalOpen(!isModalOpen);
  }

  const handleNewClick = (e) => {
    setIsModalOpen(!isModalOpen);
  }

  const getUserInfo = () => {
    existingUsername ? getUser(existingUsername) //this will need to go through services
    //the return .then? will need to set user 
    .then(data => setUser(data)) : createUser({
      username: newUsername,
      highScore: 0
    }).then(data => setUser(data));
   
  }

  // cr


  return (
    <>
       <Modal
          isOpen={isModalOpen}
          ariaHideApp={false}
          contentLabel="User options"
            >
          <label htmlFor='name'>Username: </label>
          <input type="text" name="existing-username" placeholder="Existing User" onChange={handleExistingNameChange} />
          <button onClick={handleExistingClick}>OK</button>
          <label htmlFor='name'>Username: </label>
          <input type="text" name="new-username" placeholder="New User" onChange={handleNewNameChange} />
          <button onClick={handleNewClick}>OK</button>
        </Modal>

    <div className={isDarkMode ? "App dark": "App light"}>
      <button className="dark-mode" onClick={setIsDarkMode}>Dark/Light</button>
      {user !== null ? <><p> Hi {user.username}</p> <p>High Score:{user.highScore}</p></> : null}
      <GameContainer />
    </div>
    </>
  );
}

export default App;
