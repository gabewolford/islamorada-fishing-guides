import Image from "next/image"

export default function GuidePhotoGallery({ guideData }) {
  let mainPhoto, topLeft, topRight, bottomLeft, bottomRight, galleryLength

  if (guideData) {
    galleryLength = guideData.gallery.length
    mainPhoto = 
      <Image
      src={guideData.gallery[0].url + '?fit=max'}
      alt={`${guideData.name} main photo`}
      height={417}
      width={548}
    >
    </Image>

    topLeft = 
      <Image
      src={guideData.gallery[1].url}
      alt={`${guideData.name} top left photo`}
      height={196}
      width={259}
    >
    </Image>
    
    topRight = 
      <Image
      src={guideData.gallery[2].url}
      alt={`${guideData.name} top right photo`}
      height={196}
      width={259}
    >
    </Image>

    bottomLeft = 
      <Image
      src={guideData.gallery[3].url}
      alt={`${guideData.name} top right photo`}
      height={196}
      width={259}
    >
    </Image>

    bottomRight = 
      <Image
      src={guideData.gallery[4].url}
      alt={`${guideData.name} top right photo`}
      height={196}
      width={259}
    >
    </Image>
  }

  return (
    <section className="flex flex-row items-center gap-6 mx-auto w-full my-8 lg:my-16 relative">      
      <div className="lg:w-1/2 h-[417px] relative">
        {mainPhoto}
        <div className="absolute bottom-5 right-5 lg:hidden">
          <button className="flex flex-row items-center bg-white h-8 px-2 gap-2 rounded">
            <Image
              src="/images/image-icon.svg"
              height={16}
              width={16}
              alt="image icon"
            >
            </Image>
            <p className="text-cyan-420 text-sm">See all photos</p>
          </button>
        </div>
        <div className="absolute bottom-5 left-5 lg:hidden">
          <button className="flex flex-row items-center bg-[#202236] opacity-80 h-8 px-2 gap-2 rounded">

            <p className="text-white font-medium text-sm"> 1/{galleryLength}</p>
          </button>
        </div>
      </div>
      
      <div className="hidden lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-6 lg:w-1/2">
        <div className="w-auto h-auto">
          {topLeft}
        </div>
        <div className="w-auto h-auto">
          {topRight}
        </div>
        <div className="w-auto h-auto">
          {bottomLeft}
        </div>
        <div className="w-auto h-auto">
          {bottomRight}
        </div>
      </div>

      <div className="absolute bottom-5 right-5">
        <button className="flex flex-row items-center bg-white h-8 px-2 gap-2 rounded">
          <Image
            src="/images/image-icon.svg"
            height={16}
            width={16}
            alt="image icon"
          >
          </Image>
          <p className="text-cyan-420 text-sm font-medium">See all photos</p>
        </button>
      </div>
    </section>
  )
}
