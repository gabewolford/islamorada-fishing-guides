'use client'

import Image from "next/image"
import GalleryModal from "../GalleryModal/GalleryModal"
import { useState, useEffect } from "react"

export default function GuidePhotoGallery({ guideData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mainPhoto, setMainPhoto] = useState()
  const [topLeftPhoto, setTopLeftPhoto] = useState()
  const [topRightPhoto, setTopRightPhoto] = useState()
  const [bottomLeftPhoto, setBottomLeftPhoto] = useState()
  const [bottomRightPhoto, setBottomRightPhoto] = useState()
  const [galleryLength, setGalleryLength] = useState()


  const handleSetModal = () => {
    setIsModalOpen(!isModalOpen)
  };

  useEffect(() => {
    if (guideData) {
      setGalleryLength(guideData.gallery.length)
      setMainPhoto(    
        <Image
          src={guideData.gallery[0].url + '?fit=crop&crop=center&h=417&w=548'}
          alt={`${guideData.name} main photo`}
          height={800}
          width={1000}
        >
        </Image>
      )
  
  
      setTopLeftPhoto(
        <Image
          src={guideData.gallery[1].url + '?fit=crop&crop=center&h=196&w=259'}
          alt={`${guideData.name} top left photo`}
          height={196}
          width={259}
        >
        </Image>
      )
  
      setTopRightPhoto(  
        <Image
          src={guideData.gallery[2].url + '?fit=crop&crop=center&h=196&w=259'}
          alt={`${guideData.name} top right photo`}
          height={196}
          width={259}
        >
        </Image>
      )
  
      setBottomLeftPhoto(
        <Image
          src={guideData.gallery[3].url + '?fit=crop&crop=center&h=196&w=259'}
          alt={`${guideData.name} top right photo`}
          height={196}
          width={259}
        >
        </Image>
      )
      setBottomRightPhoto(
        <Image
          src={guideData.gallery[4].url + '?fit=crop&crop=center&h=196&w=259'}
          alt={`${guideData.name} top right photo`}
          height={196}
          width={259}
        >
        </Image>
      )
    }
  }, [guideData])

  const header = document.querySelector('header');
  const fixerupper = document.getElementById('remove-padding')
  const body = document.body
  if (isModalOpen) {
    header.classList.remove('fixed'); 
    fixerupper.classList.remove('pt-16', 'md:pt-24')
    fixerupper.classList.add('pt-0', 'md:pt-[28px]')
    body.classList.add('overflow-hidden')
    body.classList.remove('overflow-auto')

  } else {
    header.classList.add('fixed'); 
    fixerupper.classList.add('pt-16', 'md:pt-24')
    fixerupper.classList.remove('pt-0', 'md:pt-[28px]')
    body.classList.add('overflow-auto')
    body.classList.remove('overflow-hidden')
  }

  return (
    <>
        <section className={`flex flex-row items-center gap-6 mx-auto w-full my-8 lg:my-16 relative max-h-[417px] overflow-y-clip`}>      
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {mainPhoto}
            </div>
            <div className="absolute bottom-5 right-5 lg:hidden w-fit">
              <button onClick={handleSetModal}>
                <div className="flex flex-row items-center bg-white h-8 px-2 gap-2 rounded">
                  <Image
                    src="/images/image-icon.svg"
                    height={16}
                    width={16}
                    alt="image icon"
                  >
                  </Image>
                  <p className="text-cyan-420 text-sm">See all photos</p>
                </div>
              </button>
            </div>
            <div className="absolute bottom-5 left-5 lg:hidden">
              <button className="flex flex-row items-center bg-[#202236] opacity-80 h-8 px-2 gap-2 rounded">
                <p className="text-white font-medium text-sm"> 1/{galleryLength}</p>
              </button>
            </div>
          </div>
          <div className="hidden relative lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-6 lg:w-1/2">
            <div className="max-w-[259px] max-h-[196px]">
              {topLeftPhoto}
            </div>
            <div className="max-w-[259px] max-h-[196px]">
              {topRightPhoto}
            </div>
            <div className="max-w-[259px] max-h-[196px]">
              {bottomLeftPhoto}
            </div>
            <div className="max-w-[259px] max-h-[196px]">
              {bottomRightPhoto}
            </div>
            <div className="absolute bottom-5 right-5">
              <button onClick={handleSetModal}>
                <div className="flex flex-row items-center bg-white h-8 px-2 gap-2 rounded">
                  <Image
                    src="/images/image-icon.svg"
                    height={16}
                    width={16}
                    alt="image icon"
                  >
                  </Image>
                  <p className="text-cyan-420 text-sm font-medium">See all photos</p>
                </div>
              </button>
            </div>
          </div>
        </section>

        {isModalOpen && (
          <div className="z-[150]">
            <GalleryModal onClose={() => setIsModalOpen(false)} guideData={guideData}/>
          </div>
        )}
    </>
  )
}
