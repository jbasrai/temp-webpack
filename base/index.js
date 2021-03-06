import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root.jsx'

console.log('first load')

const render = () => {
	ReactDOM.render(
		<Root />,
		document.getElementById('root')
	)
}

render()

if (module.hot) {
	module.hot.accept(
		'./Root.jsx',
		() => {
			render()
		}
	)
}
