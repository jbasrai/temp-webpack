import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home.jsx'

const render = () => {
	ReactDOM.render(
		<Home />,
		document.getElementById('root')
	)
}

render()

if (module.hot) {
	module.hot.accept(
		'./Home.jsx',
		() => {
			render()
		}
	)
}
