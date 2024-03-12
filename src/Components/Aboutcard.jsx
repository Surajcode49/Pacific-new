import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({
    author,
    date,
    tags,
    title,
    subtitle,
    descrp,
    contentLink,
    imageUrl,
    alt,
}) => {
    return (
        <div className={`blog-card ${alt ? "alt" : ""}`}>
            <div className="meta">
                <div
                    className="photo"
                    style={{ backgroundImage: `url(${imageUrl})`}}
                ></div>
                <div className="details">
                    <div className="author">
                        <div>{author}</div>
                    </div>
                    <Link to="Blog-Page-btn"><button className="know">Know more</button></Link>
                </div>
            </div>
            {/* <div className="description">
                <h1 className="desp-title">{title}</h1>
                <p className="description-about">
                    {descrp} 
                </p>
                <div className="read-more">
                    <Link to="/sucess"><button href={contentLink} className="read-more-btn">Read More</button></Link>
                </div>
            </div> */}
        </div>
    );
};

export default BlogCard;
