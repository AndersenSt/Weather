import React from 'react';
import Location from './Location';

class ListLocations extends React.Component {
    render() {
        const weather = this.props.weather;
        return (
            <div>
                {weather.map(location =>
                <Location
                    location={location}
                    key={location.id}
                    id={location.id}
                    onDelete={this.props.deletLocation}
                />)}
            </div>
        );
    }
}

export default ListLocations;

