import React from 'react';

const Footer = () => {
  let footerStyle = {
    position: "fixed",
    bottom: "0",
    width: "100%",
    backgroundColor: "#343a40", 
    color: "white",
    textAlign: "center",
    padding: "10px",
  };

  return (
    <div className='bg-dark text-light mt-5 py-3' style={footerStyle}>
      <footer className="text-center my-3">
        Copyright &copy; ShowsApp.com
      </footer>
    </div>
  );
};

export default Footer;
