import React, { useState } from "react";
import studyimg from "../Assets/MonumnetNew.png";
import StudypagesCards from "../Components/Cards/StudypagesCards";
import Studycontentcard from "../Components/Cards/Studycontentcard";
import ScrollToTop from "react-scroll-to-top";
import Sidebar from '../Layouts/Sidebar';
import WhatsappBot from "../Layouts/Whatsappbot";


const StudyPages = ({ title, cont2, cont1, cont3, contTitle }) => {
  const [selectedCard, setSelectedCard] = useState(1);

  const canadaAddition = [
    { title1: 'Additional Point 1'},
    { title2: 'Additional Point 2'},
    { title3: 'Additional Point 2'},
    { title4: 'Additional Point 2'},
    { title5: 'Additional Point 2'},
    { title6: 'Additional Point 2'},
    // Add more points as needed
  ];

  const handleCardClick = (cardNumber) => {
    setSelectedCard(cardNumber);
  };
  return (
    <div className="study-page-main">
      <div className="study-pages-upper">
        <div className="studyUpper-left">
          <span className="firsttitle">
            Study <span className="secondtitle">in {title}</span>
          </span>
        </div>
        <div className="studyUpper-right">
          <img src={studyimg} alt="" className="study-img" />
        </div>
      </div>
      {/* <div className="study-pages-middle">
        <StudypagesCards />
        <StudypagesCards />
        <StudypagesCards />
        <StudypagesCards />
        <StudypagesCards />
        <StudypagesCards />
      </div> */}
      <div className="study-pages-lower">
        <div className="main-lower-part">
          <div className="study-lower-inner-part">
            <Studycontentcard onClick={() => handleCardClick(1)} title="Introduction"/>
            <Studycontentcard onClick={() => handleCardClick(2)} title="Brief"/>
            <Studycontentcard onClick={() => handleCardClick(3)} title="Conclusion"/>
            {/* <Studycontentcard onClick={() => handleCardClick(4)} />
            <Studycontentcard onClick={() => handleCardClick(5)} /> */}

            <div className="study-lower-inner-part-content">
              {selectedCard === 1 && (
                <>
                  {cont1}
                </>
              )}
              {selectedCard === 2 && (
                <>
                  <div className="cont2-title">{contTitle}</div>
                  <ul>
                    {cont2.map((item, index) => (
                      <li key={index}>
                        <div className="cont2-list-title">{item.title}</div>
                        <p className="cont2-list-content">{item.content}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {selectedCard === 3 && (
                <>
                  {cont3}
                </>
              )}
              {/* {selectedCard === 4 && (
                <>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, quod consectetur! Voluptatibus incidunt ullam quisquam,
                  aspernatur eius, voluptatem quo officia minima culpa non est
                  praesentium tenetur maxime aliquid, consequuntur beatae
                  laborum explicabo delectus possimus velit distinctio nemo.
                  Officia odio tenetur repellat voluptatem sit corrupti quasi
                  odit sint aut, animi laboriosam libero eaque sapiente vel
                  facere tempore modi cum quidem blanditiis quas corporis.
                  Corrupti laboriosam consectetur accusantium minima aliquid in
                  voluptatibus velit recusandae harum, error fuga itaque nam.
                  Quae, laboriosam veritatis!
                </>
              )}
              {selectedCard === 5 && (
                <>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente delectus, expedita temporibus molestiae nobis dolore
                  corrupti atque cumque eos, voluptates ducimus incidunt
                  reiciendis est iusto fuga cum eius? Cumque assumenda totam
                  laborum amet voluptate natus cupiditate, iste fugiat eligendi
                  fugit aspernatur, fuga optio quisquam veniam dicta nemo
                  nesciunt error! Ipsum consequuntur quis beatae ex harum fugit
                  doloremque autem fuga, labore velit tempora nostrum alias!
                  Reiciendis error vel laborum voluptatem provident non,
                  similique voluptatibus molestiae blanditiis minus voluptate
                  numquam delectus itaque assumenda, laboriosam vitae
                  repudiandae rem fugit. Doloremque aliquid accusamus nostrum
                  doloribus dicta fugiat aperiam asperiores a! Ipsam facere
                  impedit odit voluptates commodi corporis? Esse at voluptate
                  nesciunt praesentium suscipit error corrupti. Magni a beatae
                  error nostrum ipsum animi veritatis dolor saepe quaerat? Autem
                  maxime praesentium, explicabo optio pariatur error tempore
                  adipisci, dolorum voluptatibus molestias iste corrupti
                  asperiores laudantium voluptatum dignissimos rerum libero
                  illum ipsa nulla mollitia facilis numquam enim aspernatur?
                </>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop color="#06a1ab" right="15px" />
      <Sidebar/> 
      <WhatsappBot />
    </div>
  );
};

export default StudyPages;
