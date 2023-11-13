import Slider from 'react-slick';
import './specialEvent.scss';
import { posts, variants } from '../../constants';
import EventCard from '../../components/eventCard/EventCard';
import { motion } from 'framer-motion';

const SpecialEvent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    paddingCenter: '10px',
    beforeChange: () => {},
    appendDots: dots => (
      <div
        style={{
          borderRadius: '10px',
          padding: '10px',
          height: '30px',
        }}
      >
        <ul style={{ margin: '0px', display: 'flex', gap: '10px' }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <>
        <span className="title timer" data-from="0" data-to="85" data-speed="1800">
          {i + 1}
        </span>
        <div className="overlay"></div>
        <div className="left"></div>
        <div className="right"></div>
      </>
    ),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: false,
          appendDotS: dots => <></>,
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="event">
      <motion.div
        variants={variants}
        initial={variants.hidden}
        whileInView={'visible'}
        transition={variants.transition}
        className="event-container wrapper"
      >
        <h1 className="text-title">Special Events & Promotional</h1>
        <p className="text-initial">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, amet officiis asperiores ab, in iure quae
          sequi laudantium sapiente, quidem vitae maiores reprehenderit a magni enim commodi. Eos, recusandae fuga.
        </p>
      </motion.div>
      <motion.div
        variants={variants}
        initial={variants.hidden}
        whileInView={'visible'}
        transition={variants.transition}
        className="event-promotion"
      >
        <Slider {...settings}>
          {posts.map(post => (
            <EventCard {...post} key={post.description} />
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default SpecialEvent;
