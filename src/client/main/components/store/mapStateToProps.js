function mapStateToProps(component) {
    switch (component) {
        case "ContentPage": {
            return function (state) {
                //console.log(...state.giraffe);
                return {
                    giraffes: [...state.giraffes],
                    aviaries: [...state.aviaries],
                    currentNumber: state.currentNumber,
                    visibleInfo: state.visibleInfo,
                    visibleLog: state.visibleLog
                };
            }
        }
        case "GiraffeElement": {
            return function (state) {
                return {
                    editData: state.editData,
                    isNew: state.isNew
                };
            }
        }
        case "InfoTablo": {
            return function (state) {
                return {
                    giraffes: [...state.giraffes]
                };
            }
        }
        default: return undefined;
    }
}

export default mapStateToProps;