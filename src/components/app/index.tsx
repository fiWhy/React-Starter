import * as React from 'react';

export default class App extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}