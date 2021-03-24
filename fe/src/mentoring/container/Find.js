import React from "react";
import { Link } from "react-router-dom";
import "../component/Find.css";

function Find(props) {
  const handleOpenModelSearch =()=>{
    const modalSearchWrap = document.querySelector(".modal_search_wrap")
    modalSearchWrap.style.display = "block";
    // window.addEventListener("click", function (event) {
    //   if (event.target == document.querySelector(".modal_search_wrap")) {
    //     modalSearchWrap.style.display = "none";
    //   }
    // });
  };

  const handleCloseModelSearch =()=>{
    const modalSearchWrap = document.querySelector(".modal_search_wrap");
    modalSearchWrap.style.display = "none";
  };
  return (
    <div id="mentor">
      <div id="mentor_title_box">
      <img
          src={require("../../images/title_05.jpg").default}
          alt=""
        />
        <p className="font25 bold">Find a mentor</p>
      </div>
      <div id="mentor_cm">
        <div className="mentor_cm">
          <nav className="mentor_nav_filter">
            <div className="nav_filter_center">
              <p className="font20 bold">Field of expertise</p>
              <ul>
                <li>
                  <Link to="/find" className="active">All</Link>
                </li>
                <li>
                  <Link to="/find">IT education</Link>
                </li>
                <li>
                  <Link to="/find">Employment</Link>
                </li>
                <li>
                  <Link to="/find">Founded</Link>
                </li>
                <li>
                  <Link to="/find">Overseas employment</Link>
                </li>
                <li>
                  <Link to="/find">Overseas startup</Link>
                </li>
              </ul>
            </div>
          </nav>
          <h1 className="font20 bold">Find a Mentor</h1>
          <div className="result_filter">
            <div className="bar_search">
              <button id="open_modal_search" onClick={handleOpenModelSearch}>
                <i className="fas fa-search" />
              </button>
            </div>
            <ul className="content_result">
              <li className="preparing">preparing</li>
              {/* <li class="item">
      <div class="item_box">
        <div class="div_img">
          <Link>
            <img
              src="https://www.bitcamp.co.kr/data/file/blog/thumb-2038919246_iCclLjnK_972202b3e4ab9316f81dab9ebf38574a38b2aa6c_380x200.png"
              alt=""
              title=""
            />
          </Link>
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
          <a class="Rm font13">Read more +</Link>
        </div>
      </div>
    </li> */}
            </ul>
          </div>
          {/* <div class="pagination">
  <Link to="#">&laquo;</Link>
  <Link to="#" class="active">1</Link>
  <Link to="#">2</Link>
  <Link to="#">3</Link>
  <Link to="#">&raquo;</Link>
</div> */}
          <div className="modal_search_wrap">
            <fieldset>
              <div className="title_search">
                <h4>Search</h4>
                <button id="close_modal" onClick={handleCloseModelSearch}>
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
