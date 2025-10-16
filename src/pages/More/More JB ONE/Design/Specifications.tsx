import { IonContent } from "@ionic/react";
import PageLayout from "../../../../components/Layout/Layout";
import Header from "../../../../components/Header/Header";
import {

  documentOutline,
  documentTextOutline,
} from "ionicons/icons"; 


// Project & Site details data
const details = [
  { label: "Project Status", value: "Design Development" },
  { label: "Site Address", value: "Street 12." },
  { label: "Site City", value: "Banguluru" },
  { label: "Site Postcode", value: "562114" },
  { label: "Site Country", value: "India" },
  { label: "Site Gross Area", value: <span className="text-blue-700 underline">2009.75 m2</span> },
  { label: "Building Name", value: "Modern Villa" },
  { label: "Building ID", value: "A" },
  { label: "Building Gross Area", value: "224 m2" },
  { label: "Published Date", value: "2025 Jan 23" },
];

// Individual sections data
const sections = [
  { title: "Project Name", value: "House Villa" },
  { title: "Project Description", value: "Hyper Model" },
  { title: "Keywords", value: "Residential, Family House" },
  { title: "Site Full Address", value: "Street 12., Hoskote, banguluru" },
  { title: "Contact Company", value: "JbOne" },
  { title: "Contact Web", value: "www.jbone.com" },
  { title: "Legal", value: "This file is copyrighted and owned by Reload Architects, Hungary. You are not allowed to copy, share, or use any part of it—especially for designing other buildings—without written permission. If you do, you'll be responsible for any harm or legal issues caused to copyright owner." },
  { title: "Archicad Version", value: "Cad 28 (3001 MAC)" },
  { title: "Model Site Link", value: "Hyper Model" },
];

const Specifications: React.FC = () => {
  return (
  <PageLayout
      header={<Header title="Specifications" type="page" showRightIcon={false} />}
    >
      <IonContent className="bg-white font-archivo">
        {/* Project & Site details section */}
        <div className="max-w-xl mx-auto mt-2">
          <div className="bg-[#e9eef1] px-8 py-3">
            <span className="text-[#234669] font-bold text-[16px] font-archivo">
              Project & Site details
            </span>
          </div>
          <div className="divide-y divide-gray-300">
            {details.map((item, idx) => (
              <div key={idx} className="grid grid-cols-2 gap-4 px-8 py-3">
                <span className="font-bold text-gray-900 font-archivo">
                  {item.label}
                </span>
                <span className="text-left text-[#9095a1] font-archivo">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Individual sections */}
        {sections.map((section, idx) => (
          <div key={idx} className="max-w-xl mx-auto mt-4">
            <div className="bg-[#e9eef1] px-8 py-3">
              <span className="text-[#234669] font-bold text-[14px] font-archivo">
                {section.title}
              </span>
            </div>
            <div className="px-8 pt-3 flex align-center bg-white text-[#9095a1] font-archivo text-left">
              <span className="block">
                {section.value || <span className="text-gray-400">—</span>}
              </span>
            </div>
          </div>
        ))}

      </IonContent>
    </PageLayout>
  );
};

export default Specifications;
