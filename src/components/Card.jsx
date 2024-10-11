import React from 'react';

export default function Card(props) {
  return (
    <div className="card-wrapper">
      <img className="destination-img" src={`../assets/images/${props.item.image}`} alt={props.item.title} />

      <div className="destination">
        <div className="destination-header">
          <h3>
            <i className="fa-solid fa-location-dot"></i>
            {props.item.location}
          </h3>
          <a className="map-link" href={props.item.googleMapsUrl} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </div>

        <h2 className="destination-name">{props.item.title}</h2>
        <p className="travel-period">
          <span>{props.item.startDate}</span> - <span>{props.item.endDate}</span>
        </p>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}
