import PropTypes from 'prop-types';

function Card(props) {
    return (
        <section className="card">
            <img className="card-image" src={props.image} />
            <div className="info">
                <div className="location">
                    <img className="location-img" src="../public/location-dot-solid.svg" />
                    <span>{props.location}</span>
                    <a href={props.url}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <span>{props.start} - {props.end}</span>
                <p>{props.description}</p>
            </div>
            
        </section>
        
    
    )
}

Card.propTypes = {
     // Add the missing prop type validation
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };

export default Card;