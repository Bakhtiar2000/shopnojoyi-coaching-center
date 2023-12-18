import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const usePayments = () => {
    const [axiosSecure] = useAxios();
    const { data: paymentsData = [], isLoading: paymentsLoading, refetch } = useQuery({
        queryKey: ['paymentsData'],
        queryFn: async () => {
            const res = await fetch('/payment.json');
            const data = await res.json();
            return data;

            // const res = await axiosSecure.get("payments");
            // return res.data;
        },
    });
    return [paymentsData, paymentsLoading, refetch];
};

export default usePayments;