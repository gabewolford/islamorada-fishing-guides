'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import { apercuMedium } from "../../styles/fonts";

export default function GalleryModal({ onClose, guideData }) {
  const [thumbnails, setThumbnails] = useState()
  const [mainPhoto, setMainPhoto] = useState()
  const [mainPhotoIndex, setMainPhotoIndex] = useState(0)
  const [galleryLength, setGalleryLength] = useState()

  useEffect(() => {
    if (guideData) {
      setGalleryLength(guideData.gallery.length)
      // Set mainPhoto to the first image in the gallery
      setMainPhoto(
        <Image
          src={guideData.gallery[0].url + '?fit=crop&crop=center&h=600&w=800'}
          alt="main photo"
          height={900}
          width={900}
        />
      );

      // Create thumbnails array with JSX elements
      const thumbnailElements = guideData.gallery.map((image, i) => (
        <button key={i} onClick={() => handleThumbnailClick(image.url)}>
          <Image
            src={image.url + '?fit=crop&crop=center&h=600&w=800'}
            alt={`Photo ${i}`}
            height={40}
            width={50}
          />
        </button>
      ));

      setThumbnails(thumbnailElements);
    }
  }, [guideData]);

  const handleThumbnailClick = (imageUrl) => {
    // Update mainPhoto state with JSX element using the clicked thumbnail image URL
    setMainPhoto(
      <Image
        src={imageUrl + '?fit=crop&crop=center&h=600&w=800'}
        alt="main photo"
        height={900}
        width={900}
      />
    );
  };
  
  return (

    <div className="fixed top-0 right-0 bottom-0 left-0 z-[1000] flex flex-col">
        
        <div className="flex flex-col h-full w-full items-center bg-white p-4 md:p-8">

          <div className="flex flex-col h-full w-full items-center gap-6 max-w-[1280px] max-h-screen justify-between">
            
            <div className="flex w-full justify-between">
              <button className="flex items-center gap-1" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.2803 5.78033C19.5732 5.48744 19.5732 5.01256 19.2803 4.71967C18.9874 4.42678 18.5126 4.42678 18.2197 4.71967L12 10.9393L5.78033 4.71967C5.48744 4.42678 5.01256 4.42678 4.71967 4.71967C4.42678 5.01256 4.42678 5.48744 4.71967 5.78033L10.9393 12L4.71967 18.2197C4.42678 18.5126 4.42678 18.9874 4.71967 19.2803C5.01256 19.5732 5.48744 19.5732 5.78033 19.2803L12 13.0607L18.2197 19.2803C18.5126 19.5732 18.9874 19.5732 19.2803 19.2803C19.5732 18.9874 19.5732 18.5126 19.2803 18.2197L13.0607 12L19.2803 5.78033Z" fill="#1989AD"/>
                </svg>
                <p className={`${apercuMedium.className} text-cyan-777`}>Close</p>
              </button>
              <div className={`${apercuMedium.className} text-cyan-777`}>
                1/{galleryLength}
              </div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.2803 5.78033C19.5732 5.48744 19.5732 5.01256 19.2803 4.71967C18.9874 4.42678 18.5126 4.42678 18.2197 4.71967L12 10.9393L5.78033 4.71967C5.48744 4.42678 5.01256 4.42678 4.71967 4.71967C4.42678 5.01256 4.42678 5.48744 4.71967 5.78033L10.9393 12L4.71967 18.2197C4.42678 18.5126 4.42678 18.9874 4.71967 19.2803C5.01256 19.5732 5.48744 19.5732 5.78033 19.2803L12 13.0607L18.2197 19.2803C18.5126 19.5732 18.9874 19.5732 19.2803 19.2803C19.5732 18.9874 19.5732 18.5126 19.2803 18.2197L13.0607 12L19.2803 5.78033Z" fill="none"/>
                  </svg>
                  <p className={`${apercuMedium.className} text-transparent`}>Close</p>
              </div>
            </div >

            <div className="flex justify-center lg:w-2/3 lg:h-fit">
              {mainPhoto}
            </div>

            <div className="flex flex-row space-x-4 justify-center mx-auto overflow-clip">
              {thumbnails}
            </div>

          </div>
        </div>
    </div>
  );
};