import React, { useState, useEffect } from "react";

type User = {
	id: number;
	name: string;
	email: string;
};

type Post = {
	id: number;
	title: string;
	body: string
}

/* 
	? Generics
	* allow functions and components to work with different types
	* preserves type safety
*/

export default function Individual() {
	let [user, setUser] = useState<User[] | null>(null);

	useEffect(() => {

				// ? Generic Example

		// ? T is a placeholder for type once the function is CALLED
		async function fetchData<T>(url: string): Promise<T> {
			const res = await fetch(url)
			
			// ? alias for data type being returned
			return await res.json() as T
		}

		async function fetchUsers() {
			let url = "https://jsonplaceholder.typicode.com/users"
			// let res = await fetch(url);
			// ? this line tells TS what to expect coming from the object even if there are more properties
			// let data: Array<User> = await res.json();
			// ! this does NOT verify the server response
			// console.log(data)
			// setUser(data);

			// ? fetchData with Promise<T> generic implementation

			// ? I pass data type returned at invocation
			let data = await fetchData<User[]>(url)
			console.log(data)
			setUser(data)
		}

		fetchUsers()

		async function fetchPosts() {
			let url = "https://jsonplaceholder.typicode.com/posts"

			// ? I pass different data type at invocation reusing same function
			let data = await fetchData<Post[]>(url)

			console.log(data)
		}

		fetchPosts()

	}, []);

	return (
		<div>
			{ user?.map((u) => (
				<div key={u.id}>
					<h3>{ u.name }</h3>
					<p>{ u.email }</p>
				</div>
			))}
		</div>
	);
}
