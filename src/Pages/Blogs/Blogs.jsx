import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch(`https://digitalfurnitureserver.vercel.app/blogs?searchText=${searchText}`)
      .then((response) => response.json())
      .then((json) => setBlogs(json));
  }, [searchText]);

  return (
    <div className="min-h-screen">
      <div>
        <div className="max-w-md border border-black mx-auto my-3">
          <input
          className="w-full border-red-500 p-3 text-xl"
            type="text"
            name="search"
            placeholder="Search blog"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {blogs &&
          blogs.map((blog) => <BlogCard key={blog._id} blog={blog}></BlogCard>)}
      </div>
    </div>
  );

};

export default Blogs;
