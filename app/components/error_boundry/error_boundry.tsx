import * as React from 'react';
import ErrorBox from '../error';

export default class ErrorBoundry extends React.Component {

    state = {
        hasError: false,
    };

    componentDidCatch(){
        this.setState({hasError:true});
    }

    render(){
        if(this.state.hasError){
            return <ErrorBox />
        }

        return this.props.children;
    }
}
