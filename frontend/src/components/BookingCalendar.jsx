import React from 'react';

const BookingCalendar = () => {
  return (
    <section id="booking" className="booking-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Schedule Your Strategy Call</h2>
          <p className="section-subtitle">Choose a time that works best for you</p>
        </div>

        <div className="booking-calendar-wrapper">
          <iframe
            src="https://cal.com/niora-star-q8wr6w/30min"
            width="100%"
            height="800"
            frameBorder="0"
            title="Book a Strategy Call"
            className="booking-iframe"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
