import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch(`https://digitalfurnitureserver.vercel.app/reviews?searchText=${searchText}`)
      .then((response) => response.json())
      .then((json) => setReviews(json));
  }, [searchText]);

  return (
    <div className="min-h-screen">
      <div>
        <div className="max-w-md border border-black mx-auto my-3">
          <input
            className="w-full border-red-500 p-3 text-xl"
            type="text"
            name="search"
            placeholder="Search in Review Description"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {reviews &&
          reviews.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
      </div>
    </div>
  );
};

export default Reviews;
