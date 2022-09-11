import {useSelector} from "react-redux";
import {GlobalState, ISessionUser} from "../components/App/state";

export function useCurrentUser(): (ISessionUser | null) {
    const {currentUser} = useSelector<GlobalState, GlobalState['session']>((state) => state.session);
    return currentUser;
}
