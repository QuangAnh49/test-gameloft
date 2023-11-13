import './content.scss';
import Slider from 'react-slick';
import nextArrow1 from '../../assets/nextArrow1.svg';
import previousArrow1 from '../../assets/previousArrow1.svg';
import { posts, variants } from '../../constants';
import { useState } from 'react';
import ContentCard from './contentCard/ContentCard';
import { motion } from 'framer-motion';

function SamplePrevSocialArrow(props) {
  const { className, onClick, pagination, setPagination } = props;
  return (
    <>
      <div className="arrow-pre">
        <img
          className={className}
          src={previousArrow1}
          alt="previousArrow"
          onClick={() => {
            if (pagination === 1) {
              onClick();
              setPagination(8);
            } else {
              onClick();
              setPagination(prev => prev - 1);
            }
          }}
        />
        <p className={pagination === 1 ? 'pagination__disable' : 'pagination '}>{pagination}</p>
        <i className="fa-solid fa-slash fa-rotate-270" style={{ color: ' #2699fb', rotate: '160deg' }}></i>
      </div>
    </>
  );
}
function SampleNextSocialArrow(props) {
  const { className, onClick, pagination, setPagination } = props;
  return (
    <div className="arrow-next">
      <p className={pagination === posts.length ? 'pagination__disable' : 'pagination'}>{posts.length}</p>
      <img
        className={className}
        src={nextArrow1}
        alt="next Arrow"
        onClick={() => {
          if (pagination === posts.length) {
            onClick();
            setPagination(1);
          } else {
            onClick();
            setPagination(prev => prev + 1);
          }
        }}
      />
    </div>
  );
}

function Content() {
  const [pagination, setPagination] = useState(1);

  const setting1 = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 3000,
    autoplay: true,
    afterChange: index => {
      setPagination(index + 1);
    },
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <SampleNextSocialArrow pagination={pagination} setPagination={setPagination} />,
    prevArrow: <SamplePrevSocialArrow pagination={pagination} setPagination={setPagination} />,
  };

  return (
    <>
      <div className="content">
        <motion.div
          variants={variants}
          initial={variants.hidden}
          whileInView={'visible'}
          transition={variants.transition}
          className="content-container wrapper"
        >
          <h1>Exclusive Game Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos aspernatur voluptate aperiam
            quaerat, doloribus iure earum ad minima asperiores possimus unde fugit non est dolore dolorum facilis porro
            dicta!
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          initial={variants.hidden}
          whileInView={'visible'}
          transition={variants.transition}
          className="content-socials"
        >
          <Slider {...setting1}>
            {posts.map(post => (
              <ContentCard {...post} key={post.description} />
            ))}
          </Slider>
        </motion.div>
        <div className="content-pagination"></div>
      </div>
    </>
  );
}

export default Content;
