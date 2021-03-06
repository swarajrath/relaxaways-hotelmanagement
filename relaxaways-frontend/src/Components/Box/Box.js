import React, { PureComponent } from 'react';

class Box extends PureComponent {
  render() {
    return (
      <div key={this.props.index} className={`box box--${this.props.index}`}>
        <div className={'box__content'}>
          <div className={`box__icon box__icon--${this.props.index}`} />
          <div className={'box__text'}>
            <span className={'box__text--value'}>{this.props.value}</span>
            <span className={'box__text--title'}>{this.props.title}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
