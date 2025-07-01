import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../scripts/axiosConfig";

export function useCategory()
{
    const { data ,isLoading,error} = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axiosConfig.get("/categories");
            return res.data; 
          },
       
    })
    return {data,isLoading,error}
}
