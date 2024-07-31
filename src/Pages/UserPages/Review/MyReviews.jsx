import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import useAuth from "../../../hooks/useAuth";

const MyReviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://digitalfurnitureserver.vercel.app/reviews/email?email=${user?.email}`,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `barer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((response) => response.json())
      .then((json) => setReviews(json));
  }, [user, reviews]);
  if (!reviews)
    return (
      <h2 className="text-5xl flex justify-center items-center">Loading...</h2>
    );
  return (
    <div className="min-h-screen">
      <p className="text-center text-xl text-green-500">Your Added Product length {reviews.length}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {reviews &&
          reviews.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
      </div>
    </div>
  );
};

export default MyReviews;
