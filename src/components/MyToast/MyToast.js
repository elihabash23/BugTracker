import React from 'react'
import { Toast } from 'react-bootstrap'

function MyToast(props) {
	const toastCss = {
		position: 'fixed',
		bottom: '50px',
		right: '20px',
		zIndex: '1',
		boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19'
	}

	return (
		<div style={props.children.show ? toastCss : null}>
			<Toast className={"border border-success bg-success text-white"} show={props.children.show}>
				<Toast.Header className={"bg-success text-white"} closeButton={false}>
					<strong className="mr-auto">Success</strong>
				</Toast.Header>
				<Toast.Body>
					{props.children.message}
				</Toast.Body>
			</Toast>
		</div>
	)
}

export default MyToast
