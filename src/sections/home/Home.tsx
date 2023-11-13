import './home.scss';
import star from '../../assets/star.svg';
import starDisable from '../../assets/starDisable.svg';
import eShop from '../../assets/eShop.svg';
import microsoft from '../../assets/microsoft.svg';
import steam from '../../assets/steam.svg';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="home ">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="home-content wrapper"
      >
        <h1 className="home-content__title">GAMELOFT GAME</h1>
        <div className="home-content__rate">
          <p>Rating/Action</p>
          <div className="rating">
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
            <img src={starDisable} alt="rating" />
          </div>
        </div>
        <p className="home-content__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem voluptas minima ducimus rerum esse impedit
          molestias repudiandae, laborum debitis saepe harum necessitatibus provident quia veritatis aspernatur dolorum?
          Accusantium, aliquam?
        </p>
      </motion.div>
      <div className="home-install wrapper">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="home-install__container"
        >
          <p className="install-content text-initial">Download latest version</p>
          <div className="install-cards">
            <img src={eShop} alt="eShop" />
            <img src={microsoft} alt="microsoft" />
            <img src={steam} alt="steam" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
