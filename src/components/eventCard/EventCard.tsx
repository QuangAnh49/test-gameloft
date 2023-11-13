import { EventCardProps } from '../../types';
import './eventCard.scss';
import link from '../../assets/link.svg';

const EventCard = ({ imgUrl, description, title }: EventCardProps) => {
  return (
    <div className="event-card" style={{ backgroundImage: `url(${imgUrl})` }}>
      <div className="event-card__link">
        <svg
          id="Group_121"
          data-name="Group 121"
          xmlns="http://www.w3.org/2000/svg"
          width="14.362"
          height="14.875"
          viewBox="0 0 14.362 14.875"
        >
          <circle
            id="Ellipse_241"
            data-name="Ellipse 241"
            cx="2.565"
            cy="2.565"
            r="2.565"
            transform="translate(9.233 0)"
            fill="#111"
          />
          <ellipse
            id="Ellipse_242"
            data-name="Ellipse 242"
            cx="2.565"
            cy="2.821"
            rx="2.565"
            ry="2.821"
            transform="translate(9.233 9.233)"
            fill="#111"
          />
          <ellipse
            id="Ellipse_243"
            data-name="Ellipse 243"
            cx="2.565"
            cy="2.821"
            rx="2.565"
            ry="2.821"
            transform="translate(0 5.129)"
            fill="#111"
          />
          <path
            id="Path_206"
            data-name="Path 206"
            d="M1020.684,818.6l-7.779,4.4,7.779,4.4"
            transform="translate(-1009.958 -815.268)"
            fill="none"
            stroke="#111"
            stroke-linejoin="round"
            stroke-width="1"
          />
        </svg>
      </div>
      <div className="event-card__title">
        <h1>SHORT TITLE HERE</h1>
        <hr />
        <p>{description}</p>
      </div>
      <button className="event-card-btn">Read More</button>
    </div>
  );
};

export default EventCard;
