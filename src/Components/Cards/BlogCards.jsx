import React from "react";

const BlogCards = ({content, title, image}) => {
  return (
    <div className="blog-cards-main">
      <div className="blog-cards-part">
        <img
          src={image}
          alt=""
          className="blogs-image"
        />
        <div className="blog-card-title">
          {title}
        </div>
        <p className="blogs-cards-contains">
          {content}
        </p>
      </div>
    </div>
  );
};

export default BlogCards;
