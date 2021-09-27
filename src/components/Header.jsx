import Notch from './Notch';
import NotificationBar from './NotificationBar';

export default function Header() {
    return (
        <div className="relative h-6">
            <Notch />
            <NotificationBar />
        </div>
    );
}