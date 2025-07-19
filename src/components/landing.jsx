import { motion } from "framer-motion";
import Navbar from "./navbar";

import TokenOutlinedIcon from "@mui/icons-material/TokenOutlined";
import homeimage from "../images/home.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <motion.div
        className="home"
        initial={{ opacity: 0, y: 100 }} /* Start text 100px from below */
        animate={{ opacity: 1, y: 0 }} /* Animate to original position */
        transition={{ duration: 1 }} /* Keep the same duration */
      >
        <motion.div
          className="home-first"
          initial={{ opacity: 0, y: 100 }} /* Start text 100px from below */
          animate={{ opacity: 1, y: 0 }} /* Animate to original position */
          transition={{ duration: 1 }} /* Keep the same duration */
        >
          <div className="heading">One Tool For doing It All Together</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry fjknf fje jfbj jfbj owopf dfjfb.
          </p>
          <div>
            <motion.button
              className="btn btn-home1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              Sign In
            </motion.button>
            <motion.button
              className="btn btn-home2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="img"
          initial={{ opacity: 0, y: 200 }} /* Start 200px from the bottom */
          animate={{ opacity: 1, y: 0 }} /* Animate to original position */
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }} /* Shorter travel distance with reduced duration */
        >
          <img src={homeimage} alt="hi" />
        </motion.div>
      </motion.div>

      {/* Feature */}
      <div className="features">
        <div>
          <TokenOutlinedIcon></TokenOutlinedIcon> Features
        </div>
        <div className="features-heading">
          <h1>Everything Your Team Looking For</h1>
          <p>
            Non ea nisi magna aliquip anim. Excepteur reprehenderit consequat eu
            ipsum mollit. Cillum est voluptate eu do fugiat eu est culpa
            occaecat elit est consectetur dolore. Eu adipisicing eu amet
            exercitation quis.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
