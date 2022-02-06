import React from "react";
// @ts-ignore
import {Helmet} from "react-helmet";

// @ts-ignore
const HelmetCard = ({title, description, keywords}): any  => {
  return(
      <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta property="og:title" content={title}/>
          <meta property="og:description" content={description}/>
      </Helmet>
  )
}

export default HelmetCard