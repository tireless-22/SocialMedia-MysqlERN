import React from 'react'

const Post = (props) => {

	const { title, description, username } = props.post;



		return (
			<div>
				<h1>{title}</h1>
				<h1>{description}</h1>

				
				</div>
		)
}

export default Post