import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () =>{
   const axiosSecure = useAxiosSecure();
   const {data: admin=[]}= useQuery({
     queryKey: ['admin'],
     queryFn: async () =>{
        const res = await axiosSecure.get('/admin')
        return res.data;
     }
   })
   return [admin]
}
export default useAdmin;