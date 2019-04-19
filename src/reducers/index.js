/* LIBRARIES */
import { combineReducers } from 'redux';


// STATIC ARRAY OF SONGS
const songReducer = () => {
    return [
        {
            title: 'No Scrubs',
            band: 'TLC',
            duration: '4:05'
        },
        {
            title: 'Save Tonight',
            band: 'Eagle-Eye Cherry ',
            duration: '3:56'
        },
        {
            title: 'Maria Maria',
            band: 'Sanata feat. The Product G&B',
            duration: '4:22'
        },
        {
            title: 'Pompeii',
            band: 'Bastille',
            duration: '3:34'
        }
    ]
};

const selectedSongReducer = (selectdSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectdSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});