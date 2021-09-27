import { LightBulbIcon, CameraIcon } from '@heroicons/react/solid';

export default function Footer() {
    return (
        <div className="absolute bottom-0 inset-x-0 h-20">
            <div className="px-10 flex justify-between">
                <button className="bg-gray-800/40 backdrop-blur-md text-white rounded-full p-2">
                    <LightBulbIcon className="h-6 w-6" />
                </button>
                <button className="bg-gray-800/40 backdrop-blur-md text-white rounded-full p-2">
                    <CameraIcon className="h-6 w-6" />
                </button>
            </div>
            <div className="absolute bottom-1 inset-x-0">
                <div className="mx-auto h-1 w-28 rounded bg-white"></div>
            </div>
        </div>
    );
}