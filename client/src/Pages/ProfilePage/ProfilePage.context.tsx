import React, { createContext } from "react";
import { TicketsData } from "../../shared/interfaces/api/getUserTickets.shared";
import { UserData } from "../../shared/interfaces/api/userData.shared";
import ProfilePageText from "./ProfilePage.text";

type ProfilePageContextType = {
     userData: UserData | undefined;
     tickets: TicketsData | undefined;
     ProfilePageText: typeof ProfilePageText;
     logoutUser: () => Promise<void>;
};

const initialState: ProfilePageContextType = {
     userData: {
          name: "",
          image: "",
          email: "",
     },
     tickets: [] || undefined,
     ProfilePageText: ProfilePageText,
     logoutUser: async () => {},
};

const ProfilePageContext: React.Context<ProfilePageContextType> = createContext(initialState);

export default ProfilePageContext;
