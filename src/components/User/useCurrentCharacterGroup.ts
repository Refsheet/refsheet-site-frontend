import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function getCharacterGroupId(url: string): string | null {
    const index = url.indexOf("#");
    if (index < 0) {
        return null;
    }

    return url.substring(index + 1);
}

function useCurrentCharacterGroup(): string | null {
    const router = useRouter();
    const [currentCharacterGroupId, setCurrentCharacterGroupId] = useState<string | null>(getCharacterGroupId(router.asPath));

    useEffect(() => {
        const listener = (url: string): void => setCurrentCharacterGroupId(getCharacterGroupId(url));

        router.events.on("hashChangeStart", listener);
        return (): void => {
            router.events.off("hashChangeStart", listener);
        }
    }, [router]);

    return currentCharacterGroupId;
}

export default useCurrentCharacterGroup;