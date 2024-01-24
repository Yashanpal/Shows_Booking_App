import React from 'react';

const About = () => {
  return (
    <div className="container mt-5" >
        <div >
      <h2 className="text-center mb-4">About </h2>
      <h5 style={{
              fontWeight: "normal",
              wordSpacing: "0.2em",
              textAlign: "justify",
              lineHeight: "1.5",
            }}>
        Welcome to our sows booking platform! This project was created with the goal of providing users
        with a seamless experience to explore and book tickets for their favorite shows. Whether you're a fan of
        TV shows, movies, or live performances, our platform is designed to make the booking process simple and enjoyable.
     <br></br>
        Our team is passionate about bringing entertainment enthusiasts together and enhancing their overall experience.
        Feel free to explore the available shows, read summaries, and book your tickets hassle-free. We value your
        feedback and aim to continually improve to meet your entertainment needs.
     <br></br>
        Thank you for being a part of our journey. Enjoy the shows!
      </h5>
      </div>
    </div>
  );
};

export default About;
