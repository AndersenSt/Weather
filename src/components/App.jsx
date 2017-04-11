import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import Header from './Header';
import ListLocations from './ListLocations';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <Paper className='paper' zDepth={2}>
                    <Header />
                    <ListLocations />
                </Paper>
            </MuiThemeProvider>
        );
    }
}

export default App;