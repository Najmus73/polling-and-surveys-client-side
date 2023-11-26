import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCreatedSurveys = () =>{
   const axiosSecure = useAxiosSecure();
   const {data: survey=[]}= useQuery({
     queryKey: ['survey'],
     queryFn: async () =>{
        const res = await axiosSecure.get('/survey')
        return res.data;
     }
   })
   return [survey]
}
export default useCreatedSurveys;