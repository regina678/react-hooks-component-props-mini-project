import React from "react";
import blogData from "../data/blog";

function App() {
  return (
    <div className="App">
      <header>
        <img src={blogData.image} alt="blog logo" />
        <h1>{blogData.name}</h1>
        <p>{blogData.about}</p>
      </header>

      <aside>
        <h2>About the Blog</h2>
        <p>{blogData.about}</p>
      </aside>

      <main>
        <h1>Blog Posts</h1>
        {blogData.posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <small>{post.date}</small>
            <p>{post.preview}</p>
            <span>{post.minutes} min read</span>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
