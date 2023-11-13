import './contentCard.scss';
import download from '../../../assets/download.svg';

const ContentCard = ({ imgUrl, description }) => {
  const handleDownload = async (src, title) => {
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
    <div className="content-card">
      <img src={download} alt="download Icon" onClick={() => handleDownload(imgUrl, description)} />
    </div>
  );
};

export default ContentCard;
