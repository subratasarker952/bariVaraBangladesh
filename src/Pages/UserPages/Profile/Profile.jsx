import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, passwordReset,userInDb, setUserInDb } = useAuth();
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    fetch(`https://digitalfurnitureserver.vercel.app/users/${user?.email}`)
      .then((response) => response.json())
      .then((json) => setUserInDb(json));
  }, [user, setUserInDb]);
  const handlePasswordReset = () => {
    const sure = window.confirm("Are You Sure? Change Your Password?");
    if (sure) {
      passwordReset(user?.email)
        .then(() => {
          setDisabled(true);
          toast.success("Password rest mail sent please Email");
        })
        .catch((error) => {
          toast.error(error.code + error.message);
        });
    }
  };
  return (
    <div className="">
      <div className="text-center my-5">
        <div className=" md:flex  ">
          <div className="flex-1" >
            {userInDb?.img && (
              <img
                className="h-[200px] w-[200px] mx-auto"
                src={userInDb?.img}
                alt={"User Img"}
              />
            )}
          </div>
          <div className="flex-1 flex justify-center items-center text-xl">
            <div> 
            <p>Email:- {userInDb?.email}</p>
            {userInDb?.displayName && (
              <p>Name:- {userInDb?.displayName}</p>
            )}
            {userInDb?.age && <p>age:- {userInDb?.age} Years</p>}
            {userInDb?.role && <p>Role:- {userInDb?.role}</p>}
            {userInDb?.description && (
              <p>about your self:- {userInDb?.description}</p>
            )}
            </div>
          </div>
        </div>
        <div className="flex gap-2 my-5">
          <Link
            to={`/dashboard/editProfile/${userInDb?._id}`}
            className="btn btn-primary  flex-1"
          >
            Edit Profile
          </Link>
          <button
            disabled={disabled}
            onClick={handlePasswordReset}
            className="btn btn-primary flex-1 "
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
