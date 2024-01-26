import GetGuideDetails from "../../api/GetGuideDetails";
import Footer from "../../components/Footer/footer";

export default async function GuideDetailsPage() {
  return (
    <>
      <div
        id="remove-padding"
        className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn"
      >
        <div className="mx-6 lg:mx-20 mb-16">
          <GetGuideDetails />
        </div>
      </div>
      <Footer />
    </>
  );
}
