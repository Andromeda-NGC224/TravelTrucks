import css from "./TrackDetailsComponent.module.css";
import { IoIosStar } from "react-icons/io";
import { CiMap } from "react-icons/ci";
import { selectCurrentTruck } from "../../redux/secectors.js";
import { useSelector } from "react-redux";
import { useState } from "react";
import Features from "../Features/Features.jsx";
import Reviews from "../Reviews/Reviews.jsx";

export default function TrackDetailsComponent() {
  const truck = useSelector(selectCurrentTruck);
  console.log(truck);

  const [seeFeatures, setSeeFeatures] = useState(true);
  const [seeReviews, setSeeReviews] = useState(false);
  const [activeTab, setActiveTab] = useState("features");

  const onCarFeatures = () => {
    setSeeFeatures(true);
    setSeeReviews(false);
    setActiveTab("features");
  };
  const onCarReview = () => {
    setSeeReviews(true);
    setSeeFeatures(false);
    setActiveTab("reviews");
  };

  return (
    <div className={css.container}>
      <div className={css.nameCont}>
        <h1 className={css.name}>{truck.name}</h1>
      </div>

      <div className={css.truckRating}>
        <span className={css.ratingStars}>
          <IoIosStar size={16} />
        </span>
        <span className={css.reviewCount}>
          {truck.rating}({truck.reviews.length} Reviews)
        </span>
        <span className={css.location}>
          <CiMap size={20} />
          {truck.location}
        </span>
      </div>

      <div className={css.price}>€{truck.price.toFixed(2)}</div>

      <div className={css.gallery}>
        {truck.gallery.map((image, index) => (
          <img
            key={index}
            src={image.thumb}
            alt={`${truck.name} - фото ${index + 1}`}
          />
        ))}
      </div>

      <p className={css.description}>{truck.description}</p>

      <div className={css.additionalListsCont}>
        <ul className={css.additionaList}>
          <li>
            <div
              className={`${css.additionaListItem} ${
                activeTab === "features" ? css.active : ""
              }`}
              onClick={onCarFeatures}
            >
              Features
            </div>
          </li>
          <li>
            <div
              className={`${css.additionaListItem} ${
                activeTab === "reviews" ? css.active : ""
              }`}
              onClick={onCarReview}
            >
              Reviews
            </div>
          </li>
        </ul>

        <div className={css.additionalListContent}>
          {seeFeatures && <Features />}
          {seeReviews && <Reviews />}

          <div className={css.bookingForm}>
            <h2>Book your campervan now</h2>
            <p>Stay connected! We are always ready to help you.</p>

            <form className={css.form}>
              <div className={css.formGroup}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name*"
                  required
                />
              </div>

              <div className={css.formGroup}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  required
                />
              </div>

              <div className={css.formGroup}>
                <input
                  type="date"
                  id="bookingDate"
                  name="bookingDate"
                  placeholder="Booking date*"
                  required
                />
              </div>

              <div className={css.formGroup}>
                <textarea
                  id="comment"
                  name="comment"
                  placeholder="Comment"
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className={css.submitButton}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
