import { IonContent, IonIcon, IonCard, useIonRouter } from "@ionic/react";
import { searchOutline, shareSocialOutline } from "ionicons/icons";
import PageLayout from "../../../../components/Layout/Layout";
import Header from "../../../../components/Header/Header";
import { useEffect, useState } from "react";
import CustomButton from '../../../../components/Common/CustomButton/CustomButton';
import CustomSwiperComponent from "../../../../components/Common/CustomSwiperSlider/CustomSwiperComponent";
import { fetchBlogs } from "../../../../features/blogs/blogsThunk";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

const recentPosts = [
    { title: "Understanding Construction Contracts", time: "7 min read" },
    { title: "Tips for Effective Subcontractor Management", time: "6 min read" },
    { title: "The Fast Track to Building: Pre-Built and Ready to Go", time: "5 min read", },
    { title: "Navigating Permit Applications Simplified", time: "4 min read" },
    { title: "Using Drones for Site Surveys", time: "8 min read" },
    { title: "Construction Finance: Managing Cash Flow", time: "7 min read" },
    { title: "Choosing the Right Heavy Equipment", time: "6 min read" },
    { title: "Insuring Your Construction Projects", time: "5 min read" },
];
const categories = [
    "Project Management",
    "Technology",
    "Sustainability",
    "Safety",
    "Business",
    "Residential",
    "Commercial",
    "Tips & Tricks",
    "Industry News",
    "Renovation",
];
const BlogsPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const router = useIonRouter();
    const dispatch = useAppDispatch();
    const { blogs, loading } = useAppSelector((state) => state.blogs);
    console.log("blogs", blogs);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    useEffect(() => {
        dispatch(fetchBlogs({ page: 1, limit: 5 }));
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch(fetchBlogs({ serviceType: "construction", page: 1, limit: 5 }));

    // }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    const tags = Array.from(
        new Set(blogs.flatMap((blog: any) => blog.tags || []))
    );
    const filteredBlogs = blogs.filter((blog: any) => {
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = selectedTag ? blog.tags?.includes(selectedTag) : true;
        return matchesSearch && matchesTag;
    });
    const blogItems = [1, 2, 3, 4];
    return (
        <PageLayout
            header={<Header title="Blogs" type="page" showRightIcon={false} />}
        >
            <IonContent className="bg-[#E6F0FA] ">
                <div>
                    <CustomSwiperComponent
                        items={blogItems}
                        slidesPerView={1}
                        spaceBetween={16}
                        autoplay
                        pagination={false}
                        breakpoints={{
                            640: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="mb-2"
                        renderItem={(item, i) => (
                            <div className="relative w-full overflow-hidden shadow-md">
                                <img
                                    src="/assets/images/blogs.jpg"
                                    alt="Construction"
                                    className="w-full h-64 object-cover sm:h-72 md:h-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-5 flex flex-col justify-end">
                                    <span className="bg-custom-blue text-white text-xs font-medium px-4 py-1 rounded-full w-max mb-2">
                                        Industry Insight
                                    </span>
                                    <h3 className="text-white font-bold text-xl sm:text-2xl font-inter leading-tight">
                                        AI-Powered Predictive Maintenance in Construction
                                    </h3>
                                    <p className="text-white font-inter text-sm mt-1">
                                        Discover how AI algorithms are being used to predict
                                        equipment failures in construction, reducing downtime and
                                        saving costs.
                                    </p>
                                </div>
                            </div>
                        )}
                    />
                </div>
                {/* Search */}
                <div className="relative mb-4 mx-2">
                    <input
                        type="text"
                        placeholder="Search Blog..."
                        className="w-full pl-4 pr-10 py-2 bg-white-300 rounded-md text-sm border border-gray-300 focus:outline-none"
                    />
                    <IonIcon
                        icon={searchOutline}
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                </div>
                {/* <div className="space-y-3">
                    {["Business", "Technology", "Residential"].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 shadow-sm cursor-pointer hover:bg-gray-100"
                        >
                            <IonIcon icon={searchOutline} className="text-gray-500" />
                            {item}
                        </div>
                    ))}
                </div> */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)} // toggle
                            className={`rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium shadow-sm cursor-pointer
        ${selectedTag === tag ? "bg-custom-blue text-white" : "bg-white text-gray-700 hover:bg-gray-100"}
      `}
                        >
                            <IonIcon icon={searchOutline} className="text-gray-500" />
                            {tag}
                        </div>
                    ))}
                </div>

                {/* Featured Articles */}
                <h2 className="text-xl font-inter font-bold text-custom-blue text-center mt-4">
                    Featured Articles
                </h2>
                <CustomSwiperComponent
                    items={blogs}
                    slidesPerView={1}
                    spaceBetween={16}
                    autoplay
                    pagination={false}
                    breakpoints={{
                        640: { slidesPerView: 1.2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mb-6"
                    renderItem={(blog, i) => (
                        <div
                            key={blog._id}
                            onClick={() => router.push(`/blogs/${blog._id}`, "forward")}
                            className="bg-white rounded-lg shadow-sm overflow-hidden border border-[#D6E1F0] max-w-md mx-auto cursor-pointer"
                        >
                            {/* Blog Image */}
                            <div className="relative">
                                {/* <img
                                    src={blog.images?.[0]?.replace("C:\\Users\\snkis\\Downloads\\BACKEND\\BACKEND\\Content-Services\\uploads\\", "/uploads/")}
                                    alt={blog.title}
                                    className="w-full h-60 object-cover"
                                /> */}  <img
                                    src="/assets/images/blogs.jpg"
                                    alt="Article"
                                    className="w-full h-60 object-cover"
                                />
                                <span className="absolute bottom-2 left-2 bg-custom-blue text-white text-sm font-medium px-4 py-1 rounded-full">
                                    {blog.tags?.[0] || "General"}
                                </span>
                            </div>

                            {/* Blog Content */}
                            <div className="p-6">
                                <div className="flex justify-between">
                                    <h3 className="text-xl font-inter font-bold text-custom-black leading-tight mb-1">
                                        {blog.title}
                                    </h3>
                                    <IonIcon
                                        icon={shareSocialOutline}
                                        className="text-custom-black text-2xl"
                                    />
                                </div>
                                <p className="text-sm font-inter text-gray-600 my-2 line-clamp-3">
                                    {blog.description}
                                </p>

                                <div className="flex justify-between items-center text-sm font-inter text-gray-500 mt-4">
                                    <span>By {blog.author}</span>
                                    <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    )}
                />
                {/* rexent Posts */}
                <h2 className="text-xl font-inter font-bold text-custom-blue text-center mb-4">
                    Recent Posts{" "}
                </h2>
                <div className=" rounded-lg shadow-md border  py-2 mx-4 font-inter">
                    {recentPosts.map((post, index) => (
                        <div key={index} className="px-4 py-1">
                            <h3 className="text-sm font-semibold text-custom-black">
                                {post.title}
                            </h3>
                            <p className="text-xs text-gray-500">{post.time}</p>
                            <hr className="my-2 text-gray-500" />
                        </div>

                    ))}
                </div>
                {/* popular categories */}
                <h2 className="text-xl font-inter font-bold text-custom-blue text-center my-4">
                    Popular Categories
                </h2>
                <IonCard className="flex flex-wrap gap-2 shadow-lg p-4 mx-4 border border-gray-200 rounded-b-lg mb-6">
                    {categories.map((cat, index) => (
                        <span
                            key={index}
                            className="text-sm bg-white font-inter text-[#1A2B4F] border border-custom-blue px-4 py-1 rounded-full whitespace-nowrap my-1"
                        >
                            {cat}
                        </span>
                    ))}
                </IonCard>
                {/* Newsletter Card */}
                <IonCard className="bg-white rounded-lg shadow-lg px-4 py-6 mx-4 border border-gray-200 flex flex-col items-center">
                    <h3 className="text-center text-xl  font-bold text-[#1A2B4F]">
                        Stay Updated on <br />Construction Insights
                    </h3>
                    <p className="text-base text-gray-600 w-70 font-inter text-center mt-2">
                        Subscribe to our newsletter to receive the latest articles,
                        industry news, and project updates directly in your inbox.
                    </p>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-4 w-80 px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none"
                    />

                    <CustomButton text="Subscribe for newsletter" className="!mt-4 w-70 bg-custom-blue font-inter text-white text-base font-medium rounded-md" />

                </IonCard>
            </IonContent>
        </PageLayout>
    );
};

export default BlogsPage;
