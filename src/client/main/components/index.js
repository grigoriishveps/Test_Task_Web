import React, { Suspense, useState } from 'react';
import { hot } from 'react-hot-loader/root';
// import UploadExample from './uploadExample';
import "./App.css"
import "./index.css"
import MenuComp from "./MenuComp"

function App() {
    
    return (
        <div>
            {/*     <UploadExample/>*/}
            <MenuComp/>
        </div>
    )
}



export default hot(App);