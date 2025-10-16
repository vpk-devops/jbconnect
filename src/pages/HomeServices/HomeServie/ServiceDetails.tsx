import React, { Key, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { star, timeOutline, calendarOutline } from "ionicons/icons";
import Header from "../../../components/Header/Header";
import PageLayout from "../../../components/Layout/Layout";
import CustomButton from "../../../components/Common/CustomButton/CustomButton";
import axios from "axios";
import { fetchAgentById, fetchAgents } from "../../../features/home-services/ProfessionalAgent/agentThunk";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import expert1 from '/assets/images/cleaning1.jpg';
import expert2 from '/assets/images/cleaning1.jpg';

const providers: Provider[] = [
  {
    id: 'p1', name: 'Emily Taylor', distance: '0.9 km away', rating: 4.4, jobs: '10/h', response: 'Response <1 hour', availability: 'Available today', verified: true, avatar: expert1,
    _id: ""
  },
  {
    id: 'p2', name: 'Brian White', distance: '2 km away', rating: 4.4, jobs: '10/h', response: 'Response <2 hour', availability: 'Available tomorrow', verified: true, avatar: expert2,
    _id: ""
  },
];
// ---------- UI Helpers ----------
const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="px-2 mt-2">
    <div className="bg-white rounded-lg p-4 [box-shadow:0px_8px_17px_#171a1f26,0px_0px_2px_#171a1f1F]">
      <h3 className="text-[#6096BA] text-[16px] font-bold mb-2">{title}</h3>
      {children}
    </div>
  </div>
);

const Chip: React.FC<{ text: string }> = ({ text }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#AFCBFF] text-[#274C77] font-inter text-[14px] leading-[22px] font-medium whitespace-nowrap">
    {text}
  </span>
);

const Pill: React.FC<{ icon: any; text: string; bg: string; border: string; color: string }> = ({ icon, text, bg, border, color }) => (
  <span
    className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] rounded-full border whitespace-nowrap"
    style={{ background: bg, borderColor: border, color }}
  >
    <IonIcon icon={icon} className="w-3 h-3" /> {text}
  </span>
);

const HexagonBullet: React.FC<{ size?: number; color?: string; stroke?: number }> = ({ size = 16, color = "#6096BA", stroke = 2.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <polygon
      points="12,2 20,7 20,17 12,22 4,17 4,7"
      stroke={color}
      strokeWidth={stroke}
      fill="transparent"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ---------- Types ----------
type Specialist = { name: string; experience: number };
type Provider = {
  id: Key | null | undefined;
  _id: string;
  name: string;
  distance?: string;
  rating?: number;
  jobs?: string;
  response?: string;
  availability?: string;
  verified?: boolean;
  avatar?: string;
};
type Service = {
  _id: string;
  name: string;
  description: string;
  image: string;
  profession: string;
  rating?: number;
  specialists?: Specialist[];
  providers?: Provider[];
};

// ---------- ProviderCard ----------
const ProviderCard: React.FC<{ p: Provider }> = ({ p }) => (
  <div className="rounded-[6px] bg-white border border-[#6096BA] [box-shadow:0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F]">
    <div className="flex items-center justify-between px-2 py-2 gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-[#B6C8DA]">
          <img src={p.avatar ?? "/assets/images/default-avatar.png"} alt={p.name} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-[#1F2937] truncate max-w-[180px]">{p.name}</p>
            {p.verified && <span className="inline-flex items-center text-[11px] px-2 py-[2px] rounded-full bg-[#E5E7EB] text-[#111827]">Verified</span>}
          </div>
          <div className="text-[12px] text-[#9CA3AF]">{p.distance}</div>
          <div className="mt-1 flex items-center gap-2">
            {p.rating && <Pill icon={star} text={String(p.rating)} bg="#FDE68A" border="#FCD34D" color="#92400E" />}
            {p.jobs && <Pill icon={timeOutline} text={p.jobs} bg="#F5D0FE" border="#F0ABFC" color="#86198F" />}
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[13px] text-[#111827]">{p.response}</p>
        <p className="text-[12px] font-medium text-[#15803D]">{p.availability}</p>
      </div>
    </div>
  </div>
);

// ---------- Main ----------
const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { currentAgent } = useAppSelector((state) => state.agent);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchAgentById(id));
    }
  }, [id, dispatch]);

  if (!currentAgent) return <p className="text-center mt-10">Loading...</p>;

  return (
    <PageLayout header={<Header title="Service Details" type="page" showRightIcon={false} />}>
      <div className="pb-6">
        {/* Hero */}
        <div className="relative h-[243px] w-full overflow-hidden">
          <img src={currentAgent.image} alt={currentAgent.name} className="w-full h-full object-cover rounded" />
          <div className="absolute inset-0 rounded bg-[#F8F9FA66]" />
          <h2 className="absolute left-6 top-6 font-bold text-[16px] text-[#274C77]">{currentAgent.name}</h2>
          <div className="absolute left-6 top-[52px]">
            <Chip text={currentAgent.profession} />
          </div>
        </div>

        {/* About */}
        <SectionCard title="About This Service">
          <p className="text-xs text-[#6B7280] leading-5">{currentAgent.description}</p>
        </SectionCard>

        {/* Specialists */}
        {currentAgent.specialists && currentAgent.specialists.length > 0 && (
          <SectionCard title="Specialists">
            <ul className="space-y-2">
              {currentAgent.specialists.map((sp, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-[#111827]">
                  <HexagonBullet />
                  <span>{sp.name} - {sp.experience} yrs</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        )}

        {/* Providers */}
        {/* {currentAgent.name && currentAgent.name.length > 0 && (
          <div className="px-4 mt-3">
            <h3 className="text-[#6096BA] text-[16px] font-bold mb-2">Available Providers</h3>
            <div className="space-y-3">
              {providers.map((p) => (
                <ProviderCard key={p._id} p={p} />
              ))}
            </div>
          </div>
        )} */}

        <div className="px-3 mt-4">
          <h3 className="text-[#6096BA] text-[16px] font-bold mb-2">Available Providers</h3>
          <div className="space-y-3">
            {providers.map((p) => (
              <ProviderCard key={p.id} p={p} />
            ))}
          </div>
        </div>


        {/* CTA */}
        <div className="px-4 mt-6 flex justify-center">
          <CustomButton
            text="Book this Service"
            icon={calendarOutline}
            onClick={() => { }}
            className="w-[237px] h-[36px] flex items-center justify-center font-inter text-[14px] text-white bg-[#274C77] rounded-[6px] gap-[6px]"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default ServiceDetails;
