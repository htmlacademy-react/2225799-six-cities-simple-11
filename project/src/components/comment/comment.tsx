import {Review} from '../../types/review';
import useRating from '../../hooks/useRating';

type CommentProps = {
  comment: Review;
}

function Comment({comment}:CommentProps): JSX.Element {
  const starsWidth = useRating(comment.rating);
  const commentDate = new Date(comment.date);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const commentMonth = monthNames[commentDate.getMonth()];
  const commentYear = commentDate.getFullYear();

  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{comment.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: starsWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment.comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">{commentMonth} {commentYear}</time>
      </div>
    </li>
  );
}

export default Comment;
