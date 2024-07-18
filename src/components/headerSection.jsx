import { Link } from 'react-router-dom';

export default function HeaderDection({ setImage }) {
    return (
        <section className="grow flex flex-col pt-20 justify-center text-center items-center">
            <div className="w-[50%] leading-10 flex gap-6 flex-col">
                <p className=" font-pacifico text-xl text-[rgb(255,137,141)]">
                    jumm into a new time
                </p>

                <h1 className="text-[80px] leading-none font-serif">
                    Meet the new standard in travel
                </h1>
                <p className="text-lg">
                    From booking your flights and accommodations to finding
                    local experts and handling the logistics, your journey is
                    covered from start to finish.
                </p>
                <Link
                    to={'/uploadphoto'}
                    className="px-6 py-3 text-gray-100 self-center text-base font-semibold hover:shadow-xl  shadow-md rounded-lg bg-[rgb(249,144,82)]"
                >
                    Upload Photo
                </Link>
            </div>
        </section>
    );
}
