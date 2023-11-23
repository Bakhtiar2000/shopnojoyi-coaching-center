import React, { useEffect, useState, useRef } from 'react';
import { Blurhash } from 'react-blurhash';

const ImageComponent = ({ src, hash, width, height }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.onload = () => {
              setImageLoaded(true);
            };
            img.src = src;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <>
      <div style={{ display: imageLoaded ? 'none' : 'inline' }}>
        <div ref={imgRef}>
          <Blurhash
            hash={hash}
            width={width}
            height={height}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      </div>

      <img
        src={src}
        className='object-cover object-center'
        style={{ display: !imageLoaded ? 'none' : 'inline', width : width, height: height  }}
      />
    </>
  );
};

export default ImageComponent;
