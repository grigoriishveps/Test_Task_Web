import React from 'react';
import axios from 'axios';
import {nanoid} from "./nanoid";
import { connect } from 'react-redux';
import mapStateToProps from './store/mapStateToProps';
import mapDispatchToProps from './store/mapDispatchToProps';
import GiraffeElement from "./GiraffeElement";

import LogComp from "./LogComp"
import bellImage from "./res/bell.png"
import plusIcon from "./res/plus.png"
import avatarPhoto from "./res/Avatar.png"
import InfoTablo from "./InfoTablo";


const urlPath = "http://localhost:8081"

class ContentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClickOnAddGiraffe = this.handleClickOnAddGiraffe.bind(this);

    }

    handleClickOnAddGiraffe(){
        this.props.addGiraffe(
             {
                id : nanoid(),
                name: "Имя",
                gender: '-',
                weight: 0,
                height: 0,
                color: '',
                diet: '',
                character: '',
                status: "new",
                photoPath: "images (1)"});
    }

    handleChangeAviary(id){
        axios.get(urlPath+"/api/aviary/" + id)
            .then(response=>{
                console.log(response.data);
                this.props.changeGiraffe([...response.data]);
                this.props.changeAviary(id);
            })

    }

    componentWillMount() {
        axios.get(urlPath+"/api/aviaryCount")
            .then(response=>{
                let arrayAviary=[];
                for(let i = 1; i <= response.data[0].countAviary ;i++)
                    arrayAviary.push(i);
                this.props.addAviary(arrayAviary);
                this.handleChangeAviary(1);
            })
            .catch(response=>{
                console.log("Ошибка выдачи числа")
            });
    }

    render(){
        let listHeaders = this.props.aviaries.map((item)=>
            <button className={"listHeaders " + (this.props.currentNumber == item? "activelistHeader":"")} key={"Вольер" + item} onClick={this.handleChangeAviary.bind(this, item)}>Вольер {item}</button>)
        let listGiraffe = this.props.giraffes.map((item, index)=>
            <GiraffeElement key={"Aviary"+item.id} numAviary={this.props.currentNumber} giraffe={item} handleDelete={this.props.deleteGiraffe}
                             handleSuccessSave ={this.props.saveGiraffe} />
        );
        return(
            <div className="panegiraffe">
                <div className="hat">
                    <div >
                        {listHeaders}
                        <button className="addButton" onClick={this.props.addAviary.bind(this,[this.props.aviaries.length+1])}><img src={plusIcon}/></button>
                    </div>
                    <div className="accountHat">
                        <img className="adMargin" src={bellImage} alt="df" />
                        <img className="adMargin" src={avatarPhoto} />
                        <span> hello@mail.ru </span>
                    </div>
                </div>
                <hr/>
                <div className="inlineBox">
                    <h1> Жирафы </h1>
                    <button className="addGir" onClick={this.handleClickOnAddGiraffe}><img src={plusIcon}/></button>
                </div>
                <div className="giraffeBox">
                    {listGiraffe}
                </div>
                {this.props.visibleInfo && <InfoTablo/>}
                {this.props.visibleLog && <LogComp/>}
                {/*<UploadExample/>*/}
            </div>
        )
    }
}

export default connect(mapStateToProps("ContentPage"), mapDispatchToProps("ContentPage"))(ContentPage);