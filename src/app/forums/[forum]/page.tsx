'use client';

import React from 'react'
import NavLink from '@refsheet//components/Shared/NavLink';

import Main from '@refsheet//components/Shared/Main'
import Jumbotron from '@refsheet//components/Shared/Jumbotron'
import Error from '@refsheet//components/Shared/Error'
import {GetForumQuery} from "../../../../@types/schema";
import {useTranslation} from "react-i18next";
import SearchForm from '@refsheet//components/Forums/show/SearchForm';
import {useSearchParams} from "next/navigation";
import client from "@refsheet/services/ApplicationService";
import getForumQuery from "./getForum.graphql";

interface ForumProps {
    params: {
        forum: string
    }
}

export default async function Forum(props: ForumProps) {
    const {t} = useTranslation();
    const params = useSearchParams();
    const query = params.get('q');

    const {data} = await client.query<GetForumQuery>({
        query: getForumQuery,
        variables: {id: props.params.forum},
    });

    if (!data.getForum) return <Error message="Form Undefined."/>
    const forum = data.getForum;

    return (
        <Main
            title={[forum.name, 'Forums']}
            className={'main-flex split-bg-right'}
        >
            <div
                className={'forum-header z-depth-1'}
                style={{position: 'relative', zIndex: 1}}
            >
                <Jumbotron short>
                    <h1>{forum.name}</h1>
                    <p>{forum.summary}</p>
                </Jumbotron>

                <div className="tab-row-container">
                    <div className="tab-row pushpin">
                        <div className="container">
                            <ul className="tabs">
                                <li className={'tab'}>
                                    <NavLink
                                        activeClassName={'active'}
                                        href={`/forums/${forum.slug}/about`}
                                    >
                                        {t('forums.about', 'About & Rules')}
                                    </NavLink>
                                </li>
                                <li className={'tab'}>
                                    <NavLink
                                        activeClassName={'active'}
                                        href={`/forums/${forum.slug}`}
                                    >
                                        {t('forums.posts', 'Posts')}
                                    </NavLink>
                                </li>
                                <li className={'tab'}>
                                    <NavLink
                                        activeClassName={'active'}
                                        href={`/forums/${forum.slug}/members`}
                                    >
                                        {t('forums.members', 'Members')}
                                    </NavLink>
                                </li>
                            </ul>

                            <div className={'action'}>
                                <SearchForm forum={forum} query={query}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<Switch>*/}
            {/*    <Redirect*/}
            {/*        from={'/v2/forums/:forumId/about'}*/}
            {/*        href={'/forums/:forumId/about'}*/}
            {/*    />*/}
            {/*    <Route path={'/forums/:forumId/about'}>*/}
            {/*        <About forum={forum}/>*/}
            {/*    </Route>*/}
            {/*    <Redirect*/}
            {/*        from={'/v2/forums/:forumId/members'}*/}
            {/*        href={'/forums/:forumId/members'}*/}
            {/*    />*/}
            {/*    <Route path={'/forums/:forumId/members'}>*/}
            {/*        <Members forum={forum}/>*/}
            {/*    </Route>*/}
            {/*    <Redirect*/}
            {/*        from={'/v2/forums/:forumId/post'}*/}
            {/*        href={'/forums/:forumId/post'}*/}
            {/*    />*/}
            {/*    <Route path={'/forums/:forumId/post'}>*/}
            {/*        <NewDiscussion forum={forum}/>*/}
            {/*    </Route>*/}
            {/*    <Redirect*/}
            {/*        from={'/v2/forums/:forumId/:discussionId'}*/}
            {/*        href={'/forums/:forumId/:discussionId'}*/}
            {/*    />*/}
            {/*    <Route path={'/forums/:forumId/:discussionId'}>*/}
            {/*        <Discussion forum={forum}/>*/}
            {/*    </Route>*/}
            {/*    <Route>*/}
            {/*        <Discussions forum={forum} query={query.q}/>*/}
            {/*    </Route>*/}
            {/*</Switch>*/}
        </Main>
    )
}
