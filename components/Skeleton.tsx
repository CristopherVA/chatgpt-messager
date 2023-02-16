import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props: any) => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#434254"
      foregroundColor="#43424"
      {...props}
    >
      <rect x="50" y="6" rx="4" ry="4" width="250" height="38" />
      <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
      <rect x="50" y="55" rx="4" ry="4" width="250" height="38" />
      <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
      <rect x="50" y="104" rx="4" ry="4" width="250" height="38" />
      <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
    </ContentLoader>
  );
};

Skeleton.metadata = {
  name: "Abraham Calsin",
  github: "abrahamcalsin",
  description: "Loading a list of tasks.",
  filename: "Skeleton",
};

export default Skeleton;
