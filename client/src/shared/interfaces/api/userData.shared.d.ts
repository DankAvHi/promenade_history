export type UserData = {
     name: string;
     image: string;
     email?: string;
};

export type UserResponse = { succes: boolean; user: UserData };
