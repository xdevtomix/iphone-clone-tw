import { LockOpenIcon } from '@heroicons/react/solid';

export default function TimeAndDate() {
    return (
        <>
            <div className="mt-2 flex flex-col items-center">
                <LockOpenIcon className="h-8 w-8 text-white" />
                <p className="mt-3 text-white text-6xl font-extralight">07:24</p>
                <p className="mt-1 text-white text-lg font-light">Monday, July 24</p>
            </div>
        </>
    );
}