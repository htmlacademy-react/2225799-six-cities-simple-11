import Comment from '../comment/comment';
import {Reviews, Review} from '../../types/review';


type CommentsListProps = {
  comments: Reviews;
}

function CommentsList({comments}: CommentsListProps): JSX.Element {

  return(
    <ul className="reviews__list">
      {comments.map((comment: Review) => {
        const keyValue = comment.id;

        return(
          <Comment comment={comment} key={keyValue}/>
        );
      })}
    </ul>
  );
}

export default CommentsList;
