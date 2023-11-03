import React from "react";
import CharacterGroupListItem from "./CharacterGroupListItem";
import type { CharacterGroup } from "./types";


interface ComponentProps {
    currentGroupId: string | null;
    groups: readonly CharacterGroup[];
    numCharacters: number;
    username: string;
}

function CharacterGroupList({ currentGroupId, groups, numCharacters, username }: ComponentProps): React.ReactElement {
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
                        isActive={currentGroupId === group.id}
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