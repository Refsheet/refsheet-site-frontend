import React from "react";
import * as UserUtils from "../../utils/UserUtils";
import RichText from "../Shared/RichText";
import UserActionButtons from "./UserActionButtons";
import { IUserRoles } from "../../utils/UserUtils";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import PatreonLogo from "assets/images/third_party/patreon_logo.png";
import Image from "next/future/image";
import ReactMarkdown from "react-markdown";

export interface IUserProfileHeaderProps {
  avatarUrl: string;
  username: string;
  displayName: string;
  profile: string;
  blocked: boolean;
  followed: boolean;
  roles: IUserRoles;
}

const UserProfileHeader: React.FC<IUserProfileHeaderProps> = ({
  avatarUrl,
  username,
  displayName,
  profile,
  blocked,
  followed,
  roles,
}) => {
  const currentUser = useCurrentUser();
  const editable = username === currentUser?.username;
  const userColor = UserUtils.userFgColor(roles);

  const handleAvatarClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleProfileChange = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="user-header">
      {/*{this.state.avatarModalOpen && (*/}
      {/*    <AvatarModal*/}
      {/*        user={this.props.currentUser}*/}
      {/*        onSave={this.handleAvatarChange}*/}
      {/*        onClose={this.handleAvatarClose}*/}
      {/*    />*/}
      {/*)}*/}

      <div className="container flex">
        <div className="user-avatar">
          <div
            className="image"
            style={{ boxShadow: `${userColor} 0px 0px 3px 1px` }}
          >
            {editable && (
              <div className="image-edit-overlay" onClick={handleAvatarClick}>
                <div className="content">
                  <i className="material-icons">photo_camera</i>
                  Change Avatar
                </div>
              </div>
            )}

            <img src={avatarUrl} alt={username} />
          </div>
        </div>
        <div className="user-data">
          <div className="avatar-shift">
            <h1 className="name" style={{ color: userColor }}>
              {displayName}
            </h1>
            <div className="username">
              @{username}
              {roles.admin && (
                <span
                  className="user-badge admin-badge"
                  title="Site administrator"
                >
                  <i
                    className="material-icons"
                    style={{ color: UserUtils.USER_FG_COLOR.admin }}
                  >
                    security
                  </i>
                </span>
              )}
              {roles.patron && (
                <span className="user-badge patron-badge" title="Site Patron">
                  <Image
                    src={PatreonLogo}
                    width={18}
                    height={18}
                    alt="Patreon"
                  />
                </span>
              )}
              {roles.supporter && (
                <span
                  className="user-badge supporter-badge"
                  title="Site Supporter"
                >
                  <i
                    className="material-icons"
                    style={{ color: UserUtils.USER_FG_COLOR.supporter }}
                  >
                    star
                  </i>
                </span>
              )}
            </div>
          </div>

          <div className="user-bio">
            {!blocked && <ReactMarkdown children={profile} />}
          </div>
        </div>

        <UserActionButtons
          username={username}
          blocked={blocked}
          followed={followed}
          roles={roles}
        />
      </div>
    </div>
  );
};

export default UserProfileHeader;
