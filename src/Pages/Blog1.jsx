import React from "react";
import ScrollToTop from "react-scroll-to-top";
// import blog1 from '../Assets/banner-1.png'
import Sidebar from '../Layouts/Sidebar';
import WhatsappBot from "../Layouts/Whatsappbot";


const Blog1 = ({title,firstpara, subtitle,list1, listContent1, list2, listContent2, list3, listContent3, list4, listContent4, list5, listContent5, list6, listContent6, list7, listContent7, list8, listContent8, list9, listContent9, list10, listContent10, conclusion  }) => {
  return (
    <div className="blog1-main">
      <div className="blog1-image-part">
        {/* <img
          src={blog1}
          alt=""
          style={{width:"50vw"}}
        /> */}
      </div>
      <div className="blog1-content-part">
        <div className="blog1-title">
          {title}
        </div>
        <div className="blog1-subtitle-part">
          {firstpara}
        </div>
        <div className="blog1-content-brief">
          <strong>
            {subtitle}
          </strong>
          <ul className="blog-list-main-body">
            <li className="blog-list-main">
              <div className="blog-list-part">{list1}</div>
              <p>{listContent1}</p>
            </li>
            <li className="blog-list-main">
              <div className="blog-list-part">{list2}</div>
              <p>{listContent2}</p>
            </li>
            <li className="blog-list-main">
              <div className="blog-list-part">{list3}</div>
              <p>{listContent3}</p>
            </li>
            <li className="blog-list-main">
              <div className="blog-list-part">{list4}</div>
              <p>{listContent4}</p>
            </li>
            <li className="blog-list-main">
              <div className="blog-list-part">{list5}</div>
              <p>{listContent5}</p>
            </li>
            <li className="blog-list-main">
              <div className="blog-list-part">{list6}</div>
              <p>{listContent6}</p>
            </li>
            <li className="blog-list-main">
              <div className="blog-list-part">{list7}</div>
              <p>{listContent7}</p>
            </li>
            <li className="blog-list-main">
              <div className="blog-list-part">{list8}</div>
              <p>{listContent8}</p>
            </li>
            <li className="blog-list-main">
              <div className="blog-list-part">{list9}</div>
              <p>{listContent9}</p>
            </li>
            <li className="blog-list-main">
              <div className="blog-list-part">{list10}</div>
              <p>{listContent10}</p>
            </li>
          </ul>
        </div>


        <div className="blog1-button-part">
          {conclusion}
        </div>
      </div>
      <ScrollToTop color="#06a1ab" right="15px" />
      <Sidebar/> 
      <WhatsappBot />
    </div>
  );
};

export default Blog1;
