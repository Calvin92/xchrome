import React from 'react';
import style from './style';

const Footer = (props) => {
  let className = style.footer;
  if (props.className) className += ` ${props.className}`;

  return (
    <footer className={style.footer}>
      <p>O2 Toolbox &copy; <script>document.write(new Date().getFullYear())</script></p>
      <small>Crafted with <span className={style.love}>ღ</span> <a href="//aotu.io" title="凹凸实验室">aotu.io</a></small>
    </footer>
  );
};

Footer.propTypes = {
  className: React.PropTypes.string
};

export default Footer;