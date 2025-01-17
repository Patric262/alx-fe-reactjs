import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    const fetchPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const data = await response.json();
      setPost(data);
    };

    fetchPost();
  }, [postId]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogPost;
