import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../component/Header.css";

const Header = () => {
  return (
    <div>
      {/* HEADER */}
      <header className="header">
        <div className="header__menu">
          <div className="header__menu-icon">
            <img src={require("../../images/logo.png").default} />
          </div>
          <nav className="header__menu-nav">
            <ul>
              <li>
                <a href>Beat Camp</a>
                <div className="header__submenu">
                  <ul>
                    <li>
                      <a className="header__submenu-a" href>
                        Bit Camp Introduction
                      </a>
                    </li>
                    <li>
                      <a className="header__submenu-a" href>
                        Directions
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href>Curriculum</a>
                <div className="header__submenu">
                  <ul>
                    <li>
                      <a className="header__submenu-a" href>
                        Government funding process
                      </a>
                    </li>
                    <li>
                      <a className="header__submenu-a" href>
                        Incumbent Course
                      </a>
                    </li>
                    <li>
                      <a className="header__submenu-a" href>
                        Basic lecture
                      </a>
                    </li>
                    <li>
                      <a className="header__submenu-a" href>
                        General Course
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href>Employment and Startup Support Center</a>
                <div className="header__submenu">
                  <ul>
                    <li>
                      <a className="header__submenu-a" href>
                        Employment and Startup
                      </a>
                    </li>
                    <li>
                      <a className="header__submenu-a" href>
                        Suport Center
                      </a>
                    </li>
                    <li>
                      <a className="header__submenu-a" href>
                        Recruitment Announcement
                      </a>
                    </li>
                    <li>
                      <a className="header__submenu-a" href>
                        Overseas employment{" "}
                      </a>
                    </li>
                    <li>
                      <a className="header__submenu-a" href>
                        Start up
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href>Blog</a>
                <div className="header__submenu">
                  <ul>
                    <li>
                      <a className="header__submenu-a" href>
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href>Mentoring</a>
                <div className="header__submenu">
                  <ul>
                    <li>
                      <a className="header__submenu-a" href>
                        Mentoring
                      </a>
                    </li>
                    <li>
                      <a className="header__submenu-a" href>
                        Find a Mentor
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href>CONTACT US</a>
              </li>
            </ul>
          </nav>
          <div className="header__menu-nav-btn">
            <i className="fas fa-align-justify" id="subnav" />
          </div>
        </div>
      </header>
      {/* menu nav when hover */}
      <section className="nav__menu">
        <div className="nav__menu-title">
          <h5>All Menu</h5>
          <i className="fas fa-times" id="closesubmenu" />
        </div>
        <hr />
        <div className="nav__menu-btn">
          <div className="language">
            <button>Ko</button>
          </div>
          <div className="language">
            <button>En</button>
          </div>
          <div className="singup">
            <button>Sign Up</button>
          </div>
          <div className="login">
            <button>Login</button>
          </div>
        </div>
        <div className="nav__menu-link">
          <div className="item1">
            <h5>Beat Camp</h5>
            <ul>
              <li>
                <a href>Bit Camp Introduction</a>
              </li>
              <li>
                <a href>Directions</a>
              </li>
            </ul>
          </div>
          <div className="item2">
            <h5>Curriculum</h5>
            <ul>
              <li>
                <a href>Government funding process</a>
              </li>
              <li>
                <a href>Incumbent Course</a>
              </li>
              <li>
                <a href>Basic lecture</a>
              </li>
              <li>
                <a href>General Course</a>
              </li>
            </ul>
          </div>
          <div className="item3">
            <h5>Employment and Startup Support Center</h5>
            <ul>
              <li>
                <a href>Employment and Startup Support Center</a>
              </li>
              <li>
                <a href>Recruitment Announcement</a>
              </li>
              <li>
                <a href>Overseas employment and start-up</a>
              </li>
            </ul>
          </div>
          <div className="item4">
            <h5>blog</h5>
            <ul>
              <li>
                <a href>blog</a>
              </li>
            </ul>
          </div>
          <div className="item5">
            <h5>Mentoring</h5>
            <ul>
              <li>
                <a href>Mentoring</a>
              </li>
              <li>
                <a href>Find a Mentor</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contactus">
          <h5>
            <a href>CONTACT US</a>
          </h5>
        </div>
      </section>
      {/* END HEADER */}
    </div>
  );
};

export default Header;
