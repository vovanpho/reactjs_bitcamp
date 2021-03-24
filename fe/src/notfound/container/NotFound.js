import { red } from "@material-ui/core/colors";
import React, { Component } from "react";

class NotfoundPage extends Component {
  render() {
    return (
      <div
        className="panel panel-info"
        style={{ backgroundColor: "red", paddingTop: "300px" }}
      >
        <div className="panel-heading">
          <h3 className="panel-title">PAGE NOT FOUND</h3>
        </div>
        <div className="panel-body">
          {/* <img src="images/404.jpg" alt="PAGE NOT FOUND" /> */}
        </div>
      </div>
    );
  }
}

export default NotfoundPage;
