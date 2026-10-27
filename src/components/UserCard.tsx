import React from "react";

// define the structure of the props object
type UserCardProps = {
	name: string;
	age: number;
	isAdmin?: boolean;
};

// pass the type next after the prop
export default function UserCard({
	name,
	age,
	isAdmin = false,
}: UserCardProps) {
	/* 
		? Typed Props
		* JS allows anything to be passed into a component
		* TS allows us to define what the component expects
		* type object is built outside of the component
	*/

	return (
		<div>
			<h3>Name: {name}</h3>
			<p>Age: {age}</p>
			{isAdmin && <p>Admin</p>}
		</div>
	);
}
