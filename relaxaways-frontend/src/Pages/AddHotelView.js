import React, { Component } from 'react';
import AddHotelForm from '../../components/AddHotel/AddHotelForm';
import AddHotelReview from '../../components/AddHotel/AddHotelReview';

export default class AddHotelView extends Component {
    state = {
        showFormReview: false,
    };

    onCancelForm = () => {
        this.setState({ showFormReview: false });
    };

    onSubmitForm = () => {
        this.setState({ showFormReview: true });
    };

    render() {
        return (
            <React.Fragment>
                {this.state.showFormReview ? (
                    <AddHotelReview onCancel={this.onCancelForm} />
                ) : (
                        <AddHotelForm onSurveySubmit={this.onSubmitForm} />
                    )}
            </React.Fragment>
        );
    }
}
