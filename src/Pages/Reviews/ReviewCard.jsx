const ReviewCard = ({ review }) => {
  const { description, img, authorName, authorEmail } = review;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl min-h-[400px]">
        <div className="card-body items-center text-center">
          <p>{description}</p>
          <img
            src={img}
            className="w-12 h-12 rounded-full"
            alt={"author Image"}
          />
          <div>
            <p>{authorName}</p>
            <p>{authorEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
