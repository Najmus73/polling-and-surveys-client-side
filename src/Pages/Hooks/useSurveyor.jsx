import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSurveyor = () =>{
   const axiosSecure = useAxiosSecure();
   const {data: surveyor=[]}= useQuery({
     queryKey: ['bid'],
     queryFn: async () =>{
        const res = await axiosSecure.get('/surveyor')
        return res.data;
     }
   })
   return [surveyor]
}
export default useSurveyor;