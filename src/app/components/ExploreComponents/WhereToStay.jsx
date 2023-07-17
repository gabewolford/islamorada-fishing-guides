export default function WhereToStay({ resortsList }) {
    return (
        <>
            <h3 className="text-2xl md:text-3xl bold mb-8">Where to stay</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-y-16 justify-center">
                {resortsList}
            </div>
        </>
    )
}