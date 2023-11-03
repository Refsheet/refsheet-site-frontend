import React from "react";
import CharacterGroupListItem from "./CharacterGroupListItem";
import type {CharacterGroup} from "./types";


interface ComponentProps {
    currentGroupId: string | string[] | null;
    groups: readonly CharacterGroup[];
    numCharacters: number;
    username: string;
}

function CharacterGroupList({currentGroupId, groups, numCharacters, username}: ComponentProps): React.ReactElement {
    let activeGroupSlugs = currentGroupId || [];
    
    if (!Array.isArray(activeGroupSlugs)) {
        activeGroupSlugs = activeGroupSlugs.split(",");
    }

    return (
        <ul className="character-group-list margin-bottom--none">
            <CharacterGroupListItem
                count={numCharacters}
                icon="person"
                id={null}
                isActive={!currentGroupId}
                isDraggable={false}
                label="All Characters"
                username={username}
            />

            {groups.map((group): React.ReactElement => {
                return (
                    <CharacterGroupListItem
                        key={group.id}
                        count={group.characterCount}
                        icon="folder"
                        id={group.id}
                        isActive={activeGroupSlugs.indexOf(group.id) >= 0}
                        isDraggable={true}
                        label={group.name}
                        username={username}
                    />
                )
            })}
        </ul>
    )
}

export default CharacterGroupList;
