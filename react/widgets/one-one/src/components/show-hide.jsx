import { Component } from "react";
import '../styles/show-hide.scss'

class ShowHide extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hide Me",
            buttonText: 'Hide'
        }
    }

    hideMessage = () => {
        this.setState(prevState => ({
            message: prevState.message ? '' : 'Hide Me',
            buttonText: prevState.message ? 'Show' : 'Hide'
        }));
    }

    render() {
        return (
            <div className="show-hide-widget">
                <h2>Show/Hide Toggle Widget</h2>
                <button onClick={this.hideMessage}>{this.state.buttonText}</button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default ShowHide;