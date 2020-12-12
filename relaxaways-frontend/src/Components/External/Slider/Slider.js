import React, {Component} from "react";
import SliderItem from "./SliderItem";


class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 1
        }
    };

    onCloseModal(event) {
        if (event != undefined) {
            event.preventDefault();
        }
    }

    onPrev = (event) => {
        if (event != undefined) {
            event.preventDefault();
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
        }));
    }

    onNext = (event) => {
        if (event != undefined) {
            event.preventDefault();
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }));
    }

    render() {
        if (this.props.images == null) {
            return false;
        }

        return (
            <SliderItem hasNext={this.state.currentIndex + 1 < this.props.images.length}
                        hasPrev={this.state.currentIndex > 0}
                        onNext={this.onNext}
                        onPrev={this.onPrev}
                        onCloseModal={this.onCloseModal}
                        src={this.props.images[this.state.currentIndex]}/>
        )
    }
}

export default Slider;