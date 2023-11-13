import './community.scss';
import Slider from 'react-slick';
import twitter from '../../assets/twiter.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import search from '../../assets/search.svg';
import nextArrow from '../../assets/nextArrow.svg';
import previousArrow from '../../assets/previousArrow.svg';
import nextArrow1 from '../../assets/nextArrow1.svg';
import previousArrow1 from '../../assets/previousArrow1.svg';
import { posts, socialPosts } from '../../constants';
import StoryCard from '../../components/storyCard/StoryCard';
import PostCard from '../../components/postCard/PostCard';
import { useState } from 'react';
import { useResponsive } from '../../utils';
import { motion } from 'framer-motion';

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return <img className={className} src={nextArrow} alt="next Arrow" onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <img className={className} src={previousArrow} style={{ zIndex: '1' }} alt="previousArrow" onClick={onClick} />
  );
}

function SamplePrevSocialArrow(props: any) {
  const { className, onClick, pagination, setPagination } = props;
  return (
    <>
      <div className="arrow-pre" style={{ position: 'absolute', display: 'flex' }}>
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
              setPagination((prev: number) => prev - 1);
            }
          }}
        />
        <p className={pagination === 1 ? 'pagination__disable' : 'pagination '}>{pagination}</p>
        <i className="fa-solid fa-slash fa-rotate-270" style={{ color: ' #2699fb', rotate: '160deg' }}></i>
      </div>
    </>
  );
}
function SampleNextSocialArrow(props: any) {
  const { className, onClick, pagination, setPagination } = props;
  return (
    <div className="arrow-next" style={{ position: 'absolute' }}>
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
            setPagination((prev: number) => prev + 1);
          }
        }}
      />
    </div>
  );
}

function Community() {
  const { isMobile } = useResponsive();
  const [numberOfList, setNumberOfList] = useState(0);
  const [postList, setPostList] = useState([posts[0]]);
  const [postListDesktop, setPostListDesktop] = useState(posts);

  const [pagination, setPagination] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 3000,
    autoplay: true,

    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const setting1 = {
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    speed: 3000,
    autoplay: true,
    slidesToScroll: 1,
    vertical: false,
    afterChange: (index: number) => {
      setPagination(index + 1);
    },
    nextArrow: <SampleNextSocialArrow pagination={pagination} setPagination={setPagination} />,
    prevArrow: <SamplePrevSocialArrow pagination={pagination} setPagination={setPagination} />,
  };
  const handleShowMore = () => {
    if (numberOfList + 1 === posts.length) {
      return;
    }
    setPostList([...postList, posts[numberOfList + 1]]);
    setNumberOfList((prev: number) => prev + 1);
  };
  const handleSearch = (e: any) => {
    const dataSearch = posts.filter(item => item.description.includes(e.target.value));
    setPostListDesktop(dataSearch);
  };
  return (
    <>
      <div className="community">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="community-container wrapper"
        >
          <h1>GAME COMMUNITY HUB</h1>
          <p>Live Game Updates</p>
          <div className="community-stories">
            <Slider {...settings}>
              {socialPosts.map(socialPost => (
                <div className="story-card" key={socialPost.title}>
                  <StoryCard {...socialPost} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="community-posts">
            <div className="post-container">
              <h1>All Posts</h1>
              <div className="post-socials">
                <img src={twitter} alt="twitter" />
                <img src={instagram} alt="instagram" />
                <img src={facebook} alt="facebook" />
              </div>
            </div>
            <div className="social-search">
              <input type="text" placeholder="Search" onChange={e => handleSearch(e)} />
              <img src={search} alt="search" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="community-socials"
        >
          {!isMobile ? (
            <Slider {...setting1}>
              {postListDesktop.map(post => (
                <div className="post" key={post.description}>
                  <PostCard {...post} />
                </div>
              ))}
            </Slider>
          ) : (
            <>
              {postList.length < posts.length && (
                <button className="show-btn" onClick={() => handleShowMore()}>
                  More
                </button>
              )}
              {postList.map((post, index) => (
                <div className={index + 1 === posts.length ? 'last-post' : `post`} key={index}>
                  <PostCard {...post} />
                </div>
              ))}
            </>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default Community;
