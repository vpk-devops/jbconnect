import { IonPage, IonContent } from '@ionic/react';


const PageLayout: React.FC<{ header?: React.ReactNode;  children: React.ReactNode }> = ({
  header,
  children,
}) => {
  return (
    <IonPage>
      {header && header}
      <IonContent fullscreen>{children}</IonContent>
    
    </IonPage>
  );
};

export default PageLayout;
