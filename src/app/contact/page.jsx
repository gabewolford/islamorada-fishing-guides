import Breadcrumbs from "../components/ContactComponents/Breadcrumbs"
import ContactForm from "../components/ContactComponents/ContactForm"

export default function ContactPage() {

    return (
        <>
            <head>
                <title>Islamorada Fishing Guides | Contact Us</title>
                <link rel="icon" href="/images/tan-favicon.png"/>
            </head>
            <div className="mx-auto max-w-7xl pt-16 md:pt-24 pb-12 md:pb-0 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Breadcrumbs />
                    <ContactForm />
                </div>
            </div>
        </>
    )      
}