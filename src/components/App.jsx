import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import HeaderContainer from '../containers/HeaderContainer';
import ListLocationsContainer from '../containers/ListLocationsContainer';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <Paper className='paper' zDepth={2}>
                    <HeaderContainer />
                    <ListLocationsContainer />
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default App;