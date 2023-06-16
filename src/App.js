import './Reset.css';
import './App.scss';

import React, { Component } from 'react';
import {Presentation} from "./Components/Presentation/Presentation";
import {LogementsList} from "./Components/LogementsList/LogementsList.js";
import LogementsJSON from "./Json/Logements.json";

class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.Logemements = LogementsJSON;
    }



    render()
    {

        return (
            <div className="App">

                <div className="Container">
                    <Presentation />
                    <LogementsList Logements={this.Logemements}/>
                </div>

            </div>
        );
    }
}

export default App;
