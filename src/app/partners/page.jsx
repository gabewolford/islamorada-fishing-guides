import Breadcrumbs from "../components/PartnersComponents/Breadcrumbs"
import GetPartners from '../api/GetPartners'
import Footer from "../components/Footer/footer"

export default function PartnersPage() {
    
    return (
        <>
            <div className="mx-auto max-w-7xl pt-16 md:pt-24 pb-8 md:pb-0 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Breadcrumbs />
                    <GetPartners />
                </div>
            </div>
            <Footer />
        </>

    )      
}
