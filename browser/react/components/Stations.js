import React, {Component} from 'react';
import {Link} from 'react-router';

const DUMMY_STATIONS_DATA = [
    { name: '90s Hip Hop' },
    { name: 'Death Metal' },
    { name: 'Classical' }
];

const Stations = (props) => {
    let stationKeys = Object.keys(props.stations)
    console.log(stationKeys)
    return (
        <div>
            <h3>Stations</h3>
            <div className="list-group">
                {
                    stationKeys.map(station => {
                        return (
                            <div className="list-group-item" key={station}>
                                <Link to={`/stations/${station}`}>{station}</Link>
                            </div>
                        );
                    })
                }
            </div>
        </div>)
}

export default Stations
