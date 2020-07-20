import React from 'react';
import axios from 'axios';
import closeIcon from "./res/close.png"
import {connect} from "react-redux";
import mapStateToProps from "./store/mapStateToProps";
import mapDispatchToProps from "./store/mapDispatchToProps";

const urlPath = "http://localhost:8081"
class LogComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{ data:"Июль",
                action : "Обновление",
                name: "Боря",
                status: "Выполнено"
            },
            { data:"20 апреля",
                action : "Новый Жираф",
                name: "Инокентий",
                status: "Ожидается"
            },
            { data:"20 апреля 2020",
                action : "Редактировать",
                name: "Шнур",
                status: "Ожидается"
            },
            { data:"15 апреля 2020",
                action : "Удалить",
                name: "Ракета",
                status: "Ожидается"
            }]
        };
        this.handleClickCloseButton = this.handleClickCloseButton.bind(this);
    }

    handleClickCloseButton(){
        this.props.closeLog();
    }

    render(){
        let info = this.state.data.map((item)=> <><h6>{item.data}</h6><h6>{item.action}</h6><h6>{item.name}</h6><h6>{item.status}</h6></>
        )
        return(
            <div className="logComp">
                <div className="logHead">
                    <h3> Обновления </h3>
                    <button onClick={this.handleClickCloseButton}> <img src={closeIcon}/></button>
                </div>
                <div className="logBody">
                    <h5>Дата</h5>
                    <h5>Действие</h5>
                    <h5>Жираф</h5>
                    <h5>Статус</h5>
                    {info}
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps("LogComp"), mapDispatchToProps("LogComp"))(LogComp);