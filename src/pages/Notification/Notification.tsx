import { IonCard, IonIcon } from "@ionic/react";
import {
    notificationsOutline,
    newspaperOutline,
    cashOutline,
    giftOutline,
    briefcaseOutline,
} from "ionicons/icons";
import PageLayout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";

interface NotificationItem {
    icon: string;
    iconColor: string;
    title: string;
    time: string;
    message: string;
}

const notifications: NotificationItem[] = [
    {
        icon: notificationsOutline,
        iconColor: "text-emerald-500",
        title: "Reminder!",
        time: "23 min",
        message: "Plastering work completed",
    },
    {
        icon: newspaperOutline,
        iconColor: "text-orange-400",
        title: "Your weekly work update!",
        time: "5 hrs",
        message:
            "Your site at Hoskote has completed site clearance. Up next: Foundation work",
    },
    {
        icon: cashOutline,
        iconColor: "text-purple-500",
        title: "Payments Updates",
        time: "1 week",
        message: "Next installment due in 3 days",
    },
    {
        icon: giftOutline,
        iconColor: "text-rose-500",
        title: "Promotion !",
        time: "2 days",
        message: "Festival special discount on design service\nNew premium 3D design templates available",
    },
    {
        icon: briefcaseOutline,
        iconColor: "text-indigo-500",
        title: "Professional !",
        time: "2 week",
        message: "Interior designer shared updated plan",
    },
];

const NotificationPage: React.FC = () => {
    return (
        <PageLayout
            header={<Header title="Notification" type="page" showRightIcon={false} />}
        >
            <div className="px-2 py-1">
                {notifications.map((note, index) => (
                    <IonCard
                        key={index}
                        className="rounded-lg shadow-sm px-4 py-3 mb-3 !bg-gray-100"
                    >
                        <div className="flex items-start gap-3">
                            <div className={`w-6 h-6 rounded-md  bg-${note.iconColor} flex items-center justify-center `}>
                                <IonIcon icon={note.icon} className={`text-xl ${note.iconColor}`} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-sm font-semibold text-custom-black">
                                        {note.title}
                                    </h3>
                                    <span className="text-xs text-gray-500">{note.time}</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
                                    {note.message}
                                </p>
                            </div>
                        </div>
                        
                    </IonCard>
                    
                ))}
               
            </div>
        </PageLayout>
    );
};

export default NotificationPage;
