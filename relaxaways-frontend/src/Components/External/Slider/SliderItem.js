import React, { Component } from 'react';
import Notification from '../../Notification/Notification';

class SliderItem extends Component {
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 27) this.props.onCloseModal(e);

    if (e.keyCode === 37 && this.props.hasPrev) this.props.onPrev(e);

    if (e.keyCode === 39 && this.props.hasNext) this.props.onNext(e);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.src == null && (
          <div>
            <Notification type={'warning'} text={'Sorry no image provided'} />
          </div>
        )}

        {this.props.src != null && (
          <div className={'gallery-modal__wrapper'}>
            {this.props.hasPrev && (
              <a href="#" className="modal-prev" onClick={this.props.onPrev}>
                &lsaquo;
              </a>
            )}
            {this.props.hasNext && (
              <a href="#" className="modal-next" onClick={this.props.onNext}>
                &rsaquo;
              </a>
            )}
            <img src={this.props.src} className={'gallery-modal__image'} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default SliderItem;
