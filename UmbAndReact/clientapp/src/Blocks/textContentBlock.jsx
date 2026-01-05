import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

function TextContentBlock({ content, setting }) {
  const navigate = useNavigate();
  const ref = useRef(null);

  if (setting?.hideFromWebsite) return null;
  if (!content.textContent?.markup) return null;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");

      // internal links only
      if (href && href.startsWith("/")) {
        e.preventDefault();
        navigate(href);
      }
    };

    el.addEventListener("click", handleClick);
    return () => el.removeEventListener("click", handleClick);
  }, [navigate]);

  return (
    <section
      id="text-content-block"
      className={setting?.componentsLayout}
      ref={ref}
      dangerouslySetInnerHTML={{ __html: content.textContent.markup }}
    />
  );
}

export default TextContentBlock;
