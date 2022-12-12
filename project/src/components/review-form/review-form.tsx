import {ChangeEvent, FormEvent, useState} from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import {sendCommentAction} from '../../store/api-actions';
import {isRatingSet, isCommentCorrect} from '../../services/form-data-validation';
import useAppSelector from '../../hooks/useAppSelector';
import {getCommentSendingStatus, getFormSendingError} from '../../store/selected-offer/selectors';
import {StarRate} from '../../const';
import './review-form.css';

type ReviewFormProps = {
  id: number;
}

const initialReviewFormData = {
  rating: 0,
  comment: '',
};

function ReviewForm({id}: ReviewFormProps): JSX.Element {

  const [reviewFormData, setReviewFormData] = useState(initialReviewFormData);
  const isCommentBeingSent = useAppSelector(getCommentSendingStatus);
  const isFormError = useAppSelector(getFormSendingError);
  const dispatch = useAppDispatch();
  const isFormValid = isRatingSet(reviewFormData.rating) && isCommentCorrect(reviewFormData.comment);

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setReviewFormData((state) => ({...reviewFormData, rating: Number(evt.target.value)}));
  };
  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewFormData((state) => ({...reviewFormData, comment: evt.target.value}));
  };
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const newCommentData = {
      comment: reviewFormData.comment,
      rating: reviewFormData.rating,
      id
    };
    dispatch(sendCommentAction(newCommentData));
    setReviewFormData((state) => (initialReviewFormData));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          onChange={handleRatingChange}
          checked={reviewFormData.rating === StarRate.FiveStars}
          data-testid="5-stars"
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          onChange={handleRatingChange}
          checked={reviewFormData.rating === StarRate.FourStars}
          data-testid="4-stars"
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          onChange={handleRatingChange}
          checked={reviewFormData.rating === StarRate.ThreeStars}
          data-testid="3-stars"
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          onChange={handleRatingChange}
          checked={reviewFormData.rating === StarRate.TwoStars}
          data-testid="2-stars"
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          onChange={handleRatingChange}
          checked={reviewFormData.rating === StarRate.OneStar}
          data-testid="1-stars"
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentChange}
        value={reviewFormData.comment}
        data-testid="review"
      >
      </textarea>
      {isFormError ? <div className="reviews__error">Не удалось отправить форму</div> : ''}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid || isCommentBeingSent}
          data-testid="submit"
        >
          {isCommentBeingSent ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
