import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const usePrograms = () => {
    const [axiosSecure] = useAxios();
    const { data: programsData = [], isLoading: programsLoading, refetch } = useQuery({
        queryKey: ['programsData'],
        queryFn: async () => {
            // const res = await fetch('/programs.json');
            // const data = await res.json();
            // return data;

            const res = await axiosSecure.get("programs");
            return res.data;
        },
    });
    return [programsData, programsLoading, refetch];
};

export default usePrograms;