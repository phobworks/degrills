import React from 'react';

const Map = () => {
  return (
    <div className="map__section">
      <div className="map__container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63603.303897800295!2d6.989365718939863!3d4.90507845701701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d34d327358e9%3A0x5feb9e83e50467e0!2sDe%20Grills%20Integrated%20Services%20Limited!5e0!3m2!1sen!2sng!4v1778936834235!5m2!1sen!2sng"
          //   width="100%"
          //   height="450"
          //   style="border:0;"
          //   allowFullScreen=""
          loading="lazy"
          //   referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
