const data = [
    {
        Image: '/FB_IMG_1703828618188.jpg',
        heading: 'Get ready',
        message:
            'Your role? To anticipate a seamless, stress-free journey, with every detail attended to, effortlessly.',
    },
    {
        Image: '/FB_IMG_1703828618188.jpg',
        heading: 'Journey plan',
        message:
            "The app will craft your entire journey. It's like having a travel expert in your pocket, that can modify any detail instantly.",
    },
    {
        Image: '/FB_IMG_1703828618188.jpg',
        heading: 'Tailored stays',
        message:
            'Whether you prefer luxurious hotels or unique Airbnb listings, the app will find your perfect place at every step.',
    },
];

// shajar mehar is here please help ,me in doing all of this beacuse i am mnot ready fr this thsi is her first time
export default function Cards() {
    return (
        <>
            <div className="flex dark:bg-slate-800  flex-wrap gap-4 ">
                {data.map((el, index) => (
                    <div
                        className={`flex gap-4 transition delay-300 ease-in-out duration-500 hover:-translate-x-44 hover:-translate-y-40 hover:bg-blue-300/25 items-center p-10 shadow-2xl flex-col flex-1 ${index === 2 ? '-order-' : ''}`}
                        key={index}
                    >
                        <img
                            src={el.Image}
                            alt="shajar pic"
                            // className=""
                            width={'300px'}
                            height={'300px'}
                            className="hover:center hover:rotate-45 rounded-3xl"
                        />
                        <h3 className="text-4xl text-gray-700">{el.heading}</h3>
                        <p className="text-2xl text-center">{el.message}</p>
                    </div>
                ))}
            </div>
            <h3 className="text-4xl my-20">Grid cols start here</h3>
            <div className="bg-red-400 justify-items-stretch my-40 h-[300px] grid-cols-4 grid-rows-3 grid gap-4">
                <div className=" row-span-full bg-black">1</div>
                <div className=" bg-yellow-400">2</div>
                <div className=" bg-slate-3">3</div>
                <div className=" bg-pink-500">4</div>
                <div className=" bg-amber-300">5</div>
                <div className=" bg-red-900">6</div>
                <div className=" bg-gray-800">7</div>
                <div className=" bg-white">8</div>
                <div className=" bg-gray-300">9</div>
            </div>
        </>
    );
}
