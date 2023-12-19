import { useSelector } from "react-redux";
import { selectAllPosts } from "../redux/posts/postsSlice.js";

function Posts() {
  const posts = useSelector(selectAllPosts);

  function timeDifference(current, previous) {
    const currentDateTime = new Date(current);
    const previousDateTime = new Date(previous);
    const elapsed = currentDateTime - previousDateTime;
    const minutes = Math.floor(elapsed / 60000); // 1 minute = 60,000 milliseconds
    return minutes;
  }

  const renderedPosts = posts.map((post) => (
    <article className="p-5 border-white border-[1px] my-4" key={post.id}>
      <h1 className="font-semibold text-3xl">{post.title}</h1>
      <p className="text-xs text-gray-500 mt-1">
        {timeDifference(new Date(), new Date(post.timestamp))} minutes ago
      </p>
      <p className="text-sm my-2 text-slate-400 font-semibold">Author: {post.author}</p>
      <p className="text-xl my-2">{post.content}</p>
    </article>
  ));

  return (
    <div>
      <h1 className="font-semibold text-5xl">Posts</h1>
      <div>{renderedPosts}</div>
    </div>
  );
}

export default Posts;
