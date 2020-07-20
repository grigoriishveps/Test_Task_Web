import { bindActionCreators } from 'redux';
import * as actionCreator from './actionCreator';


function mapDispatchToProps(component) {
    switch (component) {
        case "ContentPage": return function (dispatch) {
            return {
                changeAviary: bindActionCreators(actionCreator.actionChangeAviary, dispatch),
                addAviary: bindActionCreators(actionCreator.actionAddAviary, dispatch),
                changeGiraffe: bindActionCreators(actionCreator.actionChangeGiraffe, dispatch),
                addGiraffe: bindActionCreators(actionCreator.actionAddGiraffe, dispatch),
                saveGiraffe: bindActionCreators(actionCreator.actionSaveGiraffe, dispatch),
                deleteGiraffe: bindActionCreators(actionCreator.actionDeleteGiraffe, dispatch)
            };
        };
        case "Giraffes": return function (dispatch) {
            return {
                //change_value_2: bindActionCreators(action_2, dispatch)
            };
        };

        case "LogComp":return function (dispatch){
            return {
                closeLog: bindActionCreators(actionCreator.closeLog, dispatch),
                openLog: bindActionCreators(actionCreator.openLog, dispatch)
            };
        }
        case "InfoTablo":return function (dispatch){
            return {
                closeInfo: bindActionCreators(actionCreator.closeInfo, dispatch),
                //deleteGiraffe: bindActionCreators(actionCreator.actionDeleteGiraffe, dispatch)
            };
        }
        default: return undefined;
    }
}

export default mapDispatchToProps;