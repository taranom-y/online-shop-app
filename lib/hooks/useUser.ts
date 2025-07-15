import { useQuery } from '@tanstack/react-query';

export type User = {
  id: number;
  username: string;
  name: {firstname: string, lastname: string};
  email: string;
  password: string;
  phone: string;
}


export default function useUser(){
  return useQuery<User>(
            {
            queryKey: ["user"],
            queryFn: async () => {
            const res = await fetch("https://fakestoreapi.com/users/1");
            if (!res.ok) throw new Error("Network response was not ok");
            
            
            return res.json();
           
            }, refetchOnWindowFocus: false,
}
    );
    }