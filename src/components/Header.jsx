import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        const city = this.state.inputValue;
        this.props.fetchWeather(city);
        this.setState({ inputValue: "" });
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        return (
            <header className='header'>
                <form>
                    <input
                        placeholder='Get forecast in your city'
                        className='header-input'
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    />
                    <RaisedButton
                        type='sub'
                        label='ok'
                        primary={true}
                        onClick={this.handleClick}
                    />
                </form>
            </header>
        );
    }
}

export default Header;