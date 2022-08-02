export type UserData = {
     name: string;
     image: string | null;
     email?: string;
};

export type UserResponse = { succes: boolean; user: UserData };
