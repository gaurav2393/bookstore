import React from "react";
import ReactDOM from "react-dom";
import "../css/styles.css";
import BookStore from "./bookStore";

class Main extends React.Component {
    render(){
        return(
            <BookStore />
        );
    }
}
ReactDOM.render(<Main />, document.getElementById("root"));