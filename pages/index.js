import Head from "next/head";

import Banner from "../sections/Banner";
import About from "../sections/About";
import Properties from "../sections/Properties";
import Faq from "../sections/Faq";
import Contact from "../sections/Contact";

import { fetchApi, baseUrl } from "../utils/fetchApi";

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <>
      <Head>
        <title>strona głowna</title>
      </Head>
      <Banner />
      <About />
      <Properties
        properties={propertiesForRent}
        title="examples of apartments for rent, from different countries and at different prices."
      />
       <Properties
        properties={propertiesForSale}
        title="examples of apartments for rent, from different countries and at different prices."
      />
      <Faq/>
      <Contact/>
    </>
  );
}
  
export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
