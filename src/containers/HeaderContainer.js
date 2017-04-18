import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';
import Header from '../components/header';

const mapDispatchToProps = dispatch => ({
    fetchWeather: bindActionCreators(fetchWeather, dispatch)
});

export default connect(null, mapDispatchToProps)(Header);