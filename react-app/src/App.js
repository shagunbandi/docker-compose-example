import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
	const [result, setResult] = useState();

	const callBackend = async () => {
		const response = await axios.get('http://localhost:8080/');
		setResult(response?.data);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
				<button onClick={callBackend}>Print Me </button>
				<h3>{result}</h3>
			</header>
		</div>
	);
}

export default App;
