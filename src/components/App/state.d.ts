export interface ISessionUser {
    username: string;
}

export interface ISessionIdentity {
    avatarUrl: string | null;
    name: string | null;
    characterId: string | null;
}

export interface IModal {
    open: boolean;
}

export interface GlobalState {
    session: {
        currentUser: ISessionUser | null;
        nsfwOk: boolean;
        timeZone: string | null;
        locale: string | null;
        identity: ISessionIdentity | null;
    };

    theme: {
        id: string | null;
        name: string | null;
        allowHoliday: boolean;
        allowOverride: boolean;
    };

    conversations: {
        openConversations: [string];
    };

    uploads: {
        files: [File];
        characterId: string | null;
        modalOpen: boolean;
        activeImageId: string | null;
        uploadCallback: null;
        dropzoneDisabled: boolean;
    };

    lightbox: {
        mediaId: string | null;
        gallery: [string];
    };

    modals: {
        newCharacter: IModal;
        support: IModal;
        report: IModal & {
            id: string | null;
            type: string | null;
        };
    };
}
