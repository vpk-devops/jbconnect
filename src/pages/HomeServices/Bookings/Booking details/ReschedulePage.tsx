import React from 'react';
import { IonCard, IonCardContent, useIonRouter } from '@ionic/react';
import Header from '../../../../components/Header/Header';
import PageLayout from '../../../../components/Layout/Layout';
import CustomButton from '../../../../components/Common/CustomButton/CustomButton';

const ReschedulePage: React.FC = () => {
	const ionRouter=useIonRouter();
	return (
		<PageLayout
			header={
				<Header
					title="Reschedule"
					type="page"
					showRightIcon={false}
				/>
			}
		>
			<div className="px-4 py-4">
				<IonCard className="mx-auto max-w-md rounded-lg shadow-none bg-[#F2C5C5]">
					<IonCardContent className="px-6 pt-6 pb-7">
						<h3 className="font-inter text-center text-[16px] leading-[26px] font-bold mb-4" style={{ color: '#cf6967', fontWeight: 700 }}>Reschedule Not Available</h3>
						<p className="mx-auto text-center text-[14px] leading-6 text-[#C05757] mb-6 max-w-[360px]">
							This booking cannot be rescheduled as it's within 24 hours of the service time. Please contact the provider directly for assistance.
						</p>
						<div className="flex justify-center mt-4">
							<CustomButton
								text="Back for booking"
								className="min-w-[137px] w-auto h-[36px] px-3 flex items-center justify-center font-inter text-sm leading-[22px] font-normal text-white bg-[#DE3B40] hover:bg-[#C12126] active:bg-[#AA1D22] opacity-100 border-none rounded-md whitespace-nowrap"
							  onClick={() => ionRouter.push("/home-services/bookings", "forward", "push")}
							/>
						</div>
					</IonCardContent>
				</IonCard>
			</div>
		</PageLayout>
	);
};

export default ReschedulePage;
