import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useProUser = () =>{
   const axiosSecure = useAxiosSecure();
   const {data: proUser=[]}= useQuery({
     queryKey: ['proUser'],
     queryFn: async () =>{
        const res = await axiosSecure.get('/proUser')
        return res.data;
     }
   })
   return [proUser]
}
export default useProUser;