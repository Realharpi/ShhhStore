import './Footer.css';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (

    <footer className="footer">
      <p>&copy; {currentYear} Shhh Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;