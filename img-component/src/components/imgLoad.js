import React from 'react';
import Spinner from './placeHolder';

export default class LoadImage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            src: ''
        }
    }

    componentDidMount() {
        const image = new Image();
        console.log(image);
        image.src = this.props.src;
        image.onload = () => {
            this.setState({
                src: image.src,
                isLoading: false
            });
            if (this.props.onLoad) {
                this.props.onLoad(image);
            }
        };
        image.onerror = (err) => {
          console.log('sdasdsa');
            this.setState({
                src: '',
                isLoading: false
            });
            if (this.props.onError) {
              console.log(err);
                this.props.onError(err);
            }
        }
    }

    render() {

        if (this.state.isLoading) {
          if(this.props.loaderHTMl){
            return (
                <div  dangerouslySetInnerHTML={{__html: this.props.loaderHTMl}}></div>
            );
          }else{
            return (
                <Spinner/>
            );
          }
            
        } else {
            return (
                <img className='lt-image' src={this.state.src} alt={this.props.alt} {...this.props}/>
            );
        }
    
    }
}