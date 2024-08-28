import css from "./TrucksList.module.css";

export default function TrucksList() {
  const trucks = [
    {
      id: 1,
      name: "Mavericks",
      price: 8000.0,
      rating: 4.4,
      reviews: 12,
      location: "Kyiv, Ukraine",
      description:
        "Embrace simplicity and freedom with the Mavericks panel truck...",
      features: ["Automatic", "Petrol", "Kitchen", "AC"],
      image: "/path/to/mavericks-image.jpg",
    },
    {
      id: 2,
      name: "Kuga Camper",
      price: 8000.0,
      rating: 4.2,
      reviews: 10,
      location: "Kyiv, Ukraine",
      description:
        "The pictures shown here are example vehicles of the respective...",
      features: ["Automatic", "Petrol", "Kitchen", "AC"],
      image: "/path/to/kuga-camper-image.jpg",
    },
  ];
  return (
    <ul className={css.listContainer}>
      {trucks.map((truck) => (
        <li key={truck.id} className={css.truckItem}>
          <img src={truck.image} alt={truck.name} className={css.truckImage} />
          <div className={css.truckInfo}>
            <div className={css.truckHeader}>
              <h2 className={css.truckName}>{truck.name}</h2>
              <span className={css.truckPrice}>€{truck.price.toFixed(2)}</span>
              <button className={css.favoriteButton}>♡</button>
            </div>
            <div className={css.truckRating}>
              <span className={css.ratingStars}>★ {truck.rating}</span>
              <span className={css.reviewCount}>({truck.reviews} Reviews)</span>
              <span className={css.location}>{truck.location}</span>
            </div>
            <p className={css.truckDescription}>{truck.description}</p>
            <div className={css.truckFeatures}>
              {truck.features.map((feature, index) => (
                <span key={index} className={css.feature}>
                  {feature}
                </span>
              ))}
            </div>
            <button className={css.showMoreButton}>Show more</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
