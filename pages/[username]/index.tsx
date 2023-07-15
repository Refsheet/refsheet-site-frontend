import React from "react";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import client from "services/ApplicationService";
import getUserProfile from "../../src/graph/queries/getUserProfile.graphql";
import NotFound from "components/Shared/views/NotFound";
import UserView from "components/User/View";
import { GetUserProfileQuery } from "../../@types/schema";

export interface UserProfileParams extends ParsedUrlQuery {
  username: string;
}

export interface UserProfileProps {
  user: GetUserProfileQuery["getUser"];
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  if (!user) return <NotFound />;
  return <UserView user={user} />;
};

export const getServerSideProps: GetServerSideProps<
  UserProfileProps,
  UserProfileParams
> = async ({ params }) => {
  const { data } = await client.query<GetUserProfileQuery>({
    query: getUserProfile,
    variables: { username: params?.username },
  });

  return {
    props: {
      user: data.getUser || null,
    },
  };
};

export default UserProfile;
