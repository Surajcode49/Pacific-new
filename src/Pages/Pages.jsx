import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import Sucess from "../Pages/Successpage";
import Success from "../Pages/Successpage";
import Dashboard from "./Dashboard";
import BlogPage from "./BlogPage";
import Blog1 from "./Blog1";
import RegisterComp from "../Components/RegisterForm";
import AboutUs from "./AboutUs";
import StudyPages from "./StudyPages";
import ContactUS from "./ContactUS";
import Leadgenerate from "./Leadgenerate";
import GuideParent from "./GuideParent";
import ChooseCourse from "./ChooseCourse";
import WhyUs from "./WhyUs";
import Benifits from "./Benifits";
import Servicesoffer from "./Servicesoffer";
import Coaching from "./Coaching";
import StudyContentPage from "./StudyContentPage";

const Pages = () => {
  //Singapore//
  const data1 = [
    {
      title: "1. Exceptional Education",
      content:
        "Singapore is home to many esteemed schools and colleges that offer top-notch education recognized worldwide.",
    },
    {
      title: "2. Diverse Course Options",
      content:
        "Whether you're interested in business, computers, arts, hospitality, or tourism, Singapore has a suitable course for you. ",
    },
    {
      title: "3. Skip the IELTS: ",
      content:
        "In some cases, you may not need to take the IELTS exam to gain admission in Singapore. They have alternative ways of assessing your English skills. ",
    },
    {
      title: "4.	Quicker Graduation:",
      content:
        "In Singapore, you can complete a Master's degree in just one year or a Bachelor's degree in two or three years. This accelerates your learning journey. ",
    },
    {
      title: "5.	Practical Job Skills: ",
      content:
        "You can work while studying in Singapore, gaining valuable work experience that will benefit you in your future career. ",
    },
    {
      title: "6.	Hassle-free Visa: ",
      content:
        "Singapore simplifies the visa application process, making it easier for you to focus on your studies and enjoy your time in the country. ",
    },
    {
      title: "7.	Affordable Living: ",
      content:
        "Despite being a foreign country, Singapore offers a cost of living and transportation that won't break the bank.",
    },
  ];

  //Mauritius//
  const data2 = [
    {
      title: "1. Amazing Education ",
      content:
        "Guess what? Mauritius has some top-notch schools! These schools offer high-quality education recognized globally.",
    },
    {
      title: "2. Many Subjects to Choose From ",
      content:
        "You'll find a perfect course for you in Mauritius. Whether you're into business, computers, hotels, or exploring cool places, they've got classes designed just for that. ",
    },
    {
      title: "3. IELTS? Not Always Necessary ",
      content:
        "Hold on! No need to worry about the IELTS test. Sometimes, you can skip that tricky English test and still get into a course. Mauritius has alternative ways to assess your English skills. ",
    },
    {
      title: "4.	Quicker Studies ",
      content:
        "Want to finish your studies sooner? In Mauritius, you can complete a Master's degree in a shorter time.",
    },
    {
      title: "5.	Gain Practical Skills  ",
      content:
        "While studying in Mauritius, you can also work and gain valuable work experience that will benefit you in your future career. ",
    },
    {
      title: "6.	Hassle-free Visa Process ",
      content:
        "Getting a visa is like a cup of cake. The process is simple and convenient, allowing you to focus on your studies and enjoy your time in Mauritius. ",
    },
    {
      title: "7.	Affordable Living ",
      content:
        "Studying abroad can be expensive, but not in Mauritius. The cost of living and transportation is budget-friendly, making it a great option for students.",
    },
  ];

  //Japan//

  const data3 = [
    {
      title: "1. Innovative Education & Technology Hub",
      content:
        "Japan stands at the forefront of technological innovation and scientific research. Renowned for its advanced programs in engineering, robotics, and information technology, Japanese universities provide an excellent platform for students looking to excel in these fields.",
    },
    {
      title: "2. Rich Cultural Heritage & Modern Lifestyle ",
      content:
        "Immerse yourself in a captivating blend of ancient traditions and modern trends. While studying in Japan, you'll have the opportunity to explore historical sites, partake in traditional ceremonies, and engage with the vibrant pop culture that Japan is famous for.",
    },
    {
      title: "3. Global Networking Opportunities ",
      content:
        "Studying in Japan introduces you to a diverse community of international students and researchers. This fosters a global network that can enhance your career prospects and broaden your cultural horizons.",
    },
    {
      title: "4.	Language & Communication",
      content:
        "While many programs are offered in English, learning the Japanese language can greatly enrich your experience. Communicating in the local language not only enhances your day-to-day life but also allows you to delve deeper into Japanese culture.",
    },
    {
      title: "5.	Scholarship Opportunities  ",
      content:
        "Japan offers various scholarships for international students, easing the financial burden of studying abroad and making higher education accessible to a broader range of students.",
    },
    {
      title: "6.	Cultural Immersion & Adventure",
      content:
        "Explore Japan's breathtaking landscapes, from serene cherry blossom gardens to towering mountains. Experience traditional tea ceremonies, sumo wrestling, and the excitement of futuristic cities like Tokyo. ",
    },
    {
      title: "7.	Research Opportunities ",
      content:
        "Japanese universities are renowned for their research contributions. Engage in groundbreaking research projects and collaborate with experts in your field. ",
    },
    {
      title: "8.	Safety & Quality of Life ",
      content:
        "Japan boasts one of the safest environments for international students. With its efficient public transportation, clean streets, and welcoming local communities, you'll feel at home in no time.",
    },
  ];

  //UK//
  const data4 = [
    {
      title: "1. Renowned Universities & Research Opportunities",
      content:
        "The United Kingdom is home to some of the world's most esteemed universities, each offering unparalleled academic excellence and research facilities. Institutions like Oxford, Cambridge, Imperial College London, and the London School of Economics are global leaders in their respective fields.",
    },
    {
      title: "2. Cultural Diversity & Global Networking",
      content:
        "Immerse yourself in a diverse and inclusive academic environment where you'll interact with students and researchers from around the globe. This cultural tapestry fosters a rich exchange of ideas and perspectives, enhancing your educational experience.",
    },
    {
      title: "3. Flexible Course Structures & Majors",
      content:
        "The UK offers an extensive range of majors and courses, from humanities and arts to science, engineering, and business. The flexibility of its educational system allows you to tailor your curriculum to align with your academic and career aspirations.",
    },
    {
      title: "4.	Historical & Modern Fusion ",
      content:
        "Explore the blend of historical charm and modern innovation in the UK's cities. Visit iconic landmarks, museums, and cultural sites while enjoying the vibrancy of contemporary urban life.",
    },
    {
      title: "5.	Global Career Prospects",
      content:
        " UK education is highly regarded by employers worldwide. The connections you build during your studies and the reputation of UK universities can significantly boost your career prospects on an international scale.",
    },
    {
      title: "6.	English-Taught Programs ",
      content:
        "Studying in an English-speaking country presents a valuable opportunity to enhance your language skills. The UK's English-taught programs cater to international students, ensuring a smooth transition into your academic journey. ",
    },
    {
      title: "7.	Research & Innovation ",
      content:
        "Participate in cutting-edge research projects and contribute to advancements in various fields. The UK's research-intensive universities provide an ideal platform for pursuing academic excellence.",
    },
    {
      title: "8.	Cultural Enrichment",
      content:
        "From Shakespearean theater to contemporary art exhibitions, the UK's cultural scene is vibrant and diverse. Engage with the arts, literature, and music, enriching your personal and academic growth.",
    },
    {
      title: "9.	Scholarship Opportunities ",
      content:
        "From Shakespearean theater to contemporary art exhibitions, the UK's cultural scene is vibrant and diverse. Engage with the arts, literature, and music, enriching your personal and academic growth.",
    },
    {
      title: "10.	Quality of Life ",
      content:
        "Experience a high standard of living in the UK, with efficient public transportation, world-class healthcare, and a safe and welcoming environment",
    },
  ];

  //USA//
  const data5 = [
    {
      title: "1. Academic Excellence & Research Advancements ",
      content:
        "The United States boasts a reputation for academic excellence, housing an array of prestigious institutions like Harvard, Stanford, MIT, and more. Focusing on research-driven education ensures you're exposed to cutting-edge discoveries and advancements.",
    },
    {
      title: "2. Diverse Study Programs & Majors ",
      content:
        "Whether your passion lies in engineering, arts, sciences, business, or social sciences, American universities offer various majors and courses to cater to your interests and career aspirations.",
    },
    {
      title: "3. Flexibility & Interdisciplinary Studies ",
      content:
        "The American education system emphasizes flexible curriculum structures and interdisciplinary studies, allowing you to explore various subjects and tailor your education to match your unique academic journey.",
    },
    {
      title: "4.	Global Networking & Cultural Diversity",
      content:
        "Immerse yourself in a melting pot of cultures and ideas. Studying in the United States exposes you to a diverse community of students worldwide, fostering global connections that last a lifetime.",
    },
    {
      title: "5.	Research Opportunities & Innovation ",
      content:
        " From state-of-the-art laboratories to collaborative research projects, American universities provide unparalleled resources for students to engage in groundbreaking research and contribute to advancements in their chosen fields.",
    },
    {
      title: "6.	Internship & Job Opportunities",
      content:
        "The United States offers extensive internships and practical work experience opportunities, allowing you to gain hands-on exposure in your field of study and prepare for a successful career.",
    },
    {
      title: "7.	English-Language Proficiency ",
      content:
        "Studying in an English-speaking country enhances your language skills and communication abilities, providing a valuable asset in the global job market.",
    },
    {
      title: "8.	Cultural Exposure & Extracurricular Activities ",
      content:
        "Experience the diverse cultural landscape of the United States, from vibrant urban centers to picturesque landscapes. Engage in many extracurricular activities, from sports to arts, and develop a well-rounded personality.",
    },
    {
      title: "9.	Scholarship & Financial Aid Options",
      content:
        "American universities offer a range of scholarship and financial aid opportunities for international students, making education accessible and affordable.",
    },
    {
      title: "10.	Quality of Life & Personal Growth ",
      content:
        "Benefit from the country's advanced infrastructure, healthcare system, and technological advancements. Your journey in the United States extends beyond academics, fostering personal growth, independence, and cross-cultural understanding.",
    },
  ];

  //Canada//
  const data6 = [
    {
      title: "1. Quality Education & Research Opportunities",
      content:
        "Canadian universities consistently rank among the world's best. Renowned for research advancements, institutions like the University of Toronto and McGill University offer cutting-edge programs across various disciplines.",
    },
    {
      title: "2. Multicultural Environment & Diversity ",
      content:
        "Experience Canada's rich cultural mosaic. Studying here exposes you to a diverse community, enriching your global perspective and fostering lifelong connections.",
    },
    {
      title: "3. Safe & Welcoming Environment",
      content:
        "Canada's safety and friendliness are unparalleled. From the picturesque landscapes to the vibrant cities, you'll feel at home and welcomed with open arms.",
    },
    {
      title: "4.	English & French Education ",
      content:
        "Canada is bilingual, offering education in both English and French. This linguistic diversity enhances your language skills and cultural adaptability.",
    },
    {
      title: "5.	Co-op & Job Opportunities ",
      content:
        " Many Canadian programs include co-op and internship options, allowing you to gain practical experience and make industry connections while you study. ",
    },
    {
      title: "6.	Natural Beauty & Outdoor Lifestyle ",
      content:
        "Explore Canada's breathtaking nature, from the Rocky Mountains to coastal beauty. Embrace outdoor activities and a healthy lifestyle. ",
    },
    {
      title: "7.	Affordable Education",
      content:
        "Compared to other top study destinations, Canada offers affordable tuition fees and a lower cost of living, making education accessible.",
    },
    {
      title: "8.	Global Networking ",
      content:
        "Engage in a network of international students and professionals, setting the stage for a global career.",
    },
  ];

  //Switzerland//
  const data7 = [
    {
      title: "1. Hospitality & Business Excellence ",
      content:
        "Switzerland is renowned for its top-tier hospitality and business programs. Institutions like Ecole hôtelière de Lausanne and ETH Zurich offer world-class education.",
    },
    {
      title: "2. Innovation & Research Opportunities ",
      content:
        "Switzerland stands at the forefront of innovation. Universities collaborate with industries, providing opportunities to engage in cutting-edge research.",
    },
    {
      title: "3. Central European Location",
      content:
        "Switzerland's central location makes it a gateway to Europe. You'll have the chance to explore diverse cultures and expand your horizons.",
    },
    {
      title: "4.	Quality of Life & Safety",
      content:
        "Switzerland offers an exceptional quality of life, with efficient public services, safety, and breathtaking landscapes.",
    },
    {
      title: "5.	Cultural Exposure & Multilingualism",
      content:
        " Experience the convergence of German, French, Italian, and Roman cultures. Switzerland's multilingual environment enriches your cross-cultural skills.",
    },
    {
      title: "6.	Global Networking & Career Prospects",
      content:
        "Engage with an international student community and build a global network. Swiss education opens doors to international career opportunities.",
    },
    {
      title: "7.	Sustainable Focus ",
      content:
        "Switzerland's commitment to sustainability is reflected in its programs. If you're passionate about environmental issues, Swiss universities offer relevant studies.",
    },
  ];

  //Netherlands//
  const data8 = [
    {
      title: "1. Progressive Teaching Methods ",
      content:
        "The Netherlands prides itself on its interactive and student-centered teaching methods, fostering critical thinking and active participation.",
    },
    {
      title: "2. English-Taught Programs",
      content:
        "Many Dutch universities offer a wide range of English-taught programs, making it accessible for international students.",
    },
    {
      title: "3. Inclusive & Multicultural Society",
      content:
        "Embrace the Netherlands' inclusive atmosphere, where diverse perspectives are celebrated and fostered.",
    },
    {
      title: "4.	Research & Innovation ",
      content:
        "Engage in groundbreaking research projects, as Dutch universities emphasize innovation and collaboration with industries.",
    },
    {
      title: "5.	Arts & Culture ",
      content:
        " Explore the Netherlands' rich artistic heritage, from world-famous museums to vibrant cultural festivals.",
    },
    {
      title: "6.	Quality of Life & Sustainable Living ",
      content:
        "The Netherlands offers a high quality of life and promotes sustainable practices, reflecting its commitment to environmental responsibility.",
    },
    {
      title: "7.	Global Networking",
      content:
        "Studying in the Netherlands connects you with an international community, laying the foundation for a global network.",
    },
    {
      title: "8.	Job Opportunities ",
      content:
        "The Netherlands is known for its strong job market and opportunities for international graduates to extend their stay.",
    },
  ];
  const data9 = [
    {
      title: "1. Art & Architecture Richness  ",
      content:
        "Italy is a treasure trove of art and architecture, with historical landmarks and cultural icons around every corner.",
    },
    {
      title: "2. Culinary Arts & Gastronomy",
      content:
        "Immerse yourself in the art of Italian cuisine, learning from experts in culinary schools and savoring authentic dishes.",
    },
    {
      title: "3. Diverse Study Programs",
      content:
        "From arts and humanities to business and engineering, Italian universities offer a broad spectrum of study programs.",
    },
    {
      title: "4.	Language & Culture",
      content:
        "Learning the Italian language enhances your cultural experience and deepens your connection with the country's rich heritage.",
    },
    {
      title: "5.	Innovation & Research",
      content:
        " Italian universities contribute to cutting-edge research and offer programs that blend tradition with modernity.",
    },
    {
      title: "6.	Quality of Life",
      content:
        "Experience the Italian lifestyle, characterized by a leisurely pace, passion for life, and picturesque landscapes.",
    },
    {
      title: "7.	Global Networking",
      content:
        "Connect with an international community of students and professionals, fostering a network that spans the globe.",
    },
    {
      title: "8.	Historical Enrichment",
      content:
        "Study in a country steeped in history, where ancient ruins and architectural wonders shape the backdrop of daily life.",
    },
  ];
  //Australia//
  const data10 = [
    
    {
      title: "1. Quality Education & Research Opportunities",
      content:
        "Australian universities are known for their quality education and research contributions across various fields.",
    },
    {
      title: "2. Vibrant Lifestyle & Natural Beauty",
      content:
        "Experience Australia's stunning landscapes, from pristine beaches to picturesque mountains.",
    },
    {
      title: "3. English-Taught Programs",
      content:
        "English-taught programs cater to international students, enhancing their language skills and academic experience.",
    },
    {
      title: "4.	Research & Innovation",
      content:
        "Australian universities offer opportunities for research and innovation, contributing to global advancements.",
    },
    {
      title: "5.	Cultural Diversity & Inclusion ",
      content:
        " Australia's multicultural society welcomes students from around the world, fostering cultural understanding.",
    },
    {
      title: "6.	Global Networking ",
      content:
        "Connect with an international student community and professionals, fostering a global network.",
    },
    {
      title: "7.	Quality of Life ",
      content:
        "Experience Australia's high quality of life, with a laid-back lifestyle and excellent healthcare.",
    },
    {
      title: "8.	Work Opportunities",
      content:
        "Australia offers opportunities for part-time work during studies and post-graduation work visas.",
    },
  ];
  //Ireland//
  const data11 = [
    {
      title: "1. Emerging Tech Hub ",
      content:
        "Ireland's technology sector is booming, making it an ideal choice for students interested in tech and innovation.",
    },
    {
      title: "2. Friendly & Welcoming Society",
      content:
        "Experience Ireland's warm and welcoming environment, where the friendly local community makes you feel at home.",
    },
    {
      title: "3. English-Taught Programs",
      content:
        "English-taught programs cater to international students, enhancing their language skills.",
    },
    {
      title: "4.	Cultural Heritage & Literary Excellence ",
      content:
        "Immerse yourself in Ireland's rich literary history and cultural celebrations.",
    },
    {
      title: "5.	Research & Innovation",
      content:
        " Ireland's universities contribute to research and innovation across a variety of disciplines.",
    },
    {
      title: "6.	Global Networking ",
      content:
        "Connect with an international student community and professionals from around the world.",
    },
    {
      title: "7.	Quality of Life ",
      content:
        "Experience Ireland's charm, from lively pubs to stunning landscapes and historic sites.",
    },
    {
      title: "8.	Affordable Education & Living ",
      content:
        "Ireland offers competitive tuition fees and an affordable cost of living.",
    },
  ];

  //Germany//
  const data12 = [
    {
      title: "1. Quality Education & Strong Job Market",
      content:
        "Germany's universities are recognized for their academic excellence, and the country offers a robust job market for graduates.",
    },
    {
      title: "2. Innovation & Engineering Excellence",
      content:
        "Experience Germany's reputation for technological innovation, particularly in engineering and sciences.",
    },
    {
      title: "3. English-Taught Programs ",
      content:
        "Many German universities offer English-taught programs, making education accessible for international students.",
    },
    {
      title: "4.	Cultural Diversity & Global Networking",
      content:
        "Connect with a diverse student community, fostering cultural understanding and global connections.",
    },
    {
      title: "5.	Research Opportunities",
      content:
        " German universities provide opportunities for research and collaboration across various fields.",
    },
    {
      title: "6.	Quality of Life",
      content:
        "Experience Germany's high quality of life, efficient public services, and vibrant cities.",
    },
    {
      title: "7.	Affordable Education",
      content:
        "Germany offers tuition-free or low-cost education, making it an attractive choice for many students.",
    },
    {
      title: "8.	Cultural Enrichment",
      content:
        "Immerse yourself in Germany's rich cultural heritage, from historical landmarks to modern art galleries.",
    },
  ];

  //France//
  const data13 = [
    {
      title: "1. Art & Culture Hub ",
      content:
        "France is renowned for its art, fashion, and cultural contributions to the world. Study in a country that has shaped global trends.",
    },
    {
      title: "2. Historical Significance",
      content:
        "Explore historical landmarks, monuments, and museums that reflect France's rich past and influential role in world history. ",
    },
    {
      title: "3. Culinary Excellence ",
      content:
        "Immerse yourself in the world of culinary arts. France's gastronomy is a world-renowned treasure. ",
    },
    {
      title: "4.	Language & Literature",
      content:
        "Learning the French language opens doors to a world of literature, philosophy, and intellectual exploration.",
    },
    {
      title: "5.	Diverse Study Fields ",
      content:
        " From humanities to sciences, France offers diverse study programs at internationally acclaimed universities.",
    },
    {
      title: "6.	Global Networking ",
      content:
        "Connect with an international student community and professionals from around the world, creating a global network.",
    },
    {
      title: "7.	Quality of Life ",
      content:
        "Experience the French quality of life, characterized by a balance between work, leisure, and appreciation of culture. ",
    },
    {
      title: "8.	Innovation & Research ",
      content:
        "French universities contribute significantly to global research and innovation, particularly in science and technology. ",
    },
  ];

   //Denmark//
   const data14 = [
    {
      title: "1. Work-Life Balance & Well-Being ",
      content:
        "Denmark is known for its exceptional work-life balance, fostering personal well-being and mental health. ",
    },
    {
      title: "2. Sustainability & Green Initiatives ",
      content:
        "Immerse yourself in a country that prioritizes environmental sustainability and offers programs in green technology and sustainability.",
    },
    {
      title: "3. Innovation & Design ",
      content:
        "Denmark is a hub for innovative design and technology, making it an ideal choice for creative minds.",
    },
    {
      title: "4.	English-Taught Programs ",
      content:
        "Many Danish universities offer English-taught programs, ensuring accessibility for international students. ",
    },
    {
      title: "5.	Cultural Diversity ",
      content:
        "Experience a multicultural society that embraces diversity and celebrates differences. ",
    },
    {
      title: "6.	Research & Collaboration ",
      content:
        "Engage in collaborative research projects and contribute to advancements in various fields. ",
    },
    {
      title: "7.	Quality of Life ",
      content:
        "Experience the Danish quality of life, characterized by safe cities, efficient public services, and a strong sense of community. ",
    },
    {
      title: "8.	Global Networking ",
      content:
        "Connect with an international community of students and professionals, fostering global connections.",
    },
  ];

  //Poland//
  const data15 = [
    {
      title: "1. Affordable Education & Living  ",
      content:
        "Poland offers affordable tuition fees and a lower cost of living compared to other European countries. ",
    },
    {
      title: "2. Rich History & Cultural Diversity  ",
      content:
        "Experience Poland's rich history, reflected in its architecture, museums, and cultural celebrations. ",
    },
    {
      title: "3. Emerging European Hub  ",
      content:
        "Poland's growing economy and emerging markets present unique opportunities for business and entrepreneurship. ",
    },
    {
      title: "4.	English-Taught Programs ",
      content:
        "Many Polish universities offer English-taught programs across various disciplines, making education accessible. ",
    },
    {
      title: "5.	Quality Education ",
      content:
        "Polish universities provide quality education and are recognized for their academic standards.",
    },
    {
      title: "6.	Research Opportunities  ",
      content:
        "Engage in research projects across a spectrum of fields, contributing to academic advancements. ",
    },
    {
      title: "7.	Quality of Life  ",
      content:
        "Experience a comfortable and affordable lifestyle, with efficient transportation and vibrant cities. ",
    },
    {
      title: "8.	Global Networking  ",
      content:
        "Connect with an international community of students and professionals, creating a global network. ",
    },
  ];
//Sweden//
  const data16 = [
    {
      title: "1. Innovative Design & Technology   ",
      content:
        "Sweden is known for its innovative design programs and technology-driven education. ",
    },
    {
      title: "2. English-Taught Courses  ",
      content:
        "Many Swedish universities offer courses in English, ensuring accessibility for international students. ",
    },
    {
      title: "3. Creative & Progressive Society   ",
      content:
        "Experience Sweden's progressive mindset, fostering creativity, open-mindedness, and inclusivity. ",
    },
    {
      title: "4.	Quality Education  ",
      content:
        "Swedish universities offer quality education, particularly in technology, design, and sciences.  ",
    },
    {
      title: "5.	Sustainability Focus ",
      content:
        "Sweden is committed to sustainability, offering programs that align with environmental responsibility. ",
    },
    {
      title: "6.	Global Networking   ",
      content:
        "Connect with an international community of students and professionals, fostering global connections.  ",
    },
    {
      title: "7.	Cultural Enrichment   ",
      content:
        "Experience Sweden's cultural heritage, from historic landmarks to modern art galleries.  ",
    },
    {
      title: "8.	Quality of Life   ",
      content:
        "Experience Sweden's high quality of life, with efficient public services, safety, and clean environments.  ",
    },
  ];

  //Vietnam//
  const data17 = [
    {
      title: "1. Cultural Diversity & Historical Significance    ",
      content:
        "Experience Vietnam's unique blend of tradition and modernity, reflected in its cuisine, festivals, and historical landmarks. ",
    },
    {
      title: "2. Economic Growth & Business Opportunities   ",
      content:
        "Vietnam's rapidly growing economy presents opportunities in business, economics, and emerging markets.  ",
    },
    {
      title: "3. Culinary Delights    ",
      content:
        "Immerse yourself in Vietnamese cuisine, famous for its flavors and diversity. ",
    },
    {
      title: "4.	English-Taught Programs  ",
      content:
        "Many Vietnamese universities offer English-taught programs, catering to international students.  ",
    },
    {
      title: "5.	Affordable Education & Living  ",
      content:
        "Vietnam offers affordable tuition fees and a cost-effective lifestyle, making education accessible.  ",
    },
    {
      title: "6.	Global Networking   ",
      content:
        "Connect with an international student community and professionals from around the world.  ",
    },
    {
      title: "7.	Quality of Life   ",
      content:
        "Experience Vietnam's warm climate, diverse landscapes, and vibrant cities.  ",
    },
    {
      title: "8.	Research & Innovation    ",
      content:
        "Engage in research projects aligned with Vietnam's developing economy and technological advancements. ",
    },
  ];

    //Lithuania //
  const data18 = [
    {
      title: "1. Quality Education & Technology Focus ",
      content:
        "Lithuania offers quality education, particularly in technology-related fields. ",
    },
    {
      title: "2. European Blend of History & Modernity   ",
      content:
        "Experience Lithuania's historical landmarks alongside its modern cities and innovative industries. ",
    },
    {
      title: "3. English-Taught Programs ",
      content:
        "Many Lithuanian universities offer English-taught programs, making education accessible for international students. ",
    },
    {
      title: "4.	English-Taught Programs  ",
      content:
        "Many Vietnamese universities offer English-taught programs, catering to international students.  ",
    },
    {
      title: "5.	Affordable Living & Education  ",
      content:
        "Lithuania offers affordable tuition fees and a cost-effective lifestyle, making education attainable. ",
    },
    {
      title: "6.	Research & Innovation  ",
      content:
        "Lithuanian universities contribute to research and innovation, particularly in technology and sciences. ",
    },
    {
      title: "7.	Cultural Diversity & Emerging Opportunities  ",
      content:
        "Experience Lithuania's cultural diversity and emerging markets, presenting unique career prospects. ",
    },
    {
      title: "8.	Global Networking  ",
      content:
        "Connect with an international student community and professionals from around the world. ",
    },
  ];
  return (
    <div className="pages-main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Guide-For-Parent" element={<GuideParent />} />
        <Route path="/Choose-Course" element={<ChooseCourse />} />
        <Route path="/Why-us" element={<WhyUs />} />
        <Route path="/Sucess" element={<Sucess />} />
        <Route path="/Benifits" element={<Benifits />} />
        <Route path="/Services" element={<Servicesoffer />} />
        <Route path="/Coaching" element={<Coaching />} />
        <Route
          path="/Study-Australia"
          element={
            <StudyPages
              title="Australia"
              contTitle=""
              cont1="Considering Australia for your education? You're stepping into a world of academic excellence, natural beauty, and vibrant cities. Australia's diverse study options, research opportunities, and quality lifestyle make it an ideal study destination."
              cont2={data10}
              cont3="Australia offers a blend of academic excellence, natural beauty, and cultural diversity. Your journey here promises personal growth, educational enrichment, and a world of opportunities. Connect with Pacific Educational Consultant to embark on your Australian education adventure! "
            />
          }
        />
        <Route
          path="/Study-USA"
          element={
            <StudyPages
              title="USA"
              contTitle="Let's delve int the myriad reasons that make the United States an ultimate destination for international students like you."
              cont1="Are you contemplating the idea of pursuing higher education in the United States? You're standing on the threshold of a transformative journey that offers unparalleled academic opportunities and a rich cultural experience. "
              cont2={data5}
              cont3="The United States presents an educational voyage characterized by academic excellence, research innovation, cultural diversity, and global networking opportunities. Whether your aspirations lie in research, entrepreneurship, or professional development, the US offers an environment where your dreams can flourish. Connect with Pacific Educational Consultant to embark on your transformative study journey in the United States! "
            />
          }
        />
        <Route
          path="/Study-UK"
          element={
            <StudyPages
              title="UK"
              contTitle="Let's delve into the enticing facets that make the UK a prime destination for higher education. "
              cont1="Are you contemplating pursuing your education in the United Kingdom? You're on the verge of a remarkable academic journey! The UK is a beacon of educational excellence, offering many programs and opportunities for international students like you. "
              cont2={data4}
              cont3="The United Kingdom offers an unparalleled academic experience characterized by prestigious universities, diverse cultural exposure, and exceptional research opportunities. Your journey of personal and professional growth awaits in this educational haven. Contact Pacific Educational Consultant to embark on your transformative study experience in the UK! "
            />
          }
        />
        <Route
          path="/Study-canada"
          element={
            <StudyPages
              title="Canada"
              contTitle=""
              cont1="Are you considering Canada for your education? You're on the verge of a remarkable academic adventure! With its welcoming atmosphere, world-class institutions, and stunning landscapes, Canada offers a one-of-a-kind experience for international students. "
              cont2={data6}
              cont3="Canada offers a combination of academic excellence, cultural diversity, and a high quality of life. If you're seeking a well-rounded and enriching education, Canada is your destination. Connect with Pacific Educational Consultant to embark on your Canadian education journey! "
            />
          }
        />
        <Route
          path="/Study-Mauritius"
          element={
            <StudyPages
              title="Mauritius"
              contTitle="Let's discover why Mauritius is an excellent choice for students like you!"
              cont1="Dear student, are you considering studying in Mauritius? You're onto something great! Mauritius is a fantastic destination where students can learn about Business, Computers, Hospitality, and more. The best part is that you don't need an IELTS test. You can finish your studies faster, and the visa process is much easier. "
              cont2={data2}
              cont3="Mauritius is an excellent choice for studying abroad. You can choose from a variety of courses, skip the IELTS test in some cases, complete your studies faster, gain practical skills from working while studying, and enjoy easy visa processing and affordable living options. Pacific Educational Consultant is here to assist you with your IELTS preparation and visa matters. Connect with us to start your exciting journey of studying in Mauritius! "
            />
          }
        />
        <Route
          path="/Study-Ireland"
          element={
            <StudyPages
              title="Ireland"
              contTitle=""
              cont1="Are you considering Ireland for your education? You're entering a world of friendly communities, innovation, and cultural heritage. Ireland's vibrant cities, renowned universities, and warm hospitality make it an inviting study destination."
              cont2={data11}
              cont3="Ireland offers a blend of innovation, culture, and warm hospitality. Your educational journey in Ireland promises personal growth, cultural exploration, and a world of possibilities. Connect with Pacific Educational Consultant to embark on your Irish education adventure! "
            />
          }
        />
        <Route
          path="/Study-Germany"
          element={
            <StudyPages
              title="Germany"
              contTitle=""
              cont1="Are you considering Germany for your education? You're entering a world of academic excellence, innovation, and cultural diversity. Germany's renowned universities, strong job market, and vibrant cities make it an ideal study destination."
              cont2={data12}
              cont3="Germany offers a combination of academic prestige, innovation, and cultural diversity. Your educational journey here promises personal growth, career opportunities, and a world of experiences. Connect with Pacific Educational Consultant to embark on your German education adventure!"
            />
          }
        />
        <Route
          path="/Study-Singapore"
          element={
            <StudyPages
              title="Singapore"
              contTitle="Here are some reasons why Singapore is an excellent option for students like you:"
              cont1="Are you considering studying abroad? Singapore is a fantastic choice! Located in Asia, Singapore offers a wide range of educational opportunities in various fields. "
              cont2={data1}
              cont3="In conclusion, Singapore is a wise choice for studying in Asia. With its exceptional education system, diverse courses, potential waiver of the IELTS, faster graduation, practical job skills, hassle-free visa process, and affordable living options, Singapore provides an incredible learning experience. Pacific Educational Consultant is here to assist you with your IELTS preparation and visa matters."
            />
          }
        />
        <Route
          path="/Study-Japan"
          element={
            <StudyPages
              title="Japan"
              contTitle="Let's delve into why studying in Japan is an exceptional choice for students like you."
              cont1="Thinking about pursuing your education in Japan? You're about to embark on a remarkable journey! Japan offers an extraordinary study experience across a diverse range of fields. From cutting-edge technology to rich cultural heritage, Japan has it all."
              cont2={data3}
              cont3="Japan offers a unique blend of innovation, tradition, and world-class education. From top-notch technological programs to an enchanting cultural experience, studying in Japan opens doors to a future full of possibilities. Connect with us at Pacific Educational Consultant to kick-start your journey to study in Japan!"
            />
          }
        />
        <Route
          path="/Study-Switzerland"
          element={
            <StudyPages
              title="Switzerland"
              //   contTitle="Let's delve into why studying in Japan is an exceptional choice for students like you."
              cont1="Thinking about Switzerland for your education? You're stepping into a world of academic prestige, innovation, and stunning landscapes. Switzerland's unique blend of educational quality and natural beauty sets it apart as an exceptional study destination."
              cont2={data7}
              cont3="Switzerland offers a combination of academic excellence, innovation, and natural beauty. Your educational journey in this dynamic country promises personal growth and global perspectives. Connect with Pacific Educational Consultant to embark on your Swiss education adventure!"
            />
          }
        />
        <Route
          path="/Study-Netherlands"
          element={
            <StudyPages
              title="Netherlands"
              //   contTitle="Let's delve into why studying in Japan is an exceptional choice for students like you."
              cont1="Considering the Netherlands for your education? You're choosing a country that values innovation, creativity, and quality education. The Netherlands' unique blend of cultural vibrancy and academic excellence offers an unparalleled experience."
              cont2={data8}
              cont3="The Netherlands offers an immersive education characterized by progressive teaching, cultural vibrancy, and innovation. This captivating journey of learning and personal growth awaits. Connect with Pacific Educational Consultant to start your Dutch education experience!"
            />
          }
        />
        <Route
          path="/Study-Italy"
          element={
            <StudyPages
              title="Italy"
              //   contTitle="Let's delve into why studying in Japan is an exceptional choice for students like you."
              cont1="Considering Italy for your education? You're embarking on an academic and cultural journey that offers world-renowned heritage, culinary excellence, and innovative programs. Italy's fusion of history and modernity makes it an exceptional study destination."
              cont2={data9}
              cont3="Italy offers an enriching blend of history, culture, and academic excellence. Your educational journey here promises personal growth, cultural immersion, and a world of opportunities. Connect with Pacific Educational Consultant to embark on your Italian education adventure!"
            />
          }
        />
        <Route
          path="/Study-France"
          element={
            <StudyPages
              title="France"
              //   contTitle="Let's delve into why studying in Japan is an exceptional choice for students like you."
              cont1="Considering France for your education? You're entering a realm of artistic inspiration, cultural sophistication, and academic prestige. France's rich heritage, diverse programs, and vibrant cities make it an ideal study destination. "
              cont2={data13}
              cont3="France offers an academic and cultural journey that fosters personal growth, creativity, and global perspectives. Connect with Pacific Educational Consultant to embark on your French education adventure! "
            />
          }
        />
        <Route
          path="/Study-Denmark"
          element={
            <StudyPages
              title="Denmark"
              //   contTitle="Let's delve into why studying in Japan is an exceptional choice for students like you."
              cont1="Considering Denmark for your education? You're entering a world of innovation, sustainability, and quality education. Denmark's emphasis on work-life balance, environmental consciousness, and forward-thinking makes it an ideal study destination."
              cont2={data14}
              cont3="Denmark offers a harmonious blend of education, sustainability, and innovation. Your educational journey here promises personal growth, cultural enrichment, and a vision for a brighter future. Connect with Pacific Educational Consultant to embark on your Danish education adventure! "
            />
          }
        />
        <Route
          path="/Study-Poland"
          element={
            <StudyPages
              title="Poland"
              //   contTitle="Let's delve into why studying in Japan is an exceptional choice for students like you."
              cont1="Considering Poland for your education? You're stepping into a world of affordable education, historical richness, and emerging opportunities. Poland's diverse study programs, vibrant culture, and budget-friendly lifestyle make it an attractive study destination."
              cont2={data15}
              cont3="Poland offers a blend of historical richness, affordability, and academic quality. Your educational journey in Poland promises personal growth, cultural exploration, and a world of possibilities. Connect with Pacific Educational Consultant to embark on your Polish education adventure! "
            />
          }
        />
        <Route
          path="/Study-lithuania"
          element={
            <StudyPages
              title="lithuania"
              //   contTitle="Let's delve into why studying in Japan is an exceptional choice for students like you."
              cont1="Are you Considering Lithuania for your education? You're entering a world of quality education, historical significance, and technological advancement. Lithuania's welcoming atmosphere, affordable living, and emerging opportunities make it a promising study destination."
              cont2={data18}
              cont3="Lithuania offers a blend of education, history, and innovation. Your educational journey here promises personal growth, cultural exploration, and a world of potential. Connect with Pacific Educational Consultant to embark on your Lithuanian education adventure!"
            />
          }
        />
        <Route
          path="/Study-vietnam"
          element={
            <StudyPages
              title="vietnam"
              //   contTitle="Let's delve into why studying in Japan is an exceptional choice for students like you."
              cont1="Considering Vietnam for your education? You're entering a world of cultural richness, economic growth, and diverse study opportunities. Vietnam's historical significance, economic development, and warm hospitality make it a fascinating study destination."
              cont2={data17}
              cont3="Vietnam offers a blend of cultural heritage, economic vibrancy, and study opportunities. Your educational journey here promises personal growth, cross-cultural experiences, and a world of potential. Connect with Pacific Educational Consultant to embark on your Vietnamese education adventure! "
            />
          }
        />
        <Route
          path="/Study-Sweden"
          element={
            <StudyPages
              title="Sweden"
              //   contTitle="Let's delve into why studying in Japan is an exceptional choice for students like you."
              cont1="Considering Sweden for your education? You're entering a world of innovation, creativity, and quality living. Sweden's renowned design programs, commitment to sustainability, and vibrant cities make it a compelling study destination."
              cont2={data16}
              cont3="Sweden offers a unique blend of innovation, design, and quality of life. Your educational journey here promises personal growth, cultural exploration, and a forward-thinking perspective. Connect with Pacific Educational Consultant to embark on your Swedish education adventure!"
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog-Page" element={<BlogPage />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path="/Destination" element={<StudyContentPage />} />
        <Route path="/study-page" element={<StudyPages />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route
          path="/Blogs1"
          element={
            <Blog1
              title="A Guide for Parents: Sending Your Child to Study Abroad"
              // firstpara="Deciding to send your child to study abroad might feel a bit overwhelming, but dont worry! Were here to help you understand and make this important decision with confidence. Our tips will make the process easier and open up amazing opportunities for your child future.
              // Parents always want what best for their kids. You work hard and make sacrifices to give them a good life. Sometimes, that means sending them to study in another country, where they can learn and grow on a global stage."
              subtitle="Here are some simple tips to get you ready for your child's study-abroad journey:"
              list1="Understand Their Dreams:"
              listContent1="Listen to your child and understand what they want to achieve. Supporting their goals and dreams is important."
              list2="Learn About Their Plans:"
              listContent2="Find out what your child wants to study and which universities they're interested in. Also, think about the kind of place where they'll be comfortable living."
              list3="Get Expert Help:"
              listContent3="You can talk to experts who know all about studying abroad. They can help with things like visas, money matters, and adjusting to a new culture. Pacific Educational Consultant is a great place to get this kind of help."
              list4="Stay Involved:"
              listContent4="Stay connected with your child and their journey. Show them that you're there for them every step of the way."
              // conclusion="Sending your child to study abroad is a big step, but with the right support, it can be an incredible experience. It's all about helping your child achieve their dreams and giving them the best opportunities."
            />
          }
        />
        <Route
          path="/Blogs2"
          element={
            <Blog1
              title="Studying Abroad Start Your Study Abroad Journey with Pacific Educational Consultant"
              // firstpara="Discover boundless opportunities for Indian students in the international education arena with Pacific Educational Consultant. For over 15 years, we have been a guiding light, helping students explore and pursue educational pathways in esteemed global destinations including the USA, UK, Canada, Australia, New Zealand, Ireland, Singapore, and more."
              subtitle=""
              list1="Simplifying Complex Paths"
              listContent1="Our mission is to demystify the intricate application process and empower students. We introduce them to world-renowned universities and offer programs that transcend convention, giving them an edge in their academic pursuits."
              list2="Booking an Appointment is Easy"
              listContent2="Connect with our experts effortlessly. Visit our nearest Pacific Educational Consultant office in India or opt for the convenience of online interaction from the comfort of your home."
              list3="All Your Answers, One Click Away"
              listContent3="Eligibility criteria, application timelines, costs – we have the answers. Our comprehensive FAQs section provides insights into common queries."
              list4="Application Timeline"
              listContent4="Plan for success. Begin your applications about a year in advance to ensure ample time for research, standardized tests, submission, and acceptance."
              list5="Cost of Studying Abroad"
              listContent5="Costs vary based on factors like destination and program. We assist you in finding part-time work opportunities to manage expenses."
              list6="Study Abroad for Free?"
              listContent6="Certain countries offer free education, and scholarships are available elsewhere to lighten the financial load."
              list7="Work Opportunities for International Students"
              listContent7="Most countries allow part-time work during studies and full-time during breaks. Jobs can help cover daily expenses and enhance your experience."
              list8="Why Choose Pacific Educational Consultant?"
              listContent8="Benefit from two decades of experience at Pacific Educational Consultant. We've guided countless students and processed numerous successful applications."
              // conclusion="Embark on your study abroad journey with confidence. Contact Pacific Educational Consultant today to open doors to a world of knowledge and opportunities."
            />
          }
        />
        <Route
          path="/Blogs3"
          element={
            <Blog1
              title="Choosing a course for studying abroad involves careful steps:"
              firstpara=""
              subtitle=""
              list1="Define goals and interests."
              listContent1="Start by clarifying your academic and personal goals. What subjects interest you? What are your career aspirations? Consider how studying abroad can align with these goals."
              list2="Research Universities and Programs"
              listContent2="Look for universities and colleges that offer programs in your chosen field of study. Research the reputation of these institutions, program curriculum, faculty expertise, and available resources."
              list3="Consider Location"
              listContent3="Think about where you want to study. Consider factors such as language, culture, climate, and proximity to family and friends. Research the cost of living in the chosen location."
              list4="Check Language Requirements"
              listContent4="If the course is taught in a language other than your native language, make sure you meet the language proficiency requirements. Some universities might require language tests like IELTS or TOEFL."
              list5="Review Curriculum and Syllabus"
              listContent5="   Look into the course content and syllabus. Does it cover topics you're interested in? Is the teaching methodology compatible with your learning style."
              list6="Accreditation and Recognition"
              listContent6="Ensure that the university and the course are accredited and recognized internationally. This ensures the quality of education and the degree's validity."
              list7="Financial Considerations"
              listContent7="Research the cost of tuition, living expenses, and available scholarships or financial aid. Consider the overall affordability of studying in your chosen location."
              list8="Career Opportunities"
              listContent8="Explore the potential career opportunities after completing the course. Does the program have a good track record of helping students secure internships or jobs in their field."
              list9="Consult with Advisors"
              listContent9="Talk to your academic advisors, professors, and career counselors. They can provide valuable insights and guidance based on your academic strengths, interests, and goals."
              list10="Student Reviews and Alumni Network"
              listContent10=" Look for student reviews and testimonials about the program and the university. Connecting with alumni can give you a better understanding of the program's impact on their careers."
              // conclusion="Embark on your study abroad journey with confidence. Contact Pacific Educational Consultant today to open doors to a world of knowledge and opportunities."
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog-Page" element={<BlogPage />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path="/study-page" element={<StudyPages />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/Blogs" element={<Blog1 />} />
      </Routes>
      {/* <Blog1/> */}
      {/* <StudyPages/> */}
      {/* <ContactUS/> */}
      {/* <Leadgenerate/> */}
      <Footer />
    </div>
  );
};

export default Pages;
