import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import ChessPlayerData from './components/ChessPlayerData';
import './App.css';

function App() {
	const [isSignedUp, setIsSignedUp] = useState(true);

	const handleSignupSuccess = () => {
		setIsSignedUp(false);
	};
	const handleLoginSuccess = () => {
		setIsSignedUp(true);
	};


	return (
		<div className="App sidebar-background">
			<div className="App-header min-h-screen">
				{localStorage.getItem("token") ? <ChessPlayerData /> :
					(isSignedUp ? <Login onSignupSuccess={handleSignupSuccess} /> : <Signup onSignupSuccess={handleLoginSuccess} />)}
			</div>
		</div>
	);
}

export default App;
