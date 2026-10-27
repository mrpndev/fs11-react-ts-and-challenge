import React, { useState } from 'react'

/* 
	? Typed State
	* React will infer the type automatically
	* we can override it if needed by defining the state data type
*/

export default function Counter() {

	let [ count, setCount ] = useState<number>(0)

  return (
	<div>
		<h1>{count}</h1>
		<button onClick={() => setCount(count + 1)}>Increment</button>
	</div>
  )
}
