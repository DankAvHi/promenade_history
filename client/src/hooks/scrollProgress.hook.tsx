import { useCallback, useEffect, useState } from "react";

const useScrollProgress = () => {
     const [percent, setPercent] = useState<number>(0);

     const handleScroll = useCallback(() => {
          const percent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

          setPercent(percent);
     }, []);

     useEffect(() => {
          window.addEventListener("scroll", handleScroll, { passive: true });

          return () => window.removeEventListener("scroll", handleScroll);
     }, [handleScroll]);

     return { percent };
};
export default useScrollProgress;
