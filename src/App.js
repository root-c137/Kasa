import './Reset.css';
import './App.scss';

import React, { Component } from 'react';
import {Presentation} from "./Components/Presentation/Presentation";
import {Gallery} from "./Components/Gallery/Gallery";
import LogementsJSON from "./Json/Logements.json";

class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.Logemements = LogementsJSON;
    }

    componentDidMount() {

        console.log(LogementsJSON);

    }


    render()
    {

        return (
            <div className="App">

                <div className="Container">
                    <Presentation />
                    <Gallery Logements={this.Logemements}/>
                </div>

            </div>
        );
    }
}

export default App;
