import { apercuBold } from "../../styles/fonts"

export default function GuideFacts({ guideData }) {
    let guideAboutMe, guideBoats, guideDock, guideSpecialty, guideFunFact, guideDaysOff, guidePhoto, guideName, boatHeading
    if (guideData) {
        guideAboutMe = guideData.about_me
        guideBoats = guideData.boats
            .map((boat, i) => {
                return <li key={i} className="boat-list-item">{boat}</li>
            })
        guideDock = guideData.dock
        guideSpecialty = guideData.specialty
        guideFunFact = guideData.fun_fact
        guideDaysOff = guideData.days_off
        guidePhoto = guideData.imageUrl
        guideName = guideData.name
        if (guideData.boats.length > 1) {
            boatHeading = <h6 className={apercuBold.className}>Boats</h6>
        } else {
            boatHeading = <h6 className={apercuBold.className}>Boat</h6>
        }
    }

    

    return (
        <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-28">
            <div className="flex flex-col items-start gap-10 order-1 lg:order-0 lg:w-2/3">
                <div className="flex flex-col items-start gap-2">
                    <h5 className={`text-lg ${apercuBold.className}`}>About me</h5>
                    <p className="text-lg">{guideAboutMe}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="flex flex-col gap-6 md:w-1/2">
                        <div className="flex flex-col items-start">
                            {boatHeading}
                            <p className="text-sm">{guideBoats}</p>
                        </div>

                        <div className="flex flex-col items-start">
                            <h6 className={apercuBold.className}>Dock</h6>
                            <p className="text-sm">{guideDock}</p>
                        </div>

                        <div className="flex flex-col items-start">
                            <h6 className={apercuBold.className}>Specialty</h6>
                            <p className="text-sm">{guideSpecialty}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 lg:w-1/2">
                        <div className="flex flex-col items-start">
                            <h6 className={apercuBold.className}>A fun fact...</h6>
                            <p className="text-sm">{guideFunFact}</p>
                        </div>

                        <div className="flex flex-col items-start">
                            <h6 className={apercuBold.className}>On my days off...</h6>
                            <p className="text-sm">{guideDaysOff}</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="order-0 lg:order-1 flex lg:w-1/3">
                <img src={guidePhoto} alt={guideName} className="object-cover"/>
            </div>
        </section>
    )
}