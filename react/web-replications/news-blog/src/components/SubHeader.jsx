import {Component} from 'react';

class SubHeader extends Component {
    render() {
        return <div>
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
        </div>;
    }
}

export default SubHeader;