import React from "react";
import { useParams } from "react-router-dom";
import { routeConfig } from "../../../utils/helpers";

// type RouteParams = {
//   category: string;
//   subCategoryId: string;
//   slug: string;
// };
type RouteParams = {
  category: string;
  subCategorySlug: string;
  slug: string;
};

const ServiceDetailRouter: React.FC = () => {
  const { category, subCategorySlug, slug } = useParams<RouteParams>();

  const Component = routeConfig[subCategorySlug];
  if (!Component) return <div>Service not found</div>;
  return <Component slug={slug} subCategorySlug={subCategorySlug} />;
};

export default ServiceDetailRouter;
