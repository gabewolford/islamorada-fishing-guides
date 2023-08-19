'use client'

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { apercuMedium } from "../../styles/fonts";

export default function GalleryModal({ onClose, guideData }) {
  const [thumbnails, setThumbnails] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const galleryLength = guideData?.gallery.length || 0;
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (guideData) {
      const thumbnailElements = guideData.gallery.map((image, i) => (
        <button key={i} onClick={() => handleThumbnailClick(i)}>
          <Image
            src={image.url + "?fit=crop&crop=center&h=100&w=150"}
            alt={`Photo ${i}`}
            height={100}
            width={150}
            className={i === currentPhotoIndex ? "border-2 border-cyan-777" : ""}
          />
        </button>
      ));

      setThumbnails(thumbnailElements);
    }
  }, [guideData, currentPhotoIndex]);

  const handleThumbnailClick = (index) => {
    setCurrentPhotoIndex(index);
  };

  const handlePreviousClick = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? galleryLength - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === galleryLength - 1 ? 0 : prevIndex + 1
  );




  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left, go to the next image
      handleNextClick();
    } else if (touchEnd - touchStart > 50) {
      // Swiped right, go to the previous image
      handlePreviousClick();
    }
  
    // Reset touch positions
    setTouchStart(0);
    setTouchEnd(0);
  };
  };
  
  return (

    <div className="fixed top-0 right-0 bottom-0 left-0 z-[1000] flex flex-col">
        
        <div className="flex flex-col h-screen w-full items-center bg-white p-4 md:p-8">

          <div className="flex flex-col h-full w-full items-center gap-6 max-w-[1280px] max-h-screen justify-between">
            
            <div className="flex w-full justify-between">
              <button className="flex items-center gap-1" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.2803 5.78033C19.5732 5.48744 19.5732 5.01256 19.2803 4.71967C18.9874 4.42678 18.5126 4.42678 18.2197 4.71967L12 10.9393L5.78033 4.71967C5.48744 4.42678 5.01256 4.42678 4.71967 4.71967C4.42678 5.01256 4.42678 5.48744 4.71967 5.78033L10.9393 12L4.71967 18.2197C4.42678 18.5126 4.42678 18.9874 4.71967 19.2803C5.01256 19.5732 5.48744 19.5732 5.78033 19.2803L12 13.0607L18.2197 19.2803C18.5126 19.5732 18.9874 19.5732 19.2803 19.2803C19.5732 18.9874 19.5732 18.5126 19.2803 18.2197L13.0607 12L19.2803 5.78033Z" fill="#1989AD"/>
                </svg>
                <p className={`${apercuMedium.className} text-cyan-777`}>Close</p>
              </button>
              <div className={`${apercuMedium.className} text-cyan-777`}>
                {currentPhotoIndex + 1}/{galleryLength}
              </div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.2803 5.78033C19.5732 5.48744 19.5732 5.01256 19.2803 4.71967C18.9874 4.42678 18.5126 4.42678 18.2197 4.71967L12 10.9393L5.78033 4.71967C5.48744 4.42678 5.01256 4.42678 4.71967 4.71967C4.42678 5.01256 4.42678 5.48744 4.71967 5.78033L10.9393 12L4.71967 18.2197C4.42678 18.5126 4.42678 18.9874 4.71967 19.2803C5.01256 19.5732 5.48744 19.5732 5.78033 19.2803L12 13.0607L18.2197 19.2803C18.5126 19.5732 18.9874 19.5732 19.2803 19.2803C19.5732 18.9874 19.5732 18.5126 19.2803 18.2197L13.0607 12L19.2803 5.78033Z" fill="none"/>
                  </svg>
                  <p className={`${apercuMedium.className} text-transparent`}>Close</p>
              </div>
            </div >

            <div className="flex flex-row relative justify-around items-center w-full">

              <button
                className=" top-1/2 transform -translate-y-1/2 border border-cyan-777 rounded-full p-2 md:mr-4 hidden md:block"
                onClick={handlePreviousClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M16.0303 4.46967C16.2966 4.73594 16.3208 5.1526 16.1029 5.44621L16.0303 5.53033L9.561 12L16.0303 18.4697C16.2966 18.7359 16.3208 19.1526 16.1029 19.4462L16.0303 19.5303C15.7641 19.7966 15.3474 19.8208 15.0538 19.6029L14.9697 19.5303L7.96967 12.5303C7.7034 12.2641 7.6792 11.8474 7.89705 11.5538L7.96967 11.4697L14.9697 4.46967C15.2626 4.17678 15.7374 4.17678 16.0303 4.46967Z" fill="#1989AD"/>
                </svg>
              </button>

              <div className="flex justify-center items-center" ref={carouselRef}>
                {guideData && (
                  <div className="lg:h-2/3 lg:w-auto mx-auto">
                    <Image
                      src={
                        guideData.gallery[currentPhotoIndex].url +
                        "?fit=crop&crop=center&h=600&w=800"
                      }
                      alt={`Photo ${currentPhotoIndex}`}
                      height={600}
                      width={800}
                    />
                  </div>
                )}
              </div>

              <button
                className="top-1/2 transform -translate-y-1/2 border border-cyan-777 rounded-full p-2 md:ml-4 hidden md:block"
                onClick={handleNextClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z" fill="#1989AD"/>
                </svg>
              </button>

          </div>

            <div className="hidden md:flex md:flex-row space-x-4 justify-center w-full mx-auto">
              {thumbnails}
            </div>

            <div className="flex w-full md:hidden">
              
            </div>

          </div>
        </div>
    </div>
  );
};