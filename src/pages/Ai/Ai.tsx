import Header from "../../components/Header/Header";
import { IonContent,  IonPage } from '@ionic/react';
import PageLayout from "../../components/Layout/Layout";

const Ai: React.FC = () => {
    return(
        <PageLayout header={<Header title="Ai" />}>
        
      
        <div className="p-4">
          <p className="text-red-500 font-bold">This is the Ai Page content.</p>
          <p>It's styled by Tailwind and sits inside the main content area.</p>
        </div>
</PageLayout>
    )
}
export default Ai;