import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import UserBlogCard from "./UserBlogCard";

const MyBlogs = () => {
  const { user } = useAuth();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`https://digitalfurnitureserver.vercel.app/blogs/me/${user?.email}`)
      .then((response) => response.json())
      .then((json) => setBlogs(json));
  }, [blogs, user]);
  return (
    <div>
      <p className="text-center text-green-500">Your Added Blogs length {blogs.length}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {blogs &&
          blogs.map((blog) => (
            <UserBlogCard key={blog._id} blog={blog}></UserBlogCard>
          ))}
      </div>
    </div>
  );
};

export default MyBlogs;
