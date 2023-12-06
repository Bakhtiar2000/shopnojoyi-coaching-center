import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useGallery = () => {
    const [axiosSecure] = useAxios();
    const { data: galleryData = [], isLoading: galleryLoading, refetch } = useQuery({
        queryKey: ['galleryData'],
        queryFn: async () => {
            // const res = await fetch('/gallery.json');
            // const data = await res.json();
            // return data;

            const res = await axiosSecure.get("gallery");
            return res.data;
        },
    });
    return [galleryData, galleryLoading, refetch];
};

export default useGallery;