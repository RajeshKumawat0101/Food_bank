import React from 'react'
import Cards from '../../Page/CardsPage/Cards';
const Contact=()=>{
  return (
      <>
      <div className='about-team'>
        <h2>facalty of CSE Deparment</h2><br />
        <div className='team-cards-container'>
          <Cards keyPoint="Subhash$123" Name='Rajesh kumawat' Description='Rajesh Kumawat is a third-year Computer Science student at the National Institute of Technology Patna. He possesses a strong understanding of computer science principles and their societal impact. Rajesh excels in frontend development, particularly in ReactJS.' />
          <Cards keyPoint="Subhash$123" Name='Subhash Kumawat' Description='Subhash Kumawat, also from Jaipur, is a dedicated student at the National Institute of Technology Patna pursuing Computer Science and Engineering. Subhash brings valuable skills to our team and is passionate about frontend development, contributing innovative ideas to our projects.' />
          <Cards keyPoint="Subhash$123" Name='Nayandeep Jain' Description='Nayandeep Jain, hailing from Jaipur, is a versatile full-stack MERN developer. Pursuing Computer Science and Engineering at the National Institute of Technology Patna, Nayandeep expertise in both frontend and backend development ensures robust and scalable solutions for our projects.' />
          <Cards keyPoint="Subhash$123" Name='Abhishek Kumawat' Description='Abhishek Kumawat is a proficient frontend developer with a keen interest in machine learning. As a member of our team, Abhishek brings in-depth knowledge of computer science subjects, which enriches our project discussions and outcomes.' />
        </div>
      </div>
      </>
  );
}

export default Contact;
