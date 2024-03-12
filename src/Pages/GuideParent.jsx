import React from "react";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Sidebar from '../Layouts/Sidebar';
import WhatsappBot from "../Layouts/Whatsappbot";

const GuideParent = () => {
  return (
    <div className="guideparent-main">
      <Link to='/contact-us'><Button title="Ask Me" /></Link>
      <div className="guideparent-title">
        A Guide for Parents: Sending Your Child to Study Abroad
      </div>
      <p className="guide-parent-about">
        Deciding to send your child to study abroad might feel a bit
        overwhelming, but don't worry! We're here to help you understand and
        make this important decision with confidence. Our tips will make the
        process easier and open up amazing opportunities for your child's
        future. Parents always want what's best for their kids. You work hard
        and make sacrifices to give them a good life. Sometimes, that means
        sending them to study in another country, where they can learn and grow
        on a global stage.
      </p>
      <section className="guide-parallax-1">
        {/* <div className="parallax-inner">
          <h1 className="paralax-heading">Scroll down</h1>
        </div> */}
      </section>
      <div className="guideparent-list">
        <span className="guideparent-list-main-title">
          Here are some simple tips to get you ready for your child's
          study-abroad journey:
        </span>
        <ul className="guideparent-main-lists">
          <li className="guideparent-list-body">
            <div className="blogparent-list-title">
              Understand Their Dreams:
            </div>
            <p>
              Listen to your child and understand what they want to achieve.
              Supporting their goals and dreams is important.
            </p>
          </li>
          <li className="guideparent-list-body">
            <div className="blogparent-list-title">
              Learn About Their Plans:
            </div>
            <p>
              Find out what your child wants to study and which universities
              they're interested in. Also, think about the kind of place where
              they'll be comfortable living.
            </p>
          </li>
          <li className="guideparent-list-body">
            <div className="blogparent-list-title">Get Expert Help:</div>
            <p>
              You can talk to experts who know all about studying abroad. They
              can help with things like visas, money matters, and adjusting to a
              new culture. Pacific Educational Consultant is a great place to
              get this kind of help.
            </p>
          </li>
          <li className="guideparent-list-body">
            <div className="blogparent-list-title">Stay Involved:</div>
            <p>
              Stay connected with your child and their journey. Show them that
              you're there for them every step of the way.
            </p>
          </li>
        </ul>
        <div className="guideparent-lower">
          Sending your child to study abroad is a big step, but with the right
          support, it can be an incredible experience. It's all about helping
          your child achieve their dreams and giving them the best
          opportunities.
        </div>
      </div>
      <Link to='/contact-us'><Button title="Ask Me" /></Link>
      <ScrollToTop color="#06a1ab" right="15px" />
      <Sidebar />
      <WhatsappBot />
    </div>
  );
};

export default GuideParent;
