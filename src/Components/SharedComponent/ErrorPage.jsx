const ErrorPage = () => {
  return (
    <div className="h-[500px] flex text-center justify-center items-center">
      <div>
        <h1 className="text-5xl text-red-500">Oops!</h1>
        <p className="text-5xl text-red-500 m-2"> 404</p>
        <p className="text-5xl text-red-500">Sorry page not found</p>
      </div>
    </div>
  );
};

export default ErrorPage;
