import {useDispatch} from "react-redux";
import {IOpenModalAction, OPEN_MODAL, TModalName} from "@refsheet/reducers/modals";
import {Dispatch} from "redux";

export default function useModals() {
    const dispatch = useDispatch();

    const openModal = (modal: TModalName, args?: any): IOpenModalAction => dispatch({
        type: OPEN_MODAL,
        modal,
        open: true,
        args
    });

    const closeModal = (modal: TModalName) => dispatch({
        type: OPEN_MODAL,
        modal,
        open: false,
    });

    return {
        openSupportModal: () => openModal('support'),
        closeSupportModal: () => closeModal('support'),
        openNewCharacterModal: () => openModal('newCharacter'),
        closeNewCharacterModal: () => closeModal('newCharacter'),
        openReportModal: (args: { id: string, type: string }) => openModal('report', args),
        closeReportModal: () => closeModal('report'),
    }
}
