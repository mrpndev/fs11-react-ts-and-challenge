import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";
import Individual from "./components/Individual";

function App() {
	return (
		<>
			<UserCard name="David" age={30} isAdmin={true} />
			<Counter />
			<Individual />
		</>
	);
}

export default App;
