import React from 'react';

/* COMPONENTS */
import SongList from './SongList/SongList';

/* REDUX ACTIONS */
import { selectSong } from '../actions'; // <--- USE {} FOR NAMED INSTANCES

const App = () => {
    return (
        <div className="ui container grid" >
            <div className="ui row" >
                <div className="column eight wide" >
                    <SongList />
                </div>
            </div>
        </div>
    );
}

export default App;