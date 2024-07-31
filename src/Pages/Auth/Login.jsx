import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const { user, loginUser, googleLogin, githubLogin, error, setError } =
    useAuth();
  if (user) {
    return <Navigate to={from}></Navigate>;
  }
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (email && password) {
      loginUser(email, password)
        .then(() => {
          navigate(from, { replace: true });
        })
        .catch((err) => {
          setError(err.code);
        });
    }
  };
  const handleGooleLogin = () => {
    setError("");
    googleLogin()
      .then()
      .catch((err) => {
        setError(err.code);
      });
  };
  const handleGithubLogin = () => {
    setError("");
    githubLogin()
      .then()
      .catch((err) => {
        setError(err.code);
      });
  };

  return (
    <div className="hero h-[700px] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <button className="label-text-alt link link-hover">
                  Forgot password?
                </button>
                <Link to="/register">Register</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <div className="text-center">
            <button
              onClick={handleGooleLogin}
              className="btn w-80 mb-3 hover:text-black bg-red-500 text-white"
            >
              Google Login
            </button>
          </div>
          <div className="text-center">
            <button
              onClick={handleGithubLogin}
              className="btn w-80 mb-3 hover:text-black bg-red-500 text-white"
            >
              GitHub Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
