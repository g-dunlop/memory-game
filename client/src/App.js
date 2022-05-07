import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import './App.css';
import GameContainer from './containers/GameContainer';
import {useToggle} from './hooks/useToggle';
import {getUser, createUser, updateUser} from './HighScoreService';
import UserContext from './context/UserContext';
import Header from './components/Header';

function App() {

  const [isDarkMode, setIsDarkMode] = useToggle(false);
  const [existingUsername, setExistingUsername] = useState (null);
  const [newUsername, setNewUsername] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [userType, setUserType] = useState(null)
  const [user, setUser] = useState(null);

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
  } //use the hook for this

  const handleNewClick = (e) => {
    setIsModalOpen(!isModalOpen);
  } //use the hook for this

  const getUserInfo = () => {
    if (existingUsername !== null){
       getUser(existingUsername) //this will need to go through services
    //the return .then? will need to set user 
    .then(data => setUser(data)) } 
    else {createUser({
      username: newUsername,
      highScore: 0
    }).then(data => setUser(data));
  }
  }

  const handleUserType = (evt) => {
    setUserType(evt.target.value)
  }

  // const styles = {
  //   modal: {
  //     backgroundColor: 'white',
  //     margin: 0, // This is the important style you need to set
  //     alignItems: 'center',
  //     justifyContent: 'center'
  //   }
  // }

  const updateHighScore = (score) => {
    console.log(score)
      setUser({
        _id: user._id,
        username:user.username,
        highScore:score
      })  
    
  }

  useEffect(()=> {
    if(user !== null){
    updateUser(user)
    }
  }, [user])

 


  return (
    <div className="app">

      
      <div className= "modal">
       <Modal
          
          isOpen={isModalOpen}
          ariaHideApp={false}
          contentLabel="User options"
          // style={styles.modal}
            >
          <div className="modal-component">
          <div className="modal-container">
          <button className="user-type-button" onClick={handleUserType} value="returning">Log In</button>
          <button className="user-type-button" onClick={handleUserType} value="new">Sign Up</button>
        
          {userType === "returning" ? <div><label htmlFor='name'>Username: </label> <input className="user-type-input" type="text" name="existing-username" placeholder="Existing User" onChange={handleExistingNameChange} /> <button className="user-type-submit" onClick={handleExistingClick}>OK</button></div>: null}
          {userType === "new" ? <div><label htmlFor='name'>Username: </label><input className="user-type-input" type="text" name="new-username" placeholder="New User" onChange={handleNewNameChange} /><button className="user-type-submit" onClick={handleNewClick}>OK</button></div>:null}
          </div>
          </div>
        </Modal>
        </div>

    
    <div className={isDarkMode ? "App dark": "App light"}>
      <button className="dark-mode" onClick={setIsDarkMode}>Dark/Light</button>

      {!isModalOpen ? 
      <UserContext.Provider value={{user}}>
        {user !== null ? <GameContainer  updateHighScore={updateHighScore}/>: null}
      </UserContext.Provider> : null}
    </div>
    </div>
  );
}

export default App;
