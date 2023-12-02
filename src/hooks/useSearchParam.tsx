import {useSearchParams} from "next/navigation";

export function useSearchParam(param: string) {
    const q = useSearchParams();
    return q.get(param);
}
