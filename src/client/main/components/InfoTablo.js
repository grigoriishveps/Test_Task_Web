import React from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import mapStateToProps from "./store/mapStateToProps";
import mapDispatchToProps from "./store/mapDispatchToProps";
import closeIcon from "./res/close.png"
const urlPath = "http://localhost:8081"
class InfoTablo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClickCloseButton = this.handleClickCloseButton.bind(this);
    }

    handleClickCloseButton(){
        this.props.closeInfo();
    }

    render(){
        let value = (this.props.giraffes.length / 10 * 100);
        return(
            <div className="infoPage">

                <div>
                    <h1>{value}%</h1>
                    <span>Заполненность вольера</span>
                    <button className="closeInfo" onClick={this.handleClickCloseButton}> <img src={closeIcon} /></button>
                </div>
                <div>
                    <progress value={value} max="100"></progress>
                    <button className="infoButton" > Информация </button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps("InfoTablo"), mapDispatchToProps("InfoTablo")) (InfoTablo);