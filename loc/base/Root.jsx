import React from 'react'
import styles from './styles.css';

const Root = () => {
	console.log('styles', styles)

	return (
		<div className={styles.asdf}>hello</div>
	)
}

export default Root
