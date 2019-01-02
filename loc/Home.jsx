import React from 'react'

const loc = 'en'

const words = Promise
	.all([
		import(`./words/apple.${loc}.js`),
		import(`./words/banana.${loc}.js`),
	])
	.then(modules => modules.map(module => module.default))
	.then(console.log)

const Home = () => {
	return (
		<div>
			Home
		</div>
	)
}
export default Home
