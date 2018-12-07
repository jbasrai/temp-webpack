import React from 'react'

const Root = () => (
	<button
		onClick={
			event => {
				import('./text').then(module => {
					const text = module.default
					console.log(text)
				})
			}
		}
	>
		click
	</button>
)

export default Root
