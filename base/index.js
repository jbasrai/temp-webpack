const ReactDOM = require('react-dom')
const app = require('./app')

const render = () => {
	ReactDOM.render(
		app,
		document.getElementById('root')
	)
}

render()

if (module.hot) {
	module.hot.accept(
		'./app.js',
		() => {
			console.log('accepted app')
			render()
		}
	)
}
