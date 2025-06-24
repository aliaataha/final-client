import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../scripts/axiosConfig";

export function useProducts()
{
    const { data ,isLoading,error} =useQuery({
        queryKey: ['products'],
        queryFn:async()=> axiosConfig('/api/products?populate=img')
    })
    return {data,isLoading,error}
}