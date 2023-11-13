import { StoryCardProp } from '../../types';
import './storyCard.scss';

const StoryCard = ({ imgUrl, title }: StoryCardProp) => {
  const handleOpenPage = () => {
    window.open(imgUrl);
  };
  return (
    <div className="story-card" onClick={handleOpenPage}>
      <img src={imgUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default StoryCard;
