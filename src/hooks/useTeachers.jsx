import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useTeachers = () => {
    const [axiosSecure] = useAxios();
    const { data: teachersData = [], isLoading: teachersLoading, refetch } = useQuery({
        queryKey: ['teachersData'],
        queryFn: async () => {
            const res = await fetch('/teachers.json');
            const data = await res.json();
            return data;

            // const res = await axiosSecure.get("attorney");
            // return res.data;
        },
    });
    return [teachersData, teachersLoading, refetch];
};

export default useTeachers;