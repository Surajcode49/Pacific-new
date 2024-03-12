import React from "react";
import BlogCard from "../Components/Cards/BlogCards";
import { Link } from "react-router-dom";
import img1 from "../Assets/blog-01-new.webp";
import img2 from "../Assets/blog-03-new.webp";
import img3 from "../Assets/blog-02-new.webp";
import Button from "../Components/Button";
import ScrollToTop from "react-scroll-to-top";
import Sidebar from '../Layouts/Sidebar';
import WhatsappBot from "../Layouts/Whatsappbot";


const BlogPage = () => {
  return (
    <div className="blog-page-main">
      <div className="blogpage-main-part">
        {/* <Link to='/contact-us'><Button title="Ask Me"/></Link> */}
        <div className="blogpages-title">
          Welcome to Pacific Educational Consultant's Study Blogs{" "}
        </div>
        <div className="blogpages-subtitle"></div>
        <p className="blog-page-text-content">
          Your essential online resource for educational insights and
          inspiration. Our platform not only keeps you informed and connected
          but also encourages global networking, allowing students to build
          valuable international relationships. Pacific focuses on fostering
          cultural fluency and adaptability, offering a holistic educational
          experience that prepares you for both academic and real-world
          challenges. Our commitment goes beyond academic achievements,
          emphasizing the development of skills essential for thriving in a
          global society. Choose Pacific for a transformative educational
          journey that shapes your career, perspective, and character.
        </p>

        <div className="blog-cards-list">
          <Link to="/Blogs1">
            <BlogCard
              title="A Guide for Parents"
              // content="Sending Your Child to Study Abroad"
              image={img1}
            />
          </Link>
          <Link to="/Blogs2">
            <BlogCard
              title="Studying Abroad"
//               content="
// Explore global education with Pacific."
              image={img2}
            />
          </Link>
          <Link to="/Blogs3">
            <BlogCard
              title="
Why Pacific?"
              // content="Selecting Abroad Study Course"
              image={img3}
            />
          </Link>
        </div>
      </div>
      <Link to="/contact-us">
        <Button title="Ask Me" />
      </Link>

      <ScrollToTop color="#06a1ab" right="15px" />
      <Sidebar/> 
      <WhatsappBot />
    </div>
  );
};

export default BlogPage;
