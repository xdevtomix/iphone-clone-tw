import { ChartBarIcon, WifiIcon, TruckIcon, LockOpenIcon, LightBulbIcon, CameraIcon } from '@heroicons/react/solid';

import Notch from './components/Notch';

export default function App() {
  return (
    <div className="grid min-h-screen bg-purple-50 place-items-center">
      <div className="mx-auto h-[712px] w-[350px] bg-black rounded-[60px] border-[14px] border-black relative overflow-hidden ring ring-purple-400 shadow-xl">
        <img className="absolute inset-0 h-full w-full object-cover" src="https://cdn.pixabay.com/photo/2021/06/28/18/36/cereals-6372410_960_720.jpg" />
        <Notch />
      </div>
    </div>
  )
}
