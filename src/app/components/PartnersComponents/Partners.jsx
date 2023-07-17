export default function Partners({ partnersList }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-center">
            {partnersList}
        </div>
    )
}