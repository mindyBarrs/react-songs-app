/* LIBRARIES */
import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ mySelectedSong }) => {
    if(!mySelectedSong){
        return(
            <div>
                Please select a song...
            </div>
        );
    }

    return(
        <div className="ui message" >
            <h3 className="header" >Details for:</h3>

            <p>
                <b>Title:</b> { mySelectedSong.title }
            </p>

            <p>
                <b>Band:</b> { mySelectedSong.band }
            </p>
            
            <p>
                <b>Duration:</b> { mySelectedSong.duration }
            </p>
        </div>
    );
}

const mapStateToProps = state => {
    return { mySelectedSong: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);