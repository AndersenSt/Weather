import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deletLocation } from '../actions';
import ListLocations from '../components/ListLocations';

const mapStateToProps =  state => ({
    weather: state
});

const mapDispatchToProps = dispatch => ({
    deletLocation: bindActionCreators(deletLocation, dispatch)
});

  
export default connect(mapStateToProps, mapDispatchToProps)(ListLocations);