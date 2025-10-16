import React from "react";
import { IonContent } from "@ionic/react";
import PageLayout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";

const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white rounded-[12px] p-4 shadow-[0_8px_17px_#171a1f26,0_0_2px_#171a1f1F]">
    <h2 className="text-[16px] font-semibold mb-2 text-[#171A1F]">{title}</h2>
    <div className="text-[14px] leading-6 text-[#111827]">{children}</div>
  </div>
);

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block bg-[#EAF1F9] text-[#274C77] text-[12px] leading-[18px] px-3 py-[2px] rounded-full mr-2 mb-2">
    {children}
  </span>
);

const RequirementGuide: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const section = (params.get('section') || 'architecture').toLowerCase();

  const isArch = section.includes('arch');
  const is2D = section.includes('2d');
  const is3D = section.includes('3d');

  return (
    <PageLayout header={<Header title="Requirement Guide" />}> 
      <IonContent>
        <div className="px-4 py-4 max-w-screen-sm mx-auto">
          <div className="space-y-3">
            {(isArch || (!is2D && !is3D)) && (
            <SectionCard title="1. Architecture Design Services">
              <p className="mb-2">These involve the conceptual and technical planning of buildings and structures:</p>
              <div className="space-y-2">
                <div>
                  <h4 className="text-[14px] font-semibold">A. Conceptual Design</h4>
                  <ul className="list-disc pl-5">
                    <li>Site analysis and feasibility studies</li>
                    <li>Space planning and zoning</li>
                    <li>Initial sketches and concept drawings</li>
                    <li>Design themes and architectural styling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold">B. Schematic Design</h4>
                  <ul className="list-disc pl-5">
                    <li>Floor plans, elevations, and sections</li>
                    <li>Spatial arrangements and circulation plans</li>
                    <li>Basic material selections</li>
                    <li>Landscape layout concepts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold">C. Design Development</h4>
                  <ul className="list-disc pl-5">
                    <li>Refined architectural drawings</li>
                    <li>Structural layout integration</li>
                    <li>Plumbing, Electrical, HVAC coordination</li>
                    <li>Compliance with building codes and standards</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold">D. Construction Documents</h4>
                  <ul className="list-disc pl-5">
                    <li>Detailed blueprints for construction</li>
                    <li>Working drawings (civil, structural, MEP)</li>
                    <li>Material specifications and bill of quantities (BOQ)</li>
                    <li>Permit and approval documentation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold">E. Site & Project Supervision</h4>
                  <ul className="list-disc pl-5">
                    <li>Site layout planning</li>
                    <li>Design implementation checks</li>
                    <li>Coordination with contractors and vendors</li>
                    <li>Regular site visits and progress validation</li>
                  </ul>
                </div>
              </div>
            </SectionCard>
            )}

            {(is2D || (!isArch && !is3D)) && (
            <SectionCard title="2. 2D Design Services">
              <ul className="list-disc pl-5">
                <li>Architectural floor plans</li>
                <li>Elevation and section views</li>
                <li>Site layouts and landscaping</li>
                <li>Furniture layout plans</li>
                <li>Interior detailing drawings</li>
                <li>Reflected ceiling plans (RCP)</li>
                <li>Electrical and plumbing layout (2D)</li>
              </ul>
            </SectionCard>
            )}

            {(is3D || (!isArch && !is2D)) && (
            <SectionCard title="3. 3D Design Services">
              <p className="mb-2">Used for visualizing the space before execution and for marketing or client approvals:</p>
              <div className="space-y-2">
                <div>
                  <h4 className="text-[14px] font-semibold">A. 3D Modeling</h4>
                  <ul className="list-disc pl-5">
                    <li>Interior and exterior models of buildings</li>
                    <li>Product and furniture modeling</li>
                    <li>Landscaping and terrain modeling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold">B. 3D Rendering</h4>
                  <ul className="list-disc pl-5">
                    <li>Photorealistic images (day/night views)</li>
                    <li>Walkthroughs and flythroughs</li>
                    <li>Material and lighting simulations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold">C. 3D Visualization for Interiors</h4>
                  <ul className="list-disc pl-5">
                    <li>Room-wise interior mockups</li>
                    <li>Modular kitchen and wardrobe design</li>
                    <li>Lighting and décor visualization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold">D. BIM (Building Information Modeling)</h4>
                  <ul className="list-disc pl-5">
                    <li>Integrated 3D modeling with structural/MEP info</li>
                    <li>Clash detection between services</li>
                    <li>Quantity take-offs and project simulations</li>
                  </ul>
                </div>
              </div>
              <div className="mt-2">
                <h4 className="text-[14px] font-semibold">Tools commonly used</h4>
                <p className="text-[14px] leading-6">SketchUp, 3ds Max + V-Ray, Lumion, Blender, Revit (BIM), Rhino, Enscape, AutoCAD 3D</p>
              </div>
            </SectionCard>
            )}
          </div>

          {/* Full content  */}
          <details className="mt-3 mb-3">
            <summary className="cursor-pointer text-[14px] font-semibold text-[#23446C]">View full content </summary>
            <div className="mt-2 space-y-3">
              <SectionCard title="1. Architecture Design Services">
                <p className="mb-2">These involve the conceptual and technical planning of buildings and structures:</p>
                <div className="space-y-2">
                  <div>
                    <h4 className="text-[14px] font-semibold">A. Conceptual Design</h4>
                    <ul className="list-disc pl-5">
                      <li>Site analysis and feasibility studies</li>
                      <li>Space planning and zoning</li>
                      <li>Initial sketches and concept drawings</li>
                      <li>Design themes and architectural styling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold">B. Schematic Design</h4>
                    <ul className="list-disc pl-5">
                      <li>Floor plans, elevations, and sections</li>
                      <li>Spatial arrangements and circulation plans</li>
                      <li>Basic material selections</li>
                      <li>Landscape layout concepts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold">C. Design Development</h4>
                    <ul className="list-disc pl-5">
                      <li>Refined architectural drawings</li>
                      <li>Structural layout integration</li>
                      <li>Plumbing, Electrical, HVAC coordination</li>
                      <li>Compliance with building codes and standards</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold">D. Construction Documents</h4>
                    <ul className="list-disc pl-5">
                      <li>Detailed blueprints for construction</li>
                      <li>Working drawings (civil, structural, MEP)</li>
                      <li>Material specifications and bill of quantities (BOQ)</li>
                      <li>Permit and approval documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold">E. Site & Project Supervision</h4>
                    <ul className="list-disc pl-5">
                      <li>Site layout planning</li>
                      <li>Design implementation checks</li>
                      <li>Coordination with contractors and vendors</li>
                      <li>Regular site visits and progress validation</li>
                    </ul>
                  </div>
                </div>
              </SectionCard>

              <SectionCard title="2. 2D Design Services">
                <ul className="list-disc pl-5">
                  <li>Architectural floor plans</li>
                  <li>Elevation and section views</li>
                  <li>Site layouts and landscaping</li>
                  <li>Furniture layout plans</li>
                  <li>Interior detailing drawings</li>
                  <li>Reflected ceiling plans (RCP)</li>
                  <li>Electrical and plumbing layout (2D)</li>
                </ul>
              </SectionCard>

              <SectionCard title="3. 3D Design Services">
                <p className="mb-2">Used for visualizing the space before execution and for marketing or client approvals:</p>
                <div className="space-y-2">
                  <div>
                    <h4 className="text-[14px] font-semibold">A. 3D Modeling</h4>
                    <ul className="list-disc pl-5">
                      <li>Interior and exterior models of buildings</li>
                      <li>Product and furniture modeling</li>
                      <li>Landscaping and terrain modeling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold">B. 3D Rendering</h4>
                    <ul className="list-disc pl-5">
                      <li>Photorealistic images (day/night views)</li>
                      <li>Walkthroughs and flythroughs</li>
                      <li>Material and lighting simulations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold">C. 3D Visualization for Interiors</h4>
                    <ul className="list-disc pl-5">
                      <li>Room-wise interior mockups</li>
                      <li>Modular kitchen and wardrobe design</li>
                      <li>Lighting and décor visualization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold">D. BIM (Building Information Modeling)</h4>
                    <ul className="list-disc pl-5">
                      <li>Integrated 3D modeling with structural/MEP info</li>
                      <li>Clash detection between services</li>
                      <li>Quantity take-offs and project simulations</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-2">
                  <h4 className="text-[14px] font-semibold">Tools commonly used</h4>
                  <p className="text-[14px] leading-6">SketchUp, 3ds Max + V-Ray, Lumion, Blender, Revit (BIM), Rhino, Enscape, AutoCAD 3D</p>
                </div>
              </SectionCard>
            </div>
          </details>

          {/* CTA */}
          <div className="mt-4 flex justify-center">
            <a href="/post-requirement" className="w-[160px] h-[36px] flex items-center justify-center bg-[#274C77] text-white rounded-[8px] text-[14px]">Post your requirement</a>
          </div>
        </div>
      </IonContent>
    </PageLayout>
  );
};

export default RequirementGuide;


