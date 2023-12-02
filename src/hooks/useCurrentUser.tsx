import {useDispatch, useSelector} from "react-redux";
import {GlobalState, ISession, ISessionUser} from "@refsheet/components/App/state";

export function useSession(): (ISession) {
    return useSelector<GlobalState, GlobalState['session']>((state) => state.session);
}

export function useCurrentUser(): (ISessionUser | null) {
    const {currentUser} = useSession();
    return currentUser;
}

export function useNsfwOk(): ([boolean, (boolean) => void]) {
    const dispatch = useDispatch();
    const {nsfwOk} = useSession();

    const setNsfwOk = (show: boolean) => {
        dispatch({
            type: "SET_NSFW_MODE",
            nsfwOk: show,
            confirmed: false
        });
    }
    
    return [nsfwOk, setNsfwOk];
}
