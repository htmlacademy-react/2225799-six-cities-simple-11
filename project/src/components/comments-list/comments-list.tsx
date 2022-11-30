import Comment from '../comment/comment';
import {Review} from '../../types/review';

type CommentsListProps = {
  comments: Review[];
}

const sortComments = (comments: Review[]) => [...comments].sort((a, b) => a.date < b.date ? 1 : -1);

function CommentsList({comments}: CommentsListProps): JSX.Element {
  const sortedComments = sortComments(comments).slice(0, 10);

  return(
    <ul className="reviews__list">
      {sortedComments
        .map((comment: Review) => {
          const keyValue = comment.id;

          return(
            <Comment comment={comment} key={keyValue}/>
          );
        })}
    </ul>);
}

export default CommentsList;
