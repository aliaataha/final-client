import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../scripts/axiosConfig";

export function useCategory()
{
    const { data ,isLoading,error} = useQuery({
        queryKey: ["categories"],
        queryFn: async() => await axiosConfig('/api/categories?populate=img')
       
    })
    return {data,isLoading,error}
}
