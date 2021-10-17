import styled from 'styled-components';

export const CommentContainer = styled.div`
	display: flex;
	flex-direction: column;

	background: #aebfd7;
	border-radius: 10px;

	min-height: 75vh;
	width: 85vw;
`;

export const MessageBox = styled.span`
	background-color: #6181b8;
	border-radius: 10px;

	width: 180px;
	margin: 20px;
	padding: 20px;

	color: #fff;

	@media (min-width: 1024px) {
		margin: 15px 20px;
		padding: 5px 20px;

		::after {
			left: -14px;
			top: 7px;
		}
	}
`;
