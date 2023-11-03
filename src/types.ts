import type { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import type { ParsedUrlQuery } from "querystring";

export type GsspParams<TPathParams> = GetServerSidePropsContext<TPathParams & ParsedUrlQuery>;
export type GsspResult<TPageProps> = Promise<GetServerSidePropsResult<TPageProps>>;