import React, { Component } from 'react';
import HotelListItem from '../HotelListItem/HotelListItem';
import { Spinner } from '../Spinner/Spinner';

class HotelsList extends Component {
  state = {
    perPage: 6,
    page: 1,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    window.onbeforeunload = () => window.scrollTo(0, 0); // force scroller to top on load
  }

  onScroll = () => {
    let windowHeight = window.innerHeight + window.scrollY;

    if (document.body) {
      let bodyOffset = document.body.offsetHeight;

      if (windowHeight >= bodyOffset) {
        this.setState((prevState) => {
          return {
            perPage: prevState.perPage + 3,
          };
        });
      }
    }
  };

  render() {
    const count = this.state.page * this.state.perPage;
    const visibleHotels = this.props.hotels.slice(0, count);

    return (
      <main className="hotel-list">
        <div className="content__container">
          <div className={'hotel-list__container'}>
            {visibleHotels.map(
              (hotel, index) => (
                <HotelListItem
                  data={hotel}
                  key={hotel._id}
                  id={hotel._id}
                  index={index}
                />
              ),
            )}
            <div className="hotel-list__more">
              {visibleHotels.length !== this.props.hotels.length && <Spinner />}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default HotelsList;
