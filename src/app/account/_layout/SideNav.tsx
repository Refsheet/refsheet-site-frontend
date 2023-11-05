import NavLink from "@refsheet//v1/shared/nav_link";
import Restrict from "@refsheet//components/Shared/Restrict";
import React from "react";

export default function SideNav() {
    return (
        <ul className="side-nav fixed in-page margin-top--large">
            <NavLink href="/" icon="home" text="Activity Feed" exact>
                <NavLink href="?feed=character" text="Characters"/>
                <NavLink href="?feed=image" text="Images"/>
                <NavLink href="?feed=forum" text="Forums"/>
                <NavLink href="?feed=comment" text="Comments"/>
                <Restrict development>
                    <NavLink href="?feed=marketplace" text="Marketplace" disabled/>
                </Restrict>
            </NavLink>

            <NavLink href="/notifications" icon="notifications" text="Notifications">
                <NavLink href="/notifications?feed=comment" text="Comments"/>
                <NavLink href="/notifications?feed=favorite" text="Favorites"/>
                <NavLink href="/notifications?feed=tag" text="Mentions"/>
                <NavLink href="/notifications?feed=reply" text="Replies"/>
            </NavLink>

            <Restrict development>
                <NavLink href="/messages" icon="message" text="Messages"/>
            </Restrict>

            <li className="subheader">Account</li>

            <Restrict development>
                <NavLink href="/myrefs" icon="people" text="My Refs">
                    <NavLink href="/myrefs/new" text="New Page"/>
                    <NavLink href="/myrefs/worlds" text="Worlds"/>
                    <NavLink href="/myrefs/guilds" text="Guilds"/>
                </NavLink>
            </Restrict>

            <NavLink href="/account" noStrict icon="settings" text="Settings">
                <NavLink href="/account/settings" text="Account"/>
                <NavLink href="/account/site" text="Site Settings"/>
                <NavLink href="/account/support" text="Support"/>
                <NavLink href="/account/notifications" text="Notifications"/>
                <NavLink href="/account/api_keys" text="API Keys"/>
            </NavLink>
        </ul>
    )
}
