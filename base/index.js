import ReactDOM from 'react-dom'
import app from './app';

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
