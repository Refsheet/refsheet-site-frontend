import React, { useRef } from "react";
import Image, { ImageProps } from "next/image";
import styles from "./PageHeader.module.scss";
import { useScrollPosition } from "../../hooks/useScrollPosition";

// let PageHeader
// export default PageHeader = createReactClass({
//   componentDidMount() {
//     return $(window).scroll(function () {
//       const offset = $(window).scrollTop() * 0.8
//       return $('.page-header-backdrop').css({
//         backgroundPosition: `50% ${offset}px`,
//       })
//     })
//   },
//
//   componentWillUnmount() {
//     return $(window).off('scroll')
//   },
//
//   render() {

export interface IPageHeaderProps {
  backgroundImage: ImageProps["src"];
  onHeaderImageEdit?: (any) => void;
}

const PageHeader: React.FC<React.PropsWithChildren<IPageHeaderProps>> = ({
  backgroundImage,
  onHeaderImageEdit,
  children,
}) => {
  const position = useScrollPosition(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const calculatePosition = () => {
    if (sectionRef.current && imageRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.clientHeight;
      const viewHeight = window?.innerHeight || 0;
      const imageHeight = imageRef.current.clientHeight;

      const scrollDistance = imageHeight - sectionHeight;
      const scrollPercent =
        (position + viewHeight - sectionTop) / (viewHeight + sectionHeight);

      return Math.max(
        Math.min(scrollDistance * scrollPercent, scrollDistance),
        0,
      );
    } else {
      return 0;
    }
  };

  return (
    <section className="page-header">
      <div className="page-header-backdrop" ref={sectionRef}>
        <div className={styles.plxContainer}>
          <div
            className={styles.plx}
            style={{ top: `-${calculatePosition()}px` }}
            ref={imageRef}
          >
            <Image src={backgroundImage} placeholder="blur" />
          </div>
        </div>
        {onHeaderImageEdit && (
          <a
            className="image-edit-overlay for-header"
            onClick={onHeaderImageEdit}
          >
            <div className="content">
              <i className="material-icons">photo_camera</i>
              Change Cover Image
            </div>
          </a>
        )}
      </div>

      <div className="page-header-content">
        <div className="container">{children}</div>
      </div>
    </section>
  );
};

export default PageHeader;
