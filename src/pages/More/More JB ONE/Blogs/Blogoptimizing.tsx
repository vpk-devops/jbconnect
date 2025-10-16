import { IonIcon } from "@ionic/react";
import { useIonRouter } from "@ionic/react";
import {
  chevronBackOutline,
  documentTextOutline,
  helpCircleOutline,
  bulbOutline,
  cogOutline,
  flagOutline,
  trendingUpOutline
} from "ionicons/icons";
import Header from "../../../../components/Header/Header";
import PageLayout from "../../../../components/Layout/Layout";
import { useParams } from "react-router";
import { useAppSelector } from "../../../../app/hooks";


const BlogOptimizing: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { blogs } = useAppSelector((state) => state.blogs);

  const blog = blogs.find((b: any) => b._id === id);

  if (!blog) return <p className="text-center mt-10">Blog not found</p>;

  const contentSections = [
    {
      icon: helpCircleOutline,
      title: "Why It Matters",
      content:
        "Delays in construction cost time and money. Learn how to plan better, coordinate teams, and use tech to stay on schedule.",
      type: "text"
    },
    {
      icon: bulbOutline,
      title: "Quick Tips",
      items: [
        "Plan clearly and define the scope early.",
        "Use project management tools to track progress.",
        "Meet regularly and keep communication open.",
        "Buy materials early and plan sequences.",
        "Prepare for risks with backup plans."
      ],
      type: "list"
    },
    {
      icon: cogOutline,
      title: "Helpful Technologies",
      items: [
        <><span className="font-bold">Drones:</span> Track site progress from above.</>,
        <><span className="font-bold">AI Tools:</span> Predict delays and plan resources.</>,
        <><span className="font-bold">BIM:</span> Spot issues before construction begins.</>
      ],
      type: "list"
    },
    {
      icon: flagOutline,
      title: "Benefits",
      items: [
        "Happier clients and fewer delays",
        "Lower costs and better use of workers",
        "Improved teamwork and delivery"
      ],
      type: "list"
    },
    {
      icon: trendingUpOutline,
      title: "Final Thoughts",
      content:
        "Smart scheduling and tech can make every project smoother and more successful. Plan well, stay flexible, and use the right tools to build better.",
      type: "text"
    }
  ];

  return (
    <PageLayout
  header={
    <Header
      title={blog.title}
      subtitle={`By ${blog.author} • ${new Date(blog.publishedAt).toLocaleDateString()}`}
       titleIcon={documentTextOutline}
      titleColor="text-custom-blue"
      type="page"
      showRightIcon={false}
      variant="subtitle"  
    />
  }
>
      <div className="max-w-2xl mx-auto mt-2">
        {/* Main Image */}
        <div className="relative">
          <img
            src="/assets/images/blogs.jpg"
            alt="Construction workers on site"
            className="w-full h-64 object-cover"
          /> 
           {/* <img
            src={blog.images?.[0]?.replace(
              "C:\\Users\\snkis\\Downloads\\BACKEND\\BACKEND\\Content-Services\\uploads\\",
              "/uploads/"
            ) || "/assets/images/blogs.jpg"}
            alt={blog.title}
            className="w-full h-64 object-cover"
          /> */}
          <div className="absolute bottom-4 left-4">
            <span className="bg-[#274c77] text-white text-sm font-medium px-4 py-2 rounded-full">
           {blog.tags?.[0] || "General"}
            </span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="px-4 py-6">
          {contentSections.map((section, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-center mb-2">
                <IonIcon icon={section.icon} className="w-6 h-6 text-[#274c77] mr-2" />
                <h2 className="text-lg font-bold text-[#274c77]">{section.title}</h2>
              </div>
              {section.type === "text" && (
                <p className="text-sm text-gray-700 leading-relaxed ml-8">
                  {section.content}
                </p>
              )}
              {section.type === "list" && (
                <ul className="space-y-2 ml-8 list-disc">
                  {section.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogOptimizing;
