import { Slide } from "react-slideshow-image";

import slideImages from "../constants/images";

import "react-slideshow-image/dist/styles.css";
import "./Slider.css";

export default function Slider() {
  return (
    <div className="images-container">
      <Slide easing="ease">
        {slideImages.map((slide, index) => {
          return (
            <div className="slide" key={slide}>
              <div style={{ backgroundImage: `url(${slideImages[index]})` }}>
                <span>Slide {index + 1}</span>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}