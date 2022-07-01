import React from "react"
import ContentLoader from "react-content-loader"


const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={350}
    height={370}
    viewBox="0 0 350 370"
    backgroundColor="#858585"
    foregroundColor="#d6d6d6"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="350" height="185" />
    <rect x="0" y="197" rx="10" ry="10" width="185" height="25" />
    <rect x="0" y="235" rx="10" ry="10" width="312" height="14" />
    <rect x="0" y="257" rx="10" ry="10" width="312" height="14" />
    <rect x="0" y="279" rx="10" ry="10" width="312" height="14" />
    <rect x="0" y="301" rx="10" ry="10" width="312" height="14" />
    <rect x="0" y="332" rx="10" ry="10" width="97" height="38" />
  </ContentLoader>
)

export default Skeleton