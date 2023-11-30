import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSubmit = () =>{
   const axiosSecure = useAxiosSecure();
   const {data: Submit=[]}= useQuery({
     queryKey: ['Submit'],
     queryFn: async () =>{
        const res = await axiosSecure.get('/submit')
        return res.data;
     }
   })
   return [Submit]
}
export default useSubmit;