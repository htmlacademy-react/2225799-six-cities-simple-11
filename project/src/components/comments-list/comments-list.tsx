import Comment from '../comment/comment';
import {Review} from '../../types/review';
import {useMemo} from 'react';

type CommentsListProps = {
  comments: Review[];
}

const sortComments = (comments: Review[]) => [...comments].sort((a, b) => a.date < b.date ? 1 : -1);

function CommentsList({comments}: CommentsListProps): JSX.Element {
  const sortedComments = useMemo(() => sortComments(comments).slice(0, 10), [comments]);

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
