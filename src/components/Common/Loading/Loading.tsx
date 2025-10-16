
import { IonSpinner } from '@ionic/react';

const Loading: React.FC = () => (
  <div className="h-screen w-full flex items-center justify-center">
    <IonSpinner name="crescent" color="primary" className="w-10 h-10" />
  </div>
);

export default Loading;



