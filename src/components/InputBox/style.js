import styled from 'styled-components';

export const Comment = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 3em;

	@media (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-around;
	}
`;

export const InputField = styled.input`
	border: none;
	border-bottom: 1px solid black;
	background: none;

	width: 15em;

	:focus {
		outline: none;
		background: none;

		border-bottom: 1px solid green;
		transition: all 0.5s;
	}

	@media (min-width: 1024px) {
		width: 40vw;
	}
`;

export const Button = styled.button`
	width: 9em;
	margin: 2em auto;
	padding: 10px;
	background: #2385ca;

	border: none;
	border-radius: 5px;

	text-transform: uppercase;

	:hover {
		cursor: pointer;
		transform: scale(1.1, 1.1);
		transition: all 0.4s;
	}

	@media (min-width: 1024px) {
		margin: 2em 0;
	}
`;
