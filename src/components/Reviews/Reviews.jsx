import { useSelector } from "react-redux";
import { selectCurrentTruck } from "../../redux/secectors.js";
import css from "./Reviews.module.css";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  const track = useSelector(selectCurrentTruck);
  const reviews = track.reviews;

  return (
    <div className={css.reviewsContainer}>
      {reviews.map((review, index) => (
        <div key={index} className={css.reviewItem}>
          <div className={css.reviewHeader}>
            <div className={css.reviewerInfo}>
              <div className={css.reviewerAvatar}>
                {review.reviewer_name[0].toUpperCase()}
              </div>
              <div className={css.nameAndRating}>
                <div className={css.reviewerName}>{review.reviewer_name}</div>
                <div className={css.reviewRating}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < review.reviewer_rating
                          ? css.starFilled
                          : css.starEmpty
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className={css.reviewText}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
