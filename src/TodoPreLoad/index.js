import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#948f8f"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="28" y="37" rx="5" ry="5" width="190" height="9" /> 
    <rect x="28" y="58" rx="5" ry="5" width="190" height="9" /> 
    <rect x="27" y="82" rx="5" ry="5" width="190" height="9" /> 
    <rect x="27" y="106" rx="5" ry="5" width="190" height="9" /> 
    <rect x="25" y="9" rx="5" ry="5" width="200" height="9" />
  </ContentLoader>
)

export  {MyLoader};

