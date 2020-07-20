import React, {useState} from 'react';

import axios from 'axios';
import venus_mars from "./res/venus-mars.png";
import weightGir from "./res/weight.png"
import scaleHeight from "./res/scale.png"
import imgGiraffe from "./res/zhiraf.jpg"
import pencilIcon from "./res/pencil.png"
import trashIcon from "./res/trash.png"
import {nanoid} from "./nanoid";
const urlPath = "http://localhost:8081"

class GiraffeElement extends React.Component {
    constructor(props) {
        super(props);
        let info = {};
        if (props.giraffe.name === 'Имя') {
            this.state = {
                editData: Object.assign({}, props.giraffe),
                isEdit: true,
                status: "",
                isNew: true,
                file: ''
            }
        } else {
            this.state = {
                editData: Object.assign({}, props.giraffe),
                isEdit: false,
                status: "",
                file: ''
            };
        }

        this.handleClickEditButton = this.handleClickEditButton.bind(this);
        this.handleClickDeleteButton = this.handleClickDeleteButton.bind(this);
        this.handleClickSave = this.handleClickSave.bind(this);


        this.handleFileChange = (event) => {
            const files = event.target.files
            if (event.target.files.length === 0 || event.target.files == undefined) return
            this.setState({file: event.target.files});

            let sendFiles = async () => {
                console.log('file', files[0].name);
                let formData = new FormData();
                formData.append('file', files[0]);
                const {data} = await axios.post('/uploadImage', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                if (data.success) {
                    this.setState(state => {
                        return {editData: { ...state.editData, photoPath: files[0].name}}
                    })
                    console.log("success")
                }
            }
            sendFiles();
        }
    }
    handleClickSave(){
        //<div><a href = "#"><span></span></a> <img src ="" /> <span>grigorii.shveps@gmail.com</span></div>

        if(this.state.isNew) {
            axios.post(urlPath + "/api/giraffe", {
                ...this.state.editData,
                numAviary: this.props.numAviary
            })
                .then(response => {
                    console.log(response);
                    this.setState({
                        isEdit: false,
                        isNew:false,
                        status: response.status
                    })
                    this.props.handleSuccessSave(this.state.editData);
                })
                .catch(response => {
                    console.log(response);
                    this.setState({
                    status: response})
                });
        }
        else{
            let sendObj = {
                ...this.state.editData,
                numAviary: this.props.numAviary
            }
            console.log(sendObj);
            axios.put(urlPath + "/api/giraffe/" + this.props.giraffe.id, sendObj ).then(response => {
                    //console.log(response);
                    this.setState({
                        isEdit: false,
                        status: response.status
                    })
                    this.props.handleSuccessSave(this.state.editData);
                })
                .catch(response => {
                    console.log(response);
                    this.setState({status: response})
                });
        }
    }

    handleClickEditButton(){
        this.setState({isEdit:true});
    }

    handleClickDeleteButton(){
        axios.delete(urlPath+"/api/giraffe/"+this.props.giraffe.id)
            .then(response=>{
                console.log("Успешное удаление");
                this.props.handleDelete(this.props.giraffe.id)
            })
            .catch(response=>{
                console.log("Ошибка удаления");
            });
    }

    handleChangeField( typeField,  event){
        const value = event.target.value;
        if(value.length<12) {
            let newObj = {}
            newObj[typeField] = value;
            this.setState(state => {
                return {editData: {...state.editData, ...newObj}}
            });
        }
    }

    render(){
        return(
        <div className="giraffeCard">
            <div className="dws-menu">
                <a href="#">...</a>
                <div>
                    <button onClick={this.handleClickEditButton}><img src={pencilIcon}/><span>Редактировать</span></button>
                    <button onClick={this.handleClickDeleteButton}><img src={trashIcon}/><span>Удалить</span></button>
                </div>
            </div>

            {!this.state.isEdit ? <img className="photoImg"  src={"../../../../uploads/"+this.props.giraffe.photoPath} alt="Нет"/>
                :   <label  htmlFor="file"><input type="file" accept="image/*" name="photo" id="file" hidden onChange={this.handleFileChange}/><img className="photoImg" src={"../../../../uploads/"+this.state.editData.photoPath} alt="fsdf"/></label>}
            {/*{this.props.giraffe.id}*/}
            {!this.state.isEdit ?<h3 className="name"> {this.props.giraffe.name} </h3>
                :<input type="text" className="inputName" value={this.state.editData.name} onChange={this.handleChangeField.bind(this, "name")} />}

            <div id="boxIcon">
                <img src={venus_mars} alt="Пропало"/>
                <img src={weightGir} alt="Пропало"/>
                <img src={scaleHeight} alt="Пропало"/>
            </div>
            <div id="boxChar">
                {!this.state.isEdit ?
                    <><span>{this.props.giraffe.gender}</span>
                    <span>{this.props.giraffe.weight}</span>
                    <span>{this.props.giraffe.height}</span></>
                    : <><input type="text" className="" value={this.state.editData.gender} onChange={this.handleChangeField.bind(this, "gender")} />
                    <input type="text" className="" value={this.state.editData.weight} onChange={this.handleChangeField.bind( this, "weight")} />
                    <input type="text" className="" value={this.state.editData.height} onChange={this.handleChangeField.bind( this, "height")} /></>
                    }
            </div>
            <div>
                <div className="characteristic">
                     <span><b>Цвет: </b> </span>
                        {!this.state.isEdit ?<span>{this.props.giraffe.color}</span>
                            :<input type="text" className="charField" value={this.state.editData.color} onChange={this.handleChangeField.bind(this, "color")} />}
                </div >
                <div className="characteristic">
                    <span><b>Диета: </b></span>
                        {!this.state.isEdit ?<span>{this.props.giraffe.diet}</span>
                            :<input type="text" className="charField" value={this.state.editData.diet} onChange={this.handleChangeField.bind( this, "diet")} />}
                </div>
                <div className="characteristic">
                    <span><b>Характер: </b></span>
                        {!this.state.isEdit ?<span>{this.props.giraffe.character}</span>
                            :<input type="text" className="charField" value={this.state.editData.character} onChange={this.handleChangeField.bind( this, "character")} />}
                </div>
            </div>

            {this.state.isEdit && <button className="saveButton" onClick={this.handleClickSave}> Coхранить </button>}
            {this.state.status==="" && this.state.status}
        </div>
        )
    }
}
//export default connect(mapStateToProps("GiraffeElement"), mapDispatchToProps("GiraffeElement"))(GiraffeElement);
export default GiraffeElement;