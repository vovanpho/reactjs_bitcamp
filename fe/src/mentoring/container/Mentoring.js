import React from "react";
import "../component/Mentoring.css";

function Mentoring(props) {
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
    <div id="mentoring">
      <div id="mentoring_title_box">
      <img
          src={require("../../images/title_05.jpg").default}
          alt=""
        />
        <p className="font25 bold">Mentoring</p>
      </div>
      <div id="mentoring_cm">
        <div className="mentoring_cm">
          <h1 className="font20 bold">Mentoring</h1>
          <div className="result_filter">
            <div className="bar_search">
              <button id="open_modal_search" onClick={handleOpenModelSearch}>
                <i className="fas fa-search" />
              </button>
            </div>
            <ul className="content_result">
              <li className="preparing">preparing</li>
            </ul>
          </div>
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

export default Mentoring;
