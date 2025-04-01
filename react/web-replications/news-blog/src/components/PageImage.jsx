import {Component} from 'react';
import '../styles/PageImage.scss';

class PageImage extends Component {
    render() {
        return <div className="image-container">
            <img 
                src={this.props.image}
                alt={this.props.alt} 
                className="wiki-image"
            />
        </div>;
    }
}

export default PageImage;