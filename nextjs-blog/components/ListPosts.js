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
            <div class="entry-thumb">
              <Link href={`/blog/${post.href}`}>
                <a class="thumb-link">
                  <img src={post.thumb} alt="building" layout="fill" />
                </a>
              </Link>
            </div>

            <div class="entry-text">
              <div class="entry-header">
                <div class="entry-meta">
                  <span class="cat-links">
                    {post.categories.map((cat) => {
                      return (
                        <Link href={cat.href}>
                          <a>{cat.title}</a>
                        </Link>
                      );
                    })}
                  </span>
                </div>

                <h1 class="entry-title">
                  <Link href={`/blog/${post.href}`}>
                    <a>{post.title}</a>
                  </Link>
                </h1>
              </div>
              <div class="entry-excerpt">{post.content}</div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ListPosts;
