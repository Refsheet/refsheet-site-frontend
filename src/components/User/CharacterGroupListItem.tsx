import classnames from "classnames";
import Link from "next/link";
import React from "react";
import NumberUtils from "@refsheet/v1/utils/NumberUtils";

type SupportedIcon = "person" | "folder";

const ICON_DEFINITIONS: Record<SupportedIcon, { inactive: string; active: string }> = {
    folder: {
        active: "folder_open",
        inactive: "folder",
    },
    person: {
        active: "person",
        inactive: "person",
    },
}

interface ComponentProps {
    count: number;
    icon: SupportedIcon;
    id: string | null;
    isActive: boolean;
    isDraggable: boolean;
    label: string;
    username: string;
}

function CharacterGroupListItem({ count, icon, id, isActive, isDraggable, label, username }: ComponentProps): React.ReactElement {
    return (
        <li className={classnames("character-group-list-item", isDraggable ? "sortable-link" : "fixed", isActive && "active")}>
            <i className="material-icons left folder">
                {isActive ? ICON_DEFINITIONS[icon].active : ICON_DEFINITIONS[icon].inactive}
            </i>
            <Link href={id ? `/${username}#${id}` : `/${username}`} passHref>
                <a className="name">{label}</a>
            </Link>
            <span className="count">
                {NumberUtils.format(count)}
            </span>
        </li>
    );
}

export default CharacterGroupListItem;