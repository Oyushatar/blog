"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import Parent from "@/mrParent";
const Page = () => {
  const [blog, setBlog] = useState("");
  let a = usePathname();
  const { cover_image } = blog;
  console.log(a);
  useEffect(() => {
    const second = async () => {
      const res = await fetch(`https://dev.to/api/articles${a}`);
      const b = await res.json();
      console.log(b);
      setBlog(b);
    };
    second();
  }, []);
  if (blog.length == 0) return "loading";
  return (
    <Parent>
      <div>
        <h2 className="title">{blog.title}</h2>
        <h1>{blog.description}</h1>
        <div className="littleContainer">
          <img className="chad2" src={blog.user.profile_image} />
          <div className="name">{blog.user.name}</div>
          <div className="time">published time: {blog.published_at}</div>
        </div>
        <img className="picture2" src={cover_image} />
      </div>
    </Parent>
  );
};
export default Page;
