import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GalleryItem from "./components/GalleryItem";
import { imageData } from "./data";
import LocomotiveScroll from "locomotive-scroll";
import "../node_modules/locomotive-scroll/src/locomotive-scroll.scss";
import { useEffect, useRef } from "react";
function App() {
  const images = imageData.map((item, index) => {
    return item.map((url, itemIndex) => (
      <GalleryItem
        src={url}
        index={itemIndex}
        key={url}
        columnOffset={index * 14}
      />
    ));
  });
  const ref = useRef(null);
  useEffect(() => {
    if (ref) {
      const scroll = new LocomotiveScroll({
        el: ref.current,
        smooth: true,
        direction: "horizontal",
      });
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="scroll-container" ref={ref} data-scroll-container>
          <div className="content">
            <div className="gallery">
              {images}
              <div className="gallery-helper">Scroll to discover more</div>
              <div className="behind-text fill" data-scroll data-scroll-speed>
                Every body loves good story
              </div>
              <div
                className="behind-text outline"
                data-scroll
                data-scroll-speed
              >
                Every body loves good story
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
