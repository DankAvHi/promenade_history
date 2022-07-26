import React from "react";

const useScrollLock = () => {
     const lockScroll = React.useCallback(() => {
          document.body.style.overflow = "hidden";
          document.body.style.paddingRight = "17px";
     }, []);

     const unlockScroll = React.useCallback(() => {
          document.body.style.overflow = "";
          document.body.style.paddingRight = "0px";
     }, []);

     return {
          lockScroll,
          unlockScroll,
     };
};

export default useScrollLock;
