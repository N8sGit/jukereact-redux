import React, {Component} from 'react';
import Stations from '../components/Stations'
import {connect} from 'react-redux'

// class StationsContainer extends React.Component {
//
//
//     render () {
//     return (
//         <Stations />)
// }}


const convertSongsToStations = function (songsArray) {
    let genres = songsArray.map(song => song.genre)
    genres = Array.from(new Set(genres))

    let obj = {}
    genres.forEach(function (genre) {
        obj[genre] = songsArray.filter(song => song.genre == genre)
    })

    return obj
};


const mapStateToProps = function (state) {
    return {
        stations: convertSongsToStations(state.songs)
    };
};

const mapDispatchToProps = function (dispatch) {
    return {};
}

const StationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Stations);



export default StationsContainer