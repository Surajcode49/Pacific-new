import React from "react";
import img from "../Assets/starrating.jpg";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <div className="review-main">
      <div className="review-part">
        <div className="review-title">What our Students Saying</div>
        <div className="review-contents">
          <div className="content-1">
            <strong>42,160+ reviews</strong>
            <img src={img} alt="" />
            <span className="rating-part">4.8/5</span>
            <Link to="https://www.google.co.in/search?client=safari&sca_esv=599479785&hl=en-in&sxsrf=ACQVn09Zl4mY-gAB_tgpdup-IhJNG_e5tg:1705590317581&q=Pacific+Educational+Consultant+%7C+Study+Abroad+-+IELTS+/+SAT+/+PTE+/+TOEFL+/+SPOKEN+ENGLISH+Coaching+In+Kota&ludocid=15196797885762858260&lsig=AB86z5XKw6r5WfC07OwlQoxzAHz1&kgs=ba6daa65df2f5fd3&shndl=-1&source=sh/x/loc/act/m4/3">
              <button className="review-button">Review us </button>
            </Link>
          </div>

          <div className="content2-main">
            <div className="content-2">
              <strong style={{ color: "#1970e8" }}>Charnjeet Brar</strong>
              <p className="review-each-content">
                Pacific Educational Consultant was invaluable in my IELTS and
                visa journey, offering expert guidance and achieving excellent
                results.
              </p>
            </div>

            <div className="content-2">
              <strong style={{ color: "#1970e8" }}>Dilkaran Atwal</strong>
              <p className="review-each-content">
                Pacific Educational Consultant was the best decision to go for,
                they guided me through all the important steps to apply for my
                Canada student Visa.
              </p>
            </div>

            <div className="content-2">
              <strong style={{ color: "#1970e8" }}>Veerpal Kaur</strong>
              <p className="review-each-content">
                I trained for my IELTS at Pacific Consultants years ago, with a
                profound impact on my career. Nitin Gautam Sir's exceptional
                guidance and support created a supportive, familial atmosphere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
