import './contentCard.scss';
import download from '../../../assets/download.svg';
import { ContentCardProps } from '../../../types';

const ContentCard = ({ imgUrl, key }: ContentCardProps) => {
  const handleDownload = async (src: string) => {
    const img = await fetch(src)
      .then(res => res.arrayBuffer())
      .then(buffer => new Blob([buffer], { type: 'image/jpeg' }));

    console.log(img, URL.createObjectURL(img));
    const link = document.createElement('a');
    link.href = URL.createObjectURL(img);
    link.download = `Image Download`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div key={key} className="content-card">
      <img src={download} alt="download Icon" onClick={() => handleDownload(imgUrl)} />
    </div>
  );
};

export default ContentCard;
