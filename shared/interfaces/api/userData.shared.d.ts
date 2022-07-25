export type UserData = {
     name: string;
     image: string | null;
};

export type UserResponse = { succes: boolean; user: UserData };
