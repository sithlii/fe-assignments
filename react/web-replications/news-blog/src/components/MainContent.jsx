import {Component} from 'react';

class Content extends Component {
    render() {
        return <div>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
        </div>;
    }
}

class MainContent extends Component {
    render() {
        return <Content 
            title={this.props.title} 
            description={this.props.description} 
        />;
    }
}

export default MainContent;
