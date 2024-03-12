import React from "react";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import ExamTable from "../Components/ExamTable";
import exam1 from "../Assets/IELTS.png";
import exam2 from "../Assets/PTE.png";
import exam3 from "../Assets/TOEFL.png";
import exam4 from "../Assets/duolingo.webp";
import exam5 from "../Assets/GRE.jpg";
import exam6 from "../Assets/GMAT.png";
import exam7 from "../Assets/SAT-new.png";
import img1 from '../Assets/newcoaching.jpg';
import ScrollToTop from "react-scroll-to-top";
import Sidebar from '../Layouts/Sidebar';
import WhatsappBot from "../Layouts/Whatsappbot";

function Coaching() {
  const IELTSExamPattern = [
    {
      name: "1. Reading Section",
      content: "3 Sections, Time Allotted - 20 mins. for each section.",
    },
    {
      name: "2. Listening Section",
      content: "4 Section, Time Allotted - 30 mins.",
    },
    { name: "3. Speaking Section", content: "Time Allotted - 11 to 15 mins" },
    {
      name: "4. Writing Section",
      content:
        "2 Sections, Time Allotted - 20 mins for 1 section and 40 mins for other section",
    },
    { name: "Total Time", content: "2 hours, 45 minutes" },
    {
      name: "Nature of Exam",
      content: "Paper Based Test (PBT) & Computer Based Test (CBT)",
    },
    { name: "Total Scores", content: "IELTS is out of 9.0 bands." },
  ];

  const IELTSOtherDetails = [
    {
      name: "Website",
      content: "http://www.ieltsidpindia.com/>",
    },
    {
      name: "Registration",
      content: "Online",
    },
    {
      name: "Test Fees",
      content: "INR 17,000",
    },
    { name: "Score Validity", content: "2 Years" },
    {
      name: "Score Reporting",
      content:
        "Score Reporting	Applicants can report their IELTS score to maximum of 5 universities as per the STED RO list free of cost after receiving the IELTS result.",
    },
    {
      name: "Additional Test Score Reporting Fees",
      content: "INR 250 per Institution via post INR 1500 via courier.",
    },
  ];
  const PTEExamPattern = [
    {
      name: "Personal Introduction",
      content:
        "An ungraded 1-minute session for the candidate to record a video sample of his/her academic profile.",
    },
    {
      name: "Speaking & Writing Section (54 -67 minutes)",
      content:
        "Seven different question types to test your speaking and writing skills",
    },
    {
      name: "Reading Section (29 - 30 minutes)",
      content:
        "Five different question types to test your ability to read academic English",
    },
    {
      name: "Listening Section (30 - 43 minutes)",
      content:
        "Eight different question types to test your listening skills using audio & video clips",
    },
    {
      name: "Total Time",
      content: "2 hours",
    },
  ];

  const PTEOtherDetails = [
    {
      name: "Nature of Exam",
      content:
        "Computer Based Test Edition (Online in a Test Centre)/ PTE Academic Online (Online at home)",
    },
    {
      name: "Total Scores",
      content: "PTE score is out of 90 points",
    },
    {
      name: "Registration:",
      content: "Online",
    },
    {
      name: "Links",
      content: "http://pearsonpte.com",
    },
    {
      name: "Test Fee",
      content: "₹ 17,000",
    },
    {
      name: "Score Validity",
      content: "2 Years",
    },
    {
      name: "Score Reporting",
      content:
        "You can send your PTE Academic scores to as many institutions as you choose - there are no additional fees for extra score report",
    },
  ];

  const DuolingoExamPattern = [
    {
      name: "Quick Setup – 5 mins",
      content: "A quick check of your identification and system requirements.",
    },
    {
      name: "Adaptive Test – 45 mins",
      content:
        "This comprises of all 4 language skills – listening, reading, writing, and speaking – which are evaluated based on a fixed algorithm. Test contents differ from candidate to candidate.",
    },
    {
      name: "Video and Writing Sample – 10 mins",
      content:
        "These are two ungraded sections which are shared with the score accepting organizations along with the candidate’s test scores. These are open-ended questions with a choice in each.",
    },
    {
      name: "Total Time",
      content: "1 hour",
    },
    {
      name: "Nature of Exam",
      content: "Computer Based Test (CBT)",
    },
    {
      name: "IELTS Test Fee",
      content: "$59",
    },
  ];

  const DuolingoOtherDetails = [
    {
      name: "Links",
      content: "https://englishtest.duolingo.com/home",
    },
    {
      name: "Score Validity",
      content: "2 Years",
    },
    {
      name: "Score Reporting",
      content:
        "Applicants can report their DET score to any number of score-accepting organizations. The score reporting is entirely free.",
    },
  ];

  const TOEFLExamPattern = [
    {
      name: "Listening Section (41 – 57 minutes)",
      content:
        "3 – 4 lectures, 6 questions per lecture 2 – 3 conversations, 5 questions per conversation",
    },
    {
      name: "Reading Section (54 –72 minutes)",
      content:
        "3 – 4 reading passages, 700 words long 10 questions per passage",
    },
    {
      name: "Writing Section (50 mins)",
      content:
        "2 tasks of writing essay responses based on reading and listening",
    },
    {
      name: "Speaking – 17 mins",
      content:
        "1 independent and 3 integrated speaking tasks about a familiar topic and discussing material that you read & listened to",
    },
    {
      name: "Total Scores",
      content: "Total Scores	TOEFL scores are out of 120 points",
    },
    {
      name: "Total Time",
      content: "2 hours",
    },
  ];

  const TOEFLOtherDetails = [
    {
      name: "Registration",
      content: "Online",
    },
    {
      name: "Nature of Exam",
      content:
        "1. Internet Based Test (iBT) 2. TOEFL iBT® Special Home Edition 3. TOEFL Essentials",
    },
    {
      name: "Links",
      content: "https://www.ets.org/toefl",
    },
    {
      name: "TOEFL Test Fee",
      content: "USD 195 (Avail an exclusive $10 discount with KC!)",
    },
    {
      name: "Frequency of Tests",
      content: "Throughout the year (on weekends)",
    },
    {
      name: "Score Validity",
      content: "2 Years",
    },
    {
      name: "Free Score Reporting",
      content:
        "There is a provision of reporting your TOEFL test scores to a maximum of four universities of your choice, the cost of which is built into the TOEFL test fee you pay.",
    },
    {
      name: "Additional Test Score Reporting Fees",
      content: "USD 20",
    },
  ];

  const GREExamPattern = [
    {
      name: "1. Verbal Reasoning (41 minutes)",
      content: "Two sections with 27 questions each",
    },
    {
      name: "2. Quantitative Reasoning (47 minutes)",
      content: "Two sections with 27 questions each",
    },
    {
      name: "3. Analytical Writing Assessment (30 mins)",
      content: "One essays based on issue",
    },
    {
      name: "Total Scores",
      content: "GRE scores are out of 340",
    },
    {
      name: "Total Time",
      content: "1 hours, 58 minutes",
    },
  ];

  const GREOtherDetails = [
    {
      name: "Registration",
      content: "Online",
    },
    {
      name: "Nature of Exam",
      content: "Computer Based Adaptive Test",
    },
    {
      name: "Links",
      content: "http://www.ets.org/gre",
    },
    {
      name: "GRE Test Fee",
      content: "US $228",
    },
    {
      name: "Frequency of Tests",
      content:
        "Once every 21 days, up to 5 times within a 12 month period from the date of your first test",
    },
    {
      name: "Score Validity",
      content: "5 Years",
    },
    {
      name: "Free Score Reporting",
      content:
        "There is a provision of reporting your GRE test scores to a maximum of four universities of your choice (only available on the test date), the cost of which is built into the GRE test fee you pay.",
    },
    {
      name: "Additional Test Score Reporting Fees",
      content: "US $30",
    },
  ];

  const GMATExamPattern = [
    {
      name: "1. Verbal Reasoning (45 minutes)",
      content: "21 Questions - Arithmetic; Algebra",
    },
    {
      name: "2. Quantitative Reasoning (45 minutes)",
      content: "23 Questions - Critical Reasoning; Reading Comprehension",
    },
    {
      name: "3. Data Insights (45 minutes)",
      content:
        "20 Questions - Multi-Source Reasoning; Table Analysis; Graphics Interpretation; Two-Part Analysis; Data Sufficiency",
    },
    {
      name: "Total Scores",
      content: "1205 to 805",
    },
    {
      name: "Total Time",
      content: "2 hours, 25 minutes",
    },
  ];

  const GMATOtherDetails = [
    {
      name: "Registration",
      content: "Online",
    },
    {
      name: "Nature of Exam",
      content: "Computer Based Adaptive Test",
    },
    {
      name: "Links",
      content: "http://www.mba.com",
    },
    {
      name: "GRE Test Fee",
      content: "US$275",
    },
    {
      name: "Frequency of Tests",
      content:
        "5 times within a 12-month period, but cannot apply more than once in any 16-day period",
    },
    {
      name: "Score Validity",
      content: "5 Years",
    },
    {
      name: "Free Score Reporting",
      content:
        "There is a provision of reporting your GMAT test scores to a maximum of five universities of your choice, the cost of which is built into the GMAT test fee you pay.",
    },
    {
      name: "Additional Test Score Reporting Fees",
      content: "US $35",
    },
  ];

  const SATExamPattern = [
    {
      name: "Reading and Writing (64 minutes)",
      content:
        "1st Module - 25 Operational questions and 2 pretest questions Time Allotted – 32 minutes | 2nd Module - 25 Operational questions and 2 pretest questions Time Allotted - 32 minutes Total Marks – 800",
    },
    {
      name: "Mathematics (70 minutes)",
      content:
        "1st Module - 20 Operational questions and 2 pretest questions Time Allotted - 35 minutes 2nd Module - 20 Operational questions and 2 pretest questions Time Allotted - 35 minutes Total Marks – 800",
    },
    {
      name: "Total Scores",
      content: "SAT scores are out of 1600",
    },
    {
      name: "Total Time",
      content: "2 hours 14 mins (Digital)",
    },
  ];

  const SATOtherDetails = [
    {
      name: "Registration",
      content: "Online/Draft",
    },
    {
      name: "Nature of Exam",
      content: "Digital SAT",
    },
    {
      name: "Links",
      content: "https://www.collegeboard.org/",
    },
    {
      name: "GRE Test Fee",
      content: "US $121.54",
    },
    {
      name: "Frequency of Tests",
      content:
        "SAT General Test - August, October, November, December, March, May & June.",
    },
    {
      name: "Score Validity",
      content: "5 Years",
    },
    {
      name: "Free Score Reporting",
      content:
        "There is a provision of reporting your SAT test scores to a maximum of four universities of your choice until 9 days after the test, the cost of which is built into the SAT test fee you pay.",
    },
    {
      name: "Additional Test Score Reporting Fees",
      content: "US $14",
    },
  ];

  return (
    <div className="coaching-main">
      <div className="coaching-title">Coaching </div>
      {/* <span>IELTS, PTE ,TOEFL iBT, Duolingo English Test, SAT  </span> */}
      <Link to='/contact-us'><Button title="Ask Me" /></Link>
      <div className="coaching-parallax-1">
        <img src={img1} alt="" className="coaching-img" />
      </div>


      <div className="service-exams">
        <div className="exam-topics-main">
          <div className="topic">
            <div className="topic-heading">IELTS</div>
            <div className="topic-subheading">About IELTS</div>
            <div className="about-topic">
              The International English Language Testing System (IELTS) measures
              the language proficiency of individuals who want to study or work
              in countries where English is used as a language of communication.
              IELTS exam is conducted worldwide by British Council, UK and IDP,
              Australia. This test is available in two formats academic and
              general. Academic IELTS -If applying for higher education or
              professional registration in English speaking countries. General
              IELTS - If migrating to Australia, Canada or the UK. One can
              appear for IELTS test as many times as required. It is conducted 4
              -5 times every month. The test score is valid for 2 years.
            </div>
            <div className="sub-topic-subheading">Exam Pattern</div>
            <ExamTable data={IELTSExamPattern} />
            <div className="sub-topic-subheading">Other Details</div>
            <ExamTable data={IELTSOtherDetails} />
          </div>
          <div className="exam-img">
            <img src={exam1} alt="" className="exam1-img" />
          </div>
        </div>

        <div className="exam-topics-main">
          <div className="topic">
            <div className="topic-heading">PTE</div>
            <div className="topic-subheading">About PTE</div>
            <div className="about-topic">
              Pearson Test of English (PTE) is a popular English language test
              for non-native English speakers who are willing to study or to
              immigrate to an English-speaking country. PTE Academic is a
              computer-based English language test aimed at non-native English
              speakers who want to study abroad. This test is conducted by
              Pearson Education and students can appear for PTE academic any
              number of times to prove their English language proficiency.
            </div>
            <div className="sub-topic-subheading">Exam Pattern</div>
            <ExamTable data={PTEExamPattern} />
            <div className="sub-topic-subheading">Other Details</div>
            <ExamTable data={PTEOtherDetails} />
          </div>

          <div className="exam-img">
            <img src={exam2} alt="" className="exam1-img" />
          </div>
        </div>

        <div className="exam-topics-main">
          <div className="topic">
            <div className="topic-heading">Spoken English</div>
            <div className="topic-subheading">About Spoken English</div>
            <div className="about-topic">
              We offer specialized coaching in Spoken English, aiming to enhance
              communication skills for a variety of purposes, including business,
              education, and social interactions. Our program is designed to
              improve fluency, pronunciation, and confidence in English speaking.
            </div>
            <div className="sub-topic-subheading">Exam Pattern</div>
            <ExamTable data={PTEExamPattern} />
            <div className="sub-topic-subheading">Other Details</div>
            <ExamTable data={PTEOtherDetails} />
          </div>

          <div className="exam-img">
            {/* <img src={exam2} alt="" className="exam1-img" /> */}
          </div>
        </div>

        <div className="exam-topics-main">
          <div className="topic">
            <div className="topic-heading"> SAT</div>
            <div className="topic-subheading">About Digital SAT</div>
            <div className="about-topic">
              SAT stands for Scholastic Assessment Test and is required to be
              taken by students applying to undergraduate schools in the USA.
              This test has been designed and developed to test mathematical,
              writing and reading skills of aspirants and their potential to
              match the academic requirements of assessing universities. SAT is
              conducted by the College Board and is used by over 4000 educations
              institutions primarily in the USA and some other leading
              destinations.
            </div>
            <div className="sub-topic-subheading">Exam Pattern</div>
            <ExamTable data={SATExamPattern} />
            <div className="sub-topic-subheading">Other Details</div>
            <ExamTable data={SATOtherDetails} />
          </div>

          <div className="exam-img">
            <img src={exam7} alt="" className="exam1-img" />
          </div>
        </div>

        <div className="exam-topics-main">
          <div className="topic">
            <div className="topic-heading">TOEFL</div>
            <div className="topic-subheading">About TOEFL</div>
            <div className="about-topic">
              TOEFL (Test of English as a Foreign Language) is an English
              language proficiency test that is accepted by more than 11,000
              universities, professional bodies, immigration authorities,
              scholarship agencies & institutions across 150 countries
              worldwide. It is also the most widely accepted English language
              test in the world that is administered in over 4500 test centres
              in over 165+ countries. TOEFL iBT is administered by non-profit
              organization ETS (Educational Testing Service) and measures the
              ability of non-native speakers of English to use and understand
              English as it is spoken, written and listened to in college and
              university settings. iBT stands for Internet Based Test, the most
              common form of TOEFL conducted worldwide, and students can appear
              for TOEFL test any number of times not more than once in a 12-day
              period.
            </div>
            <div className="sub-topic-heading">TOEFL Exam Structure</div>
            <div className="sub-topic-subheading">Exam Pattern</div>
            <ExamTable data={TOEFLExamPattern} />
            <div className="sub-topic-subheading">Other Details</div>
            <ExamTable data={TOEFLOtherDetails} />
          </div>
          <div className="exam-img">
            <img src={exam3} alt="" className="exam1-img" />
          </div>
        </div>

        <div className="exam-topics-main">
          <div className="topic">
            <div className="topic-heading">GMAT</div>
            <div className="topic-subheading">About GMAT</div>
            <div className="about-topic">
              The GMAT is a computer adaptive, business school entrance test
              that is designed to test skills that are most fitting for business
              school aspirants. GMAT is used to assess skills such as analytical
              writing, problem solving skills, critical reasoning skills, logic
              and data sufficiency that are relevant to business programs. GMAT
              is administered by GMAC (Graduate Management Admission Council)
              and is used by over 2000 universities in over 100 countries and is
              tested over 600 centers world over.
            </div>
            <div className="sub-topic-subheading">Exam Pattern</div>
            <ExamTable data={GMATExamPattern} />
            <div className="sub-topic-subheading">Other Details</div>
            <ExamTable data={GMATOtherDetails} />
          </div>
          <div className="exam-img">
            <img src={exam6} alt="" className="exam1-img" />
          </div>
        </div>

        <div className="exam-topics-main">
          <div className="topic">
            <div className="topic-heading">GRE</div>
            <div className="topic-subheading">About GRE</div>
            <div className="about-topic">
              Graduate Record Exam (GRE) is the most commonly required admission
              test for graduate & business schools in the US and some other
              leading study destinations worldwide. Admissions authorities of
              universities use applicants’ GRE test scores, along with their
              academic credentials, to measure their preparedness for their
              master’s studies. GRE is administered by a non-profit organization
              ETS (Educational Testing Service) and is used to assess an
              individual's critical thinking, analytical writing, quantitative
              reasoning, and verbal reasoning abilities. Prospective graduate or
              business school applicants can take GRE once in every 21 days for
              up to five times within any continuous 12-month period.
            </div>
            <div className="sub-topic-subheading">Exam Pattern</div>
            <ExamTable data={GREExamPattern} />
            <div className="sub-topic-subheading">Other Details</div>
            <ExamTable data={GREOtherDetails} />
          </div>
          <div className="exam-img">
            <img src={exam5} alt="" className="exam1-img" />
          </div>
        </div>

        <div className="exam-topics-main">
          <div className="topic">
            <div className="topic-heading">Duolingo</div>
            <div className="topic-subheading">About Duolingo Test</div>
            <div className="about-topic">
              The Duolingo English Test (DET) measures English language
              proficiency of individuals who want to study in countries where
              English is used as a primary language of communication. DET is
              offered to candidates around the globe and can be conveniently
              taken from home. Test slots are available as early as 24-48 hours
              prior, depending on availability
            </div>
            <div className="sub-topic-heading">
              Duolingo Test Exam Structure
            </div>
            <div className="sub-topic-subheading">Exam Pattern</div>
            <ExamTable data={DuolingoExamPattern} />
            <div className="sub-topic-subheading">Other Details</div>
            <ExamTable data={DuolingoOtherDetails} />
          </div>
          <div className="exam-img">
            <img src={exam4} alt="" className="exam1-img" />
          </div>
        </div>




      </div>
      <Link to='/contact-us'><Button title="Ask Me" /></Link>

      <ScrollToTop color="#06a1ab" right="15px" />
      <Sidebar />
      <WhatsappBot />
    </div>
  );
}

export default Coaching;
