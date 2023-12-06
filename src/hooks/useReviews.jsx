import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useReviews = () => {
    const [axiosSecure] = useAxios();
    const { data: reviewsData = [], isLoading: reviewsLoading, refetch } = useQuery({
        queryKey: ['reviewsData'],
        queryFn: async () => {
            // const res = await fetch('/reviews.json');
            // const data = await res.json();
            // return data;

            const res = await axiosSecure.get("reviews");
            return res.data;
        },
    });
    return [reviewsData, reviewsLoading, refetch];
};

export default useReviews;