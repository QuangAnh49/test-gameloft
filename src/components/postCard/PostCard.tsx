import './postCard.scss';
import facebook from '../../assets/facebook.svg';
import link from '../../assets/link.svg';
import img from '../../assets/img.svg';

import { PostCardProps } from '../../types';

function PostCard({ imgUrl, description }: PostCardProps) {
  return (
    <div className="post-card">
      <div className="card-icon icon__facebook">
        <img className=" icon" src={facebook} alt="facebook" />
      </div>
      <div className="card-icon icon__link">
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
      <img className="post-card__image" src={img} alt="Post Card" />
      <p>{description}</p>
    </div>
  );
}

export default PostCard;
