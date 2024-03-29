/* LIBRARIES */
import React from 'react';
import { connect } from 'react-redux';

/* REDUX ACTION */
import { selectSong } from './../../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={ song.title } >
                    <div className="right floated content" >
                        <button 
                            className="ui violet button" 
                            onClick={ () => this.props.selectSong(song) } 
                        >
                            Select
                        </button>
                    </div>

                    <div className="content" >
                        { song.title }
                    </div>
                </div>
            );
        });
    }
    
    render() {
        console.log(selectSong);
        return (
            <div className="ui divided list" >
                { this.renderList() }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        songs: state.songs 
    };
}

export default connect(mapStateToProps, {
    selectSong
})(SongList);