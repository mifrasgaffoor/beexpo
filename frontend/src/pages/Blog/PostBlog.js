import React from "react";
import BlogPostCard from "../../components/BlogPostCard";
import StudentDefaultLayout from "../../Layout/StudentDefaultLayout";

const PostBlog = () => {
  return (
    <div>
      <StudentDefaultLayout>
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </StudentDefaultLayout>
    </div>
  );
};

export default PostBlog;
