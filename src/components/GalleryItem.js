import React, { useState, useRef, useEffect } from "react";
import { points } from "../data";
import useOnScreen from "../hooks/useOnScreen";
import cn from "classnames";
const GalleryItem = ({ src, index, columnOffset }) => {
  const values = points[index];
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  if (!values) return null;
  const [row, column, spanRow, spanColumn] = values;

  const getScrollIndex = () => {
    if (index === 1 || index === 4) return -1;
    if (index === 0 || index === 3) return 0;
    return 1;
  };

  return (
    <div
      className="gallery-item relative z-50 h-full "
      data-scroll
      data-scroll-speed={getScrollIndex()}
      ref={ref}
      style={{
        gridArea: `${row} / ${
          column + columnOffset
        } / span ${spanRow} / span ${spanColumn}`,
      }}
    >
      <div
        className={cn(
          "gallery-item-image w-full h-full relative overflow-hidden will-change-transform",
          { reveal: reveal }
        )}
      >
        <div
          className="gallery-item-imginner origin-[center left] w-full h-full will-change-transform scale-110 transition-transform duration-[2s] ease-[cubic-bezier(0.77, 0, 0.175, 1)]"
          style={{ background: `url(${src}) center/cover no-repeat` }}
        ></div>
      </div>
    </div>
  );
};

export default GalleryItem;
