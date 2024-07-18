export default function ImageSection() {
    return (
        <section className="py-28">
            <div className=" flex mx-auto flex-col justify-center content-center w-2/3">
                <img
                    src="/FB_IMG_1703828618188.jpg"
                    alt="shajar image"
                    className="w-max"
                />
                <div className="text-center flex flex-col gap-7 py-28 w-2/3 self-center">
                    <h2 className="font-pacifico text-5xl text-gray-800 font-thin">
                        Experince a new era
                    </h2>
                    <p className="text-lg">
                        Embrace seamless journeys, authentic encounters, and
                        unforgettable experiences, all at your fingertips.
                    </p>
                </div>
            </div>
        </section>
    )
}
