import {useParams} from "next/navigation";

function useCurrentCharacterGroup(): string | null {
    const {group} = useParams();
    if (Array.isArray(group)) {
        return group.join(';');
    }
    return group;
}

export default useCurrentCharacterGroup;
