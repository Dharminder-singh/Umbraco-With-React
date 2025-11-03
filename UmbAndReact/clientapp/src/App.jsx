import { useEffect, useState } from 'react'
import Menu from './menu';
import { getPage } from './lib/umbracoFetch';
import { useLocation } from 'react-router';
import Blocks from './Blocks';

function App() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
const location = useLocation();
  useEffect(() => {
    const fetchPage = async () => {
      setLoading(true);
      try {
        const data = await getPage(location.pathname);
        setPageData(data);
      } catch (error) {
        console.error("Failed to fetch page:", error);
      } finally {
        setLoading(false);
      }

    };

    fetchPage();

  }, [location.pathname]);



  return <>

    <Menu></Menu>

    {loading

      ? <div>Loading...</div>

      : <>

      <title>{pageData?.seo?.title}</title> 
      <meta name="description" content={pageData?.seo?.description} /> 
     <Blocks blocks={pageData?.properties.contentBlocks?.items}></Blocks>
      </>

    }

  </>

}



export default App