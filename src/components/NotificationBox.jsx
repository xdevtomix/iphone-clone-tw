export default function NotificationBox() {
    return (
        <div className="relative mt-4 mx-2">
            <div className="p-4 bg-white/40 backdrop-blur-md rounded-3xl shadow">

                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-xs font-bold">9:30 AM</p>
                        <h2 className="text-lg font-bold">Your Morning Summary</h2>
                    </div>
                    <span className="bg-gray-500 h-8 w-8 rounded-full text-white flex items-center justify-center">9</span>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-2">
                    <Notification
                        src="https://cdn.pixabay.com/photo/2013/02/20/07/12/maasai-tribe-83563_960_720.jpg"
                        alt="Jumping men"
                        title="Jumping: heals the soul, kills the quads"
                        text="It's all fun and thrills and you should do it too."
                    />
                    <Notification
                        src="https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592247_960_720.jpg"
                        alt="Running woman"
                        title="The Running season is here"
                        text="Run while you can otherwise you might get fat and you do not want that!"
                    />
                </div>

                <hr className="mt-4 border-black/20" />

                <div className="mt-3 grid grid-cols-3 items-end">
                    <div className="col-span-2">
                        <h3 className="text-xs font-bold">More Updates</h3>
                        <p className="mt-0.5 text-xs">Couple, Red girl, and Serious girl</p>
                    </div>
                    <ul className="flex -space-x-4 flex-row-reverse space-x-reverse">
                        <li>
                            <img className="h-8 w-8 rounded-xl object-cover" src="https://cdn.pixabay.com/photo/2021/08/26/06/24/love-6575234_960_720.jpg" alt="Couple" />
                        </li>
                        <li>
                            <img className="h-8 w-8 rounded-xl object-cover" src="https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_960_720.jpg" alt="Red girl" />
                        </li>
                        <li>
                            <img className="h-8 w-8 rounded-xl object-cover" src="https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959_960_720.jpg" alt="Serious girl" />
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

function Notification({ src, alt, title, text }) {
    return (
        <div>
            <img className="rounded-lg h-24 w-full object-cover" src={src} alt={alt} />
            <h3 className="mt-2 text-xs font-bold leading-tight">{title}</h3>
            <p className="mt-1 text-xs">{text}</p>
        </div>
    );
}