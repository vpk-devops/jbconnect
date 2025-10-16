import Header from "../../components/Header/Header";
import { IonContent, IonPage, IonSearchbar } from '@ionic/react';
import PageLayout from "../../components/Layout/Layout";
import { builders, constructionOptionsData, constructionStagesData, offers } from './data';
import { ConstructionOptions, SpecialOfferCard, ConstructionStages, ConstructionBuilderCard, ReadyToBuildCard } from "./ConstructionReusableCards";
import CustomSwiperComponent from "../../components/Common/CustomSwiperSlider/CustomSwiperComponent";



const ConstructionPage: React.FC = () => {
  return (
    <PageLayout header={<Header title="Construction" />}>
      <IonContent fullscreen className="bg-gray-50" >

        {/* Hero Section */}
        <div className="relative w-full h-[200px] rounded-bl-3xl rounded-br-3xl overflow-hidden md:h-[350px]">

          <img src="/assets/images/construction.jpg"
            alt="House"
            className="w-full h-full object-cover"
          />

          <div className="absolute  inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
            {/* <IonSearchbar
          placeholder="Search services, professionals..."
          className="custom-search !pt-0 !pb-0 "
        /> */}
            <h1 className="text-white font-bold text-2xl md:text-6xl">
              Build Your Dream Home
            </h1>
            <p className="text-white text-sm md:text-2xl md:mt-3 mt-2">
              Start Fresh or Continue from Any Stage
            </p>
          </div>
        </div>

        {/* Options Section */}
        <CustomSwiperComponent
          items={constructionOptionsData}
          slidesPerView={2}
          spaceBetween={-15}
          autoplay={true}
          pagination={false}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          renderItem={(option, idx) => (
            <ConstructionOptions key={idx} options={[option]} stages={[]} />
          )}
        />
        <ConstructionStages stages={constructionStagesData} options={[]} />
        <div className="px-4 my-3">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Special Offers</h2>

          <CustomSwiperComponent
            items={offers}
            slidesPerView={1.2}
            spaceBetween={12}
            autoplay={true}
            pagination={false}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            renderItem={(offer, idx) => <SpecialOfferCard key={idx} {...offer} />}
          />
        </div>
        {/* Bulder cards */}
        <div className="mx-4 mt-4">
          <h3 className="text-lg font-semibold text-custom-blue mb-2 px-1">
            Top Builders
          </h3>

          <CustomSwiperComponent
            items={builders}
            slidesPerView={1}
            spaceBetween={16}
            autoplay={true}
            pagination={false}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            renderItem={(builder, idx) => (
              <ConstructionBuilderCard key={idx} {...builder} />
            )}
          />

        </div>
        <ReadyToBuildCard />
      </IonContent>
    </PageLayout>
  )
}
export default ConstructionPage;