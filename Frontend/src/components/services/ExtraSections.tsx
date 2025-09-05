import React from "react";
import { ExtraSection } from "./types";
import SoftwareTypesSection from "./SoftwareTypesSection";
import SoftwareLifecycleSection from "./SoftwareLifecycleSection";
import GenericExtraSection from "./GenericExtraSection";

interface ExtraSectionsProps {
  extraSections: ExtraSection[];
}

const ExtraSections: React.FC<ExtraSectionsProps> = ({ extraSections }) => {
  return (
    <>
      {extraSections.map((section) => {
        const key = section.id;
        const sectionId = section.sectionId;

        switch (section.type) {
          case "types":
            return (
              <SoftwareTypesSection
                key={key}
                section={section}
                sectionId={sectionId}
              />
            );

          case "lifecycle":
            return (
              <SoftwareLifecycleSection
                key={key}
                section={section}
                sectionId={sectionId}
              />
            );

          case "generic":
            return (
              <GenericExtraSection
                key={key}
                section={section}
                sectionId={sectionId}
                iconName="ThumbsUp"
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
};

export default ExtraSections;
