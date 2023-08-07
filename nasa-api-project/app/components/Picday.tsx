import getPicOfDay from "@/lib/getPicOfDay";

export default async function Picday() {
    const pic: Promise<Picture> = getPicOfDay()
    const picData = await pic

    return (
        <div className="flex flex-col items-center w-[75%] bg-gray-800 text-white rounded-lg shadow-lg p-8 pt-12">
            <h1 className="text-3xl font-bold mb-10">Astronomical Pic of the Day</h1>
            <div className="main-content flex items-center mb-10">
                <img src={picData.url} width={600} alt={picData.title} className="rounded-lg shadow-md mr-8" />
                <div className="text-content">
                    <h2 className="text-2xl font-semibold mb-4">{picData.title}</h2>
                    <p className="text-base">{picData.explanation}</p>
                </div>
            </div>
        </div>
    )
}