import { useEffect, useState } from 'react'
import Menu from './menu';
import { getPage } from './lib/umbracoFetch';
import { useLocation } from 'react-router';
import Blocks from './Blocks';
import { useDispatch } from 'react-redux';
import { fetchLayoutData } from './redux/layoutSlice';
import Footer from './footer';
import { useSelector } from 'react-redux';

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLayoutData());
  }, [dispatch]);


  useEffect(() => {
    if (!pageData?.properties?.bodyScript) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = pageData.properties.bodyScript;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [pageData]);

  useEffect(() => {
    if (!pageData?.properties?.headScript) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = pageData.properties.headScript;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [pageData]);

  const { styleData } = useSelector((state) => state.layout);
  useEffect(() => {
    if (!styleData) return;

    const styleTag = document.createElement("style");
    styleTag.type = "text/css";
    styleTag.innerHTML = styleData;

    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, [styleData]);
  return <>

    <Menu></Menu>

    {loading

      ? <div>Loading...</div>

      : <>

        <title>{pageData?.seo?.title}</title>
        <meta name="description" content={pageData?.seo?.description} />
        <div className='site-main'>
          <Blocks blocks={pageData?.properties.contentBlocks?.items }></Blocks>
        </div>

      </>

    }
    <Footer></Footer>
    {pageData?.properties.bodyScript && (
      <script dangerouslySetInnerHTML={{ __html: pageData.properties.bodyScript }} />
    )}
  </>

}



export default App