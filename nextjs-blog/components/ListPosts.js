import React from "react";
import Link from "next/link";

const ListPosts = ({ posts }) => {
  if (!posts) {
    return null;
  }
  console.log("posts", posts);
  return (
    <>
      {posts.map((post) => {
        const formatClass =
          post.postType === "" ? "" : ` format-${post.postType}`;
        return (
          <article
            key={post.href}
            class={`brick entry animate-this${formatClass}`}
          >
            <div className="entry-thumb">
              <Link href={`/blog/${post.href}`}>
                <a className="thumb-link">
                  <img src={post.thumb} alt="building" layout="fill" />
                </a>
              </Link>
            </div>

            <div className="entry-text">
              <div className="entry-header">
                <div className="entry-meta">
                  <span className="cat-links">
                    {post.categories.map((cat) => {
                      return (
                        <Link href={cat.href}>
                          <a>{cat.title}</a>
                        </Link>
                      );
                    })}
                  </span>
                </div>

                <h1 className="entry-title">
                  <Link href={`/blog/${post.href}`}>
                    <a>{post.title}</a>
                  </Link>
                </h1>
              </div>
              <div className="entry-excerpt">{post.content}</div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ListPosts;
