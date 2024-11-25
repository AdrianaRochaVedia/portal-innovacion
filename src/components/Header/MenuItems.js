import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItems = (props) => {
  const { mobileMenu } = props;
  const [home, setHome] = useState(false);
  const [course, setCourse] = useState(false);
  const [page, setPage] = useState(false);
  const [blog, setBlog] = useState(false);

  const openMobileMenu = (menu) => {
    if (menu === 'home') {
      setHome(!home);
      setCourse(false);
      setPage(false);
      setBlog(false);
    } else if (menu === 'course') {
      setHome(false);
      setCourse(!course);
      setPage(false);
      setBlog(false);
    } else if (menu === 'page') {
      setHome(false);
      setCourse(false);
      setPage(!page);
      setBlog(false);
    } else if (menu === 'blog') {
      setHome(false);
      setCourse(false);
      setPage(false);
      setBlog(!blog);
    }
  };

  const handleClick = (e) => {
    if (mobileMenu) {
      e.preventDefault();
    }
  };

  return (
    <ul>
      <li>
        <Link
          to="/"
          className={`${home ? 'expanded' : ''}`}
          onClick={handleClick}
        >
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link to="/teacher">
          <span>Docentes</span>
        </Link>
      </li>
      <li>
        <Link
          to="/malla"
          className={course ? 'expanded' : ''}
          onClick={handleClick}
        >
          <span>Malla</span>
        </Link>
      </li>
      <li>
        <Link to="/alumni" className={page ? 'expanded' : ''} onClick={handleClick}>
          <span>Alumni</span>
        </Link>
      </li>
      <li>
        <Link
          to="/oportunidades"
          className={blog ? 'expanded' : ''}
          onClick={handleClick}
        >
          <span>Empresas</span>
        </Link>
      </li>
      <li>
        <Link to="/sce">
          <span>Sociedad Científica</span>
        </Link>
      </li>
      <li>
        <Link to="/centro">
          <span>Centro</span>
        </Link>
      </li>
      <li>
        <Link to="/news">
          <span>Noticias</span>
        </Link>
      </li>
      <li>
        <Link to="/blog-1">
          <span>Blog</span>
        </Link>
      </li>
    </ul>
  );
};
export default MenuItems;
