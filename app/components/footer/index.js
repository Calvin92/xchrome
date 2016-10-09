import React from 'react';
import style from './style';

const Footer = (props) => {
  let className = style.footer;
  if (props.className) className += ` ${props.className}`;

  const thisYear = new Date().getFullYear();

  return (
    <footer className={className}>
      <p>O2 Toolbox &copy; {thisYear}</p>
      <p>Crafted with <span className={style.love}>ღ</span> <a href="https://aotu.io" title="凹凸实验室" target="_blank" style={{color: '#888800'}}>aotu.io</a></p>
    </footer>
  );
};

Footer.propTypes = {
  className: React.PropTypes.string
};

export default Footer;