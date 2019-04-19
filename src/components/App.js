import React from 'react';

/* COMPONENTS */
import SongList from './SongList/SongList';

/* REDUX ACTIONS */
import { selectSong } from '../actions'; // <--- USE {} FOR NAMED INSTANCES

const App = () => {
    return (
        <div>
           <SongList />
        </div>
    );
}

export default App;