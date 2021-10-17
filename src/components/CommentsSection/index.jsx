import { useSelector } from 'react-redux';
import InputBox from '../InputBox';
import { CommentContainer, MessageBox } from './style';

const CommentsSection = () => {
	const users = useSelector((store) => store.user.comments);

	return (
		<CommentContainer>
			<InputBox />
			{users.map((user) => (
				<MessageBox key={user}>{user}</MessageBox>
			))}
		</CommentContainer>
	);
};

export default CommentsSection;
