import React from 'react';
import axios from 'axios';
import GiraffeElement from "./GiraffeElement";
import bellImage from "./res/bell.png"
import {nanoid} from "./nanoid";


const urlPath = "http://localhost:8081"

class Aviary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            giraffes:[{id : nanoid(),
                name: "Мотильда",
                gender: 'M',
                weight: 900,
                height: 350,
                color: 'Стандарт',
                diet:'Растительная',
                character:'Кокетка',}
                ],
            editData:{}
        };
        this.handleClickOnAddGiraffe = this.handleClickOnAddGiraffe.bind(this);
        this.handleChangeField = this.handleChangeField.bind(this);
        this.handleSuccessSave = this.handleSuccessSave.bind(this);
    }

    handleClickOnAddGiraffe(){
        this.setState(state=>{
            let a = [...state.giraffes, {
                id : nanoid(),
                name: "Имя",
                gender: '-',
                weight: 0,
                height: 0,
                color: '',
                diet: '',
                character: '',
                isEdit: true,
                status: ""
            }];
            return{giraffes: a,
                editData: {
                    id : nanoid(),
                    name: "Имя",
                    gender: '-',
                    weight: 0,
                    height: 0,
                    color: '',
                    diet: '',
                    character: '',
                    isEdit: true,
                    status: ""
                }
            }});
    }

    dadfsdfsdfdf(){
        axios.put(urlPath+"/api/giraffe/:id", )
            .then(response=>{})
            .catch(response=>{});
    }

    findGiraffe(id){
        let giraffe = this.state.giraffes.filter((item) =>{return item.id===id;});
        console.log(giraffe);
        return giraffe;
    }

    handleSuccessSave(obj){
        this.setState(state => {
            let indexElem = state.giraffes.findIndex((value) =>{
                return obj.id === value.id;
            })
            let girArray = [...state.giraffes];
            girArray[indexElem] = {...obj};
            return {giraffes: girArray};
        })
    }
    handleChangeField( typeField, id, value){

        switch(typeField){
            case "name":
                this.setState({editData:{name:value}});
                break;
            case "gender":
                this.setState({editData:{gender:value}});
                break;
            case "weight":
                this.setState({editData:{weight: value}});
                break;
            case "height":
                this.setState({editData:{height: value}});
                break;
            case "color":
                this.setState({editData:{color:value}});
                break;
            case "diet":
                this.setState({editData:{diet: value}});
                break;
            case "character":
                this.setState({editData:{character: value}});
                break;
        }

    }

    render(){
        let listGiraffe = this.state.giraffes.map((item, index)=>
            <GiraffeElement key={"Aviary"+index} numAviary={this.props.currentAviary} giraffe={item} handleChangeField={this.handleChangeField} handleSuccessSave ={this.handleSuccessSave} />
        );

        return(
            <>
                <div className="inlineBox">
                    <h1> Жирафы </h1>
                    <button className="addButton" onClick={this.handleClickOnAddGiraffe}>+</button>
                </div>
                <div className="giraffeBox">
                    {listGiraffe}
                </div>
            </>
        )
    }

}

//export default connect(mapStateToProps("Aviary"), mapDispatchToProps("Aviary"))(Aviary);