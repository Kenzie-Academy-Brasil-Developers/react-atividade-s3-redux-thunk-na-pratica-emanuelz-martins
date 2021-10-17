import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCommentThunk } from '../../store/modules/user/thunks';
import { Button, Comment, InputField } from './style';

const InputBox = () => {
	const dispatch = useDispatch();

	const [comment, setComment] = useState('');

	const handleClick = () => {
		setComment('');
	};

	return (
		<Comment>
			<InputField
				placeholder="Adicionar um comentário público..."
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>
			<Button
				onClick={() => {
					dispatch(addCommentThunk(comment));
					handleClick();
				}}
			>
				Comentar
			</Button>
		</Comment>
	);
};

export default InputBox;
