import React from 'react';



export default class PlaceHolder extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            src: ''
        };
    }

    componentDidMount() {
        var src = '';
        if (!this.props.src) {
            src = ''
        } else {
            src = this.props.src;
        }
        this.setState({src});
    }

    render() {
        return (
            <div>
                <h1>Random HTML element</h1>
            </div>
            )
    }
}
