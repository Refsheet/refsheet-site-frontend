import { useLocation } from "react-router-dom";
import qs from "query-string";

export function useSearchParams() {
  const location = useLocation();
  return qs.parse(location.search);
}
