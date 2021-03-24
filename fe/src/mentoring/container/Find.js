import React from "react";

import "../component/Find.css";

function Find(props) {
  return (
    <div id="wapper">
      <div id="container_title_box">
        <img
          src="https://www.bitcamp.co.kr/theme/basic/img/title_05.jpg"
          alt
          className="full"
        />
        <p className="font25 bold">Find a mentor</p>
      </div>
      <div id="div_cm">
        <div className="container_cm">
          <nav className="container_nav_filter">
            <div className="nav_filter_center">
              <p className="font20 bold">Field of expertise</p>
              <ul>
                <li>
                  <a className="active">All</a>
                </li>
                <li>
                  <a>IT education</a>
                </li>
                <li>
                  <a>Employment</a>
                </li>
                <li>
                  <a>Founded</a>
                </li>
                <li>
                  <a>Overseas employment</a>
                </li>
                <li>
                  <a>Overseas startup</a>
                </li>
              </ul>
            </div>
          </nav>
          <h1 className="font20 bold">Find a Mentor</h1>
          <div className="result_filter">
            <div className="bar_search">
              <button id="open_modal_search">
                <i className="fas fa-search" />
              </button>
            </div>
            <ul className="content_result">
              <li className="preparing">preparing</li>
              {/* <li class="item">
      <div class="item_box">
        <div class="div_img">
          <a>
            <img
              src="https://www.bitcamp.co.kr/data/file/blog/thumb-2038919246_iCclLjnK_972202b3e4ab9316f81dab9ebf38574a38b2aa6c_380x200.png"
              alt=""
              title=""
            />
          </a>
        </div>
        <div class="div_info">
          <p class="info_title font16 bold">
            <a 
              title="[Notice] Basic Lecture (Java Lecture/Python Lecture/Data Structure Algorithm Lecture)"
              >[Notice] Basic Lecture (Java Lecture/Python Lecture/Data Structure Algorithm Lecture)</a
            >
          </p>
          <div class="info_disc font13">
            <p class="mr_bt_10">Regular special lectures for beginners Hello. Beginning in 2021, a proposal for regular special lectures for beginners..</p>
            <p>
              <span>Master</span>
              <span>
                  <i class="far fa-clock"></i>12-15
              </span>
              <span>
                  <i class="far fa-eye"></i>832
              </span>
            </p>
          </div>
          <a class="Rm font13">Read more +</a>
        </div>
      </div>
    </li> */}
            </ul>
          </div>
          {/* <div class="pagination">
  <a href="#">&laquo;</a>
  <a href="#" class="active">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">&raquo;</a>
</div> */}
          <div className="modal_search_wrap">
            <fieldset>
              <div className="title_search">
                <h4>Search</h4>
                <button id="close_modal">
                  <i className="fas fa-times" />
                </button>
              </div>
              <form className="form_search">
                <select name id>
                  <option value>Mentor name</option>
                </select>
                <div className="_input">
                  <input
                    type="search"
                    placeholder="Please enter a search item"
                  />
                  <button>
                    <i className="fas fa-search" />
                  </button>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Find;
