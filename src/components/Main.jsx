import TimeAndDate from './TimeAndDate';
import NotificationBox from './NotificationBox';

export default function Main() {
    return (
        <div className="relative mt-6">
            <TimeAndDate />

            <NotificationBox />
        </div>
    );
}