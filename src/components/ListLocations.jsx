import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Location from './Location';
import { deletLocation } from '../actions';

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

const mapStateToProps =  state => ({
    weather: state
});

const mapDispatchToProps = dispatch => ({
    deletLocation: bindActionCreators(deletLocation, dispatch)
});

  
export default connect(mapStateToProps, mapDispatchToProps)(ListLocations);

