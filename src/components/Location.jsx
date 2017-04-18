import React from 'react';

import {ListItem} from 'material-ui/List';
import Delete from 'material-ui/svg-icons/Action/delete';
import {indigo500} from 'material-ui/styles/colors';

class Location extends React.Component {
    handleDelete() {
        this.props.onDelete(this.props.id);
    }
    
    render() {
        const location = this.props.location;
        return (
            <ListItem
                rightIcon={<Delete onClick={() => this.handleDelete()}/>}
                primaryText={`Weather in ${location.name},
                                ${location.sys.country}
                                ${location.main.temp} °C`}
                secondaryText={location.weather.map(e => e.description)}
            />
        );
    }
}

export default Location;