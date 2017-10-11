import * as React from 'react';
import HomePresentation from './presentations/home';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import {MainHomeAction} from './actions/main.action';

class HomeContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentWillMount() {
        const {getMainHome} = this.props;
        getMainHome('Test');
    }
    
    render() {
        const {home} = this.props;
        return <HomePresentation />;
    }
}

const mapStateToProps = (state) => {
    return {
        home: state.home
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMainHome: text => dispatch(MainHomeAction(text))
    }
}

const Home = withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));
export default Home;