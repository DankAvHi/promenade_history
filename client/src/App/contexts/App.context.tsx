import { createContext } from "react";
import { TopPopupArray } from "../../Components/Common/TopPopup/TopPopup.d";

type AppContextType = {
     appTopPopupMesages: TopPopupArray;
     setAppTopPopupMesages: React.Dispatch<React.SetStateAction<TopPopupArray>>;
};

const initialState: AppContextType = {
     appTopPopupMesages: [],
     setAppTopPopupMesages: () => {},
};
const AppContext = createContext(initialState);
export default AppContext;
