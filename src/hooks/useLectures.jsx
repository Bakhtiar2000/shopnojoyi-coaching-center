import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useLectures = () => {
    const [axiosSecure] = useAxios();
    const { data: lecturesData = [], isLoading: lecturesLoading, refetch } = useQuery({
        queryKey: ['lecturesData'],
        queryFn: async () => {
            const res = await fetch('/lectures.json');
            const data = await res.json();
            return data;

            // const res = await axiosSecure.get("attorney");
            // return res.data;
        },
    });
    return [lecturesData, lecturesLoading, refetch];
};

export default useLectures;