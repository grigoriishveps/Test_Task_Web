import * as actions from "./action"

export function actionChangeAviary(value) {
    return {
        type: actions.CHANGE_AVIARY,
        numAviary: value
    };
}

export function actionChangeName(value) {
    return {
        type: actions.CHANGE_NAME,
        name: value
    };
}

export function actionChangeColor(value) {
    return {
        type: actions.CHANGE_COLOR,
        color: value
    };
}

export function actionChangeHeight(value) {
    return {
        type: actions.CHANGE_HEIGHT,
        height: value
    };
}
export function actionChangeWeight(value) {
    return {
        type: actions.CHANGE_WEIGTH,
        weight: value
    };
}
export function actionChangeGender(value) {
    return {
        type: actions.CHANGE_GENDER,
        gender: value
    };
}
export function actionChangeDiet(value) {
    return {
        type: actions.CHANGE_DIET,
        diet: value
    };
}
export function actionChangeCharacter(value) {
    return {
        type: actions.CHANGE_CHARACTER,
        character: value
    };
}
export function actionAddAviary(value) {
    return {
        type: actions.ADD_AVIARY,
        value: value
    };
}
export function actionAddGiraffe(value) {
    console.log("dj", value);
    return {
        type: actions.ADD_GIRAFFE,
        newGiraffe: value
    };
}
export function actionChangeGiraffe(value) {

    return {
        type: actions.CHANGE_GIRAFFES,
        giraffes: value
    };
}
export function actionSaveGiraffe(value) {
    return {
        type: actions.SAVE_GIRAFFE,
        giraffe: value
    };
}
export function actionDeleteGiraffe(value) {
    return {
        type: actions.DELETE_GIRAFFE,
        id: value
    };
}
export function closeLog() {
    return {
        type: actions.CLOSE_LOG,
         value: false
    };
}
export function closeInfo() {
    return {
        type: actions.CLOSE_INFO,
        value: false
    };
}

export function openLog() {
    return {
        type: actions.OPEN_LOG,
        value: true
    };
}
export function openInfo() {
    return {
        type: actions.OPEN_INFO,
        value: true
    };
}

