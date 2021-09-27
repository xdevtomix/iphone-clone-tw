import { ChartBarIcon, WifiIcon, TruckIcon } from '@heroicons/react/solid';

export default function NotificationBar() {
    return (
        <>
            <div className="mr-5 mt-2 flex justify-end space-x-1">
                <ChartBarIcon className="h-4 w-4 text-white" />
                <WifiIcon className="h-4 w-4 text-white" />
                <TruckIcon className="h-4 w-4 text-white" />
            </div>
            <div className="h-0.5 w-10 mt-1.5 mr-7 bg-white rounded ml-auto"></div>
        </>
    );
}