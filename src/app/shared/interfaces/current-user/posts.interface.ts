export interface IPosts{
    post:{
            content: string;
            created_at: string;
            id: number;
            picture: string;
            updated_at: string;
            user_id: number;
            comments:[]

    };
    first_name:string;
    last_name:string;
    profile_pic:string;
    comments:[]

    

}