import React from 'react';

/* COMPONENTS */
import SongList from './SongList/SongList';
import SongDetail from './SongDetail/SongDetail';

/* STYLESHEET */
import "./App.css";

const App = () => {
    return (
        <div className="ui container grid margin-top" >
            <div className="ui row" >
                <div className="column eight wide" >
                    <SongList />
                </div>

                <div className="column eight wide" >
                    <SongDetail />
                </div>
            </div>
        </div>
    );
}

export default App;