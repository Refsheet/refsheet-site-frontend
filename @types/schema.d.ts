import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Activity = ApplicationRecord & {
  __typename?: 'Activity';
  character?: Maybe<Character>;
  character_id?: Maybe<Scalars['ID']>;
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  updated_at?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  user_id: Scalars['ID'];
};

export type ApiKey = ApplicationRecord & {
  __typename?: 'ApiKey';
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  read_only?: Maybe<Scalars['Boolean']>;
  secret?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};

export type ApplicationRecord = {
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Artist = ApplicationRecord & {
  __typename?: 'Artist';
  avatar_url?: Maybe<Scalars['String']>;
  commission_info?: Maybe<Scalars['String']>;
  commission_info_markdown?: Maybe<Scalars['String']>;
  commission_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  guid: Scalars['ID'];
  id: Scalars['ID'];
  locked?: Maybe<Scalars['Boolean']>;
  media_count?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  profile?: Maybe<Scalars['String']>;
  profile_markdown?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  updated_at?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  website_url?: Maybe<Scalars['String']>;
};

export type ArtistsCollection = Paginated & {
  __typename?: 'ArtistsCollection';
  artists: Array<Maybe<Artist>>;
  count?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  totalEntries?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type Attribute = {
  __typename?: 'Attribute';
  id: Scalars['String'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type Character = ApplicationRecord & {
  __typename?: 'Character';
  avatar_url?: Maybe<Scalars['String']>;
  can_edit?: Maybe<Scalars['Boolean']>;
  cover_image_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  custom_attributes?: Maybe<Array<Maybe<Attribute>>>;
  deleted_at?: Maybe<Scalars['Int']>;
  dislikes?: Maybe<Scalars['String']>;
  dislikes_html?: Maybe<Scalars['String']>;
  featured_image?: Maybe<Image>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Image>>>;
  likes?: Maybe<Scalars['String']>;
  likes_html?: Maybe<Scalars['String']>;
  lodestone_character?: Maybe<Lodestone_Character>;
  marketplace_listing?: Maybe<MarketplaceListing>;
  media_folders?: Maybe<Array<Maybe<MediaFolder>>>;
  name: Scalars['String'];
  nsfw?: Maybe<Scalars['Boolean']>;
  path: Scalars['String'];
  pending_transfer?: Maybe<Transfer>;
  profile?: Maybe<Scalars['String']>;
  profile_html?: Maybe<Scalars['String']>;
  profile_image?: Maybe<Image>;
  profile_sections?: Maybe<Array<Maybe<ProfileSection>>>;
  shortcode?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  special_notes?: Maybe<Scalars['String']>;
  special_notes_html?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  swatches?: Maybe<Array<Maybe<Swatch>>>;
  theme?: Maybe<Theme>;
  updated_at?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  username: Scalars['String'];
  version?: Maybe<Scalars['Int']>;
  versions?: Maybe<Array<Maybe<Version>>>;
};


export type CharacterAvatar_UrlArgs = {
  style?: InputMaybe<Scalars['String']>;
};


export type CharacterCover_Image_UrlArgs = {
  style?: InputMaybe<Scalars['String']>;
};


export type CharacterImagesArgs = {
  folder_id?: InputMaybe<Scalars['ID']>;
};

export type CharacterGroup = ApplicationRecord & {
  __typename?: 'CharacterGroup';
  characters?: Maybe<Array<Maybe<Character>>>;
  characters_count: Scalars['Int'];
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  hidden_characters_count: Scalars['Int'];
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  row_order: Scalars['Int'];
  slug: Scalars['ID'];
  updated_at?: Maybe<Scalars['Int']>;
  visible_characters_count: Scalars['Int'];
};

export type CharactersCollection = {
  __typename?: 'CharactersCollection';
  characters: Array<Maybe<Character>>;
  count?: Maybe<Scalars['Int']>;
  current_page?: Maybe<Scalars['Int']>;
  total_entries?: Maybe<Scalars['Int']>;
  total_pages?: Maybe<Scalars['Int']>;
};

export type ChatCount = {
  __typename?: 'ChatCount';
  unread?: Maybe<Scalars['Int']>;
};

export type Conversation = ApplicationRecord & {
  __typename?: 'Conversation';
  blocked?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  guid: Scalars['String'];
  id: Scalars['ID'];
  lastMessage?: Maybe<Message>;
  messages?: Maybe<Array<Message>>;
  recipient: User;
  sender: User;
  unreadCount?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};

export type Forum = ApplicationRecord & {
  __typename?: 'Forum';
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  discussion_count?: Maybe<Scalars['Int']>;
  discussions?: Maybe<ForumDiscussionCollection>;
  id?: Maybe<Scalars['ID']>;
  is_member?: Maybe<Scalars['Boolean']>;
  is_open?: Maybe<Scalars['Boolean']>;
  locked?: Maybe<Scalars['Boolean']>;
  member_count?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  no_rp?: Maybe<Scalars['Boolean']>;
  nsfw?: Maybe<Scalars['Boolean']>;
  owner?: Maybe<User>;
  prepost_message?: Maybe<Scalars['String']>;
  rules?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  system_owned?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['Int']>;
};


export type ForumDiscussionsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  sticky?: InputMaybe<Scalars['Boolean']>;
};

export type ForumDiscussion = ApplicationRecord & Policy & {
  __typename?: 'ForumDiscussion';
  admin_post?: Maybe<Scalars['Boolean']>;
  can_destroy?: Maybe<Scalars['Boolean']>;
  can_edit?: Maybe<Scalars['Boolean']>;
  character?: Maybe<Character>;
  content?: Maybe<Scalars['String']>;
  content_html?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  forum?: Maybe<Forum>;
  id?: Maybe<Scalars['ID']>;
  karma_total?: Maybe<Scalars['Int']>;
  last_post_at?: Maybe<Scalars['Int']>;
  last_read_at?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  moderator_post?: Maybe<Scalars['Boolean']>;
  posts?: Maybe<Array<Maybe<ForumPost>>>;
  preview?: Maybe<Scalars['String']>;
  reply_count?: Maybe<Scalars['Int']>;
  shortcode?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sticky?: Maybe<Scalars['Boolean']>;
  topic?: Maybe<Scalars['String']>;
  unread_posts_count?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};

export type ForumDiscussionCollection = Paginated & {
  __typename?: 'ForumDiscussionCollection';
  count?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  discussions?: Maybe<Array<Maybe<ForumDiscussion>>>;
  offset?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  totalEntries?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type ForumPost = ApplicationRecord & Policy & {
  __typename?: 'ForumPost';
  admin_post?: Maybe<Scalars['Boolean']>;
  can_destroy?: Maybe<Scalars['Boolean']>;
  can_edit?: Maybe<Scalars['Boolean']>;
  character?: Maybe<Character>;
  content?: Maybe<Scalars['String']>;
  content_html?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  discussion?: Maybe<ForumDiscussion>;
  id?: Maybe<Scalars['ID']>;
  is_edited?: Maybe<Scalars['Boolean']>;
  karma_total?: Maybe<Scalars['Int']>;
  moderator_post?: Maybe<Scalars['Boolean']>;
  parent_post?: Maybe<ForumPost>;
  updated_at?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};

export type ForumPostsCollection = Paginated & {
  __typename?: 'ForumPostsCollection';
  count?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  forumPosts: Array<Maybe<ForumPost>>;
  offset?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  totalEntries?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type Geometry = {
  __typename?: 'Geometry';
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export type Image = ApplicationRecord & {
  __typename?: 'Image';
  aspect_ratio?: Maybe<Scalars['Float']>;
  background_color?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  caption_html?: Maybe<Scalars['String']>;
  character?: Maybe<Character>;
  character_id?: Maybe<Scalars['ID']>;
  comments?: Maybe<Array<Maybe<MediaComment>>>;
  comments_count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  download_link?: Maybe<Scalars['String']>;
  favorites?: Maybe<Array<Maybe<MediaFavorite>>>;
  favorites_count?: Maybe<Scalars['Int']>;
  gravity?: Maybe<Scalars['String']>;
  hashtags?: Maybe<Array<Maybe<MediaHashtag>>>;
  height?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  image_processing?: Maybe<Scalars['Boolean']>;
  image_processing_error?: Maybe<Scalars['String']>;
  is_favorite?: Maybe<Scalars['Boolean']>;
  is_managed?: Maybe<Scalars['Boolean']>;
  is_v2_image?: Maybe<Scalars['Boolean']>;
  nsfw?: Maybe<Scalars['Boolean']>;
  size?: Maybe<ImageSize>;
  source_url?: Maybe<Scalars['String']>;
  source_url_display?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<MediaTag>>>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  url?: Maybe<ImageUrl>;
  watermark?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSize = {
  __typename?: 'ImageSize';
  large?: Maybe<Geometry>;
  large_square?: Maybe<Geometry>;
  medium?: Maybe<Geometry>;
  medium_square?: Maybe<Geometry>;
  small?: Maybe<Geometry>;
  small_square?: Maybe<Geometry>;
  thumbnail?: Maybe<Geometry>;
};

export type ImageUploadToken = {
  __typename?: 'ImageUploadToken';
  acl?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  policy?: Maybe<Scalars['String']>;
  success_action_status?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  x_amz_algorithm?: Maybe<Scalars['String']>;
  x_amz_credential?: Maybe<Scalars['String']>;
  x_amz_date?: Maybe<Scalars['String']>;
  x_amz_signature?: Maybe<Scalars['String']>;
};

export type ImageUrl = {
  __typename?: 'ImageUrl';
  large?: Maybe<Scalars['String']>;
  large_square?: Maybe<Scalars['String']>;
  medium?: Maybe<Scalars['String']>;
  medium_square?: Maybe<Scalars['String']>;
  small?: Maybe<Scalars['String']>;
  small_square?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type Json = {
  __typename?: 'Json';
  json?: Maybe<Scalars['String']>;
};

export type Lodestone_Character = ApplicationRecord & {
  __typename?: 'Lodestone_Character';
  active_class_job?: Maybe<Lodestone_ClassJob>;
  bio?: Maybe<Scalars['String']>;
  class_jobs?: Maybe<Array<Maybe<Lodestone_ClassJob>>>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  diety?: Maybe<Scalars['String']>;
  gc_name?: Maybe<Scalars['String']>;
  gc_rank_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lodestone_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nameday?: Maybe<Scalars['String']>;
  portrait_url?: Maybe<Scalars['String']>;
  race?: Maybe<Lodestone_Race>;
  remote_updated_at?: Maybe<Scalars['Int']>;
  server?: Maybe<Lodestone_Server>;
  title?: Maybe<Scalars['String']>;
  title_top?: Maybe<Scalars['Boolean']>;
  town?: Maybe<Scalars['String']>;
  tribe?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Lodestone_ClassJob = ApplicationRecord & {
  __typename?: 'Lodestone_ClassJob';
  class_abbr?: Maybe<Scalars['String']>;
  class_icon_url?: Maybe<Scalars['String']>;
  class_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  exp_level?: Maybe<Scalars['Int']>;
  exp_level_max?: Maybe<Scalars['Int']>;
  exp_level_togo?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  job_abbr?: Maybe<Scalars['String']>;
  job_active?: Maybe<Scalars['Boolean']>;
  job_name?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  lodestone_character?: Maybe<Lodestone_Character>;
  name?: Maybe<Scalars['String']>;
  specialized?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Lodestone_Race = ApplicationRecord & {
  __typename?: 'Lodestone_Race';
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  lodestone_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Lodestone_Server = ApplicationRecord & {
  __typename?: 'Lodestone_Server';
  created_at?: Maybe<Scalars['Int']>;
  datacenter?: Maybe<Scalars['String']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  lodestone_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type MarketplaceListing = ApplicationRecord & {
  __typename?: 'MarketplaceListing';
  amount_cents?: Maybe<Scalars['Int']>;
  amount_currency?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type MediaComment = ApplicationRecord & {
  __typename?: 'MediaComment';
  comment: Scalars['String'];
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};

export type MediaCommentCollection = Paginated & {
  __typename?: 'MediaCommentCollection';
  comments?: Maybe<Array<Maybe<MediaComment>>>;
  count?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  totalEntries?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type MediaFavorite = ApplicationRecord & {
  __typename?: 'MediaFavorite';
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};

export type MediaFolder = ApplicationRecord & {
  __typename?: 'MediaFolder';
  character?: Maybe<Character>;
  children?: Maybe<Array<Maybe<MediaFolder>>>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  featured_media?: Maybe<Image>;
  guid?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  is_hidden?: Maybe<Scalars['Boolean']>;
  is_nsfw?: Maybe<Scalars['Boolean']>;
  is_password_protected?: Maybe<Scalars['Boolean']>;
  media?: Maybe<Array<Maybe<Image>>>;
  media_count?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<MediaFolder>;
  password?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};

export type MediaHashtag = ApplicationRecord & {
  __typename?: 'MediaHashtag';
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  media?: Maybe<Image>;
  tag?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type MediaTag = ApplicationRecord & {
  __typename?: 'MediaTag';
  character?: Maybe<Character>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  media?: Maybe<Image>;
  position_x?: Maybe<Scalars['Int']>;
  position_y?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Message = ApplicationRecord & {
  __typename?: 'Message';
  conversation?: Maybe<Conversation>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  guid: Scalars['String'];
  id: Scalars['ID'];
  is_self?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  read_at?: Maybe<Scalars['Int']>;
  replyTo?: Maybe<Message>;
  unread?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['Int']>;
  user: User;
};

export type Moderation = ApplicationRecord & {
  __typename?: 'Moderation';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  dmcaSourceUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  item?: Maybe<ModerationItem>;
  itemId?: Maybe<Scalars['ID']>;
  itemType?: Maybe<Scalars['String']>;
  sender?: Maybe<User>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  violationMessage?: Maybe<Scalars['String']>;
  violationType?: Maybe<Scalars['String']>;
};

/** Various data attached to a particular moderation item */
export type ModerationItem = Image;

export type Mutation = {
  __typename?: 'Mutation';
  addComment?: Maybe<MediaComment>;
  addFavorite?: Maybe<MediaFavorite>;
  banUser?: Maybe<User>;
  blockUser?: Maybe<User>;
  convertCharacter?: Maybe<Character>;
  createActivity?: Maybe<Activity>;
  createApiKey?: Maybe<ApiKey>;
  createColorScheme?: Maybe<Theme>;
  createDiscussion?: Maybe<ForumDiscussion>;
  createForum?: Maybe<Forum>;
  createLodestoneLink?: Maybe<Lodestone_Character>;
  createMediaFolder?: Maybe<MediaFolder>;
  createProfileSection?: Maybe<ProfileSection>;
  createProfileWidget?: Maybe<Widget>;
  createSession?: Maybe<Session>;
  deleteLodestoneLink?: Maybe<Lodestone_Character>;
  deleteMedia?: Maybe<Image>;
  deleteProfileSection?: Maybe<ProfileSection>;
  deleteProfileWidget?: Maybe<Widget>;
  deleteUser?: Maybe<User>;
  destroyCharacter?: Maybe<Character>;
  destroyDiscussion?: Maybe<ForumDiscussion>;
  destroyMediaFolder?: Maybe<MediaFolder>;
  destroySession?: Maybe<Session>;
  editReply?: Maybe<ForumPost>;
  markAllNotificationsAsRead?: Maybe<NotificationCollection>;
  postReply?: Maybe<ForumPost>;
  readNotification?: Maybe<Notification>;
  removeComment?: Maybe<MediaComment>;
  removeFavorite?: Maybe<MediaFavorite>;
  resendEmailConfirmation?: Maybe<User>;
  sendKarma?: Maybe<ForumPost>;
  sendMessage?: Maybe<Message>;
  setCharacterAvatarBlob?: Maybe<Character>;
  setCharacterCoverBlob?: Maybe<Character>;
  setUserAvatarBlob?: Maybe<User>;
  sortGalleryImage?: Maybe<Character>;
  transferCharacter?: Maybe<Character>;
  udpateColorScheme?: Maybe<Theme>;
  unblockUser?: Maybe<User>;
  updateCharacter?: Maybe<Character>;
  updateConversation?: Maybe<Conversation>;
  updateDiscussion?: Maybe<ForumDiscussion>;
  updateForum?: Maybe<Forum>;
  updateImage?: Maybe<Image>;
  updateLodestoneLink?: Maybe<Lodestone_Character>;
  updateModeration?: Maybe<Moderation>;
  updateProfileSection?: Maybe<ProfileSection>;
  updateProfileWidget?: Maybe<Widget>;
  uploadImage?: Maybe<Image>;
};


export type MutationAddCommentArgs = {
  comment: Scalars['String'];
  mediaId: Scalars['ID'];
};


export type MutationAddFavoriteArgs = {
  mediaId: Scalars['ID'];
};


export type MutationBanUserArgs = {
  id: Scalars['ID'];
  moderation_ban?: InputMaybe<Scalars['Boolean']>;
  moderation_reason?: InputMaybe<Scalars['String']>;
};


export type MutationBlockUserArgs = {
  username: Scalars['String'];
};


export type MutationConvertCharacterArgs = {
  id: Scalars['ID'];
};


export type MutationCreateActivityArgs = {
  character_id?: InputMaybe<Scalars['ID']>;
  comment?: InputMaybe<Scalars['String']>;
};


export type MutationCreateApiKeyArgs = {
  name?: InputMaybe<Scalars['String']>;
  read_only?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateColorSchemeArgs = {
  characterId?: InputMaybe<Scalars['ID']>;
  colorData?: InputMaybe<ThemeColorDataInput>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationCreateDiscussionArgs = {
  content: Scalars['String'];
  forumId: Scalars['String'];
  locked?: InputMaybe<Scalars['Boolean']>;
  sticky?: InputMaybe<Scalars['Boolean']>;
  topic: Scalars['String'];
};


export type MutationCreateLodestoneLinkArgs = {
  characterId: Scalars['ID'];
  lodestoneId: Scalars['String'];
};


export type MutationCreateMediaFolderArgs = {
  characterId: Scalars['ID'];
  name: Scalars['String'];
  slug?: InputMaybe<Scalars['String']>;
};


export type MutationCreateProfileSectionArgs = {
  characterId: Scalars['ID'];
  createAfterSectionId?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateProfileWidgetArgs = {
  characterId: Scalars['ID'];
  columnId: Scalars['ID'];
  sectionId: Scalars['ID'];
  type: Scalars['String'];
};


export type MutationCreateSessionArgs = {
  password: Scalars['String'];
  remember?: InputMaybe<Scalars['Boolean']>;
  username: Scalars['String'];
};


export type MutationDeleteLodestoneLinkArgs = {
  characterId: Scalars['ID'];
};


export type MutationDeleteMediaArgs = {
  mediaId: Scalars['ID'];
};


export type MutationDeleteProfileSectionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProfileWidgetArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationDestroyCharacterArgs = {
  confirmation: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationDestroyDiscussionArgs = {
  id: Scalars['ID'];
};


export type MutationDestroyMediaFolderArgs = {
  id: Scalars['ID'];
};


export type MutationEditReplyArgs = {
  content: Scalars['String'];
  postId: Scalars['ID'];
};


export type MutationPostReplyArgs = {
  characterId?: InputMaybe<Scalars['ID']>;
  content: Scalars['String'];
  discussionId: Scalars['ID'];
  parentPostId?: InputMaybe<Scalars['ID']>;
};


export type MutationReadNotificationArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveCommentArgs = {
  id: Scalars['ID'];
  mediaId: Scalars['ID'];
};


export type MutationRemoveFavoriteArgs = {
  mediaId: Scalars['ID'];
};


export type MutationResendEmailConfirmationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationSendKarmaArgs = {
  discussionId: Scalars['ID'];
  take?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSendMessageArgs = {
  conversationId?: InputMaybe<Scalars['ID']>;
  message: Scalars['String'];
  recipientId?: InputMaybe<Scalars['ID']>;
};


export type MutationSetCharacterAvatarBlobArgs = {
  blob?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type MutationSetCharacterCoverBlobArgs = {
  blob?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type MutationSetUserAvatarBlobArgs = {
  blob?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationSortGalleryImageArgs = {
  dropBefore?: InputMaybe<Scalars['Boolean']>;
  sourceImageId: Scalars['ID'];
  targetImageId: Scalars['ID'];
};


export type MutationTransferCharacterArgs = {
  destination: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationUdpateColorSchemeArgs = {
  colorData?: InputMaybe<ThemeColorDataInput>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};


export type MutationUnblockUserArgs = {
  username: Scalars['String'];
};


export type MutationUpdateCharacterArgs = {
  color_scheme_id?: InputMaybe<Scalars['ID']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  nsfw?: InputMaybe<Scalars['Boolean']>;
  shortcode?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  special_notes?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateConversationArgs = {
  conversation_id: Scalars['ID'];
  read?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateDiscussionArgs = {
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  locked?: InputMaybe<Scalars['Boolean']>;
  sticky?: InputMaybe<Scalars['Boolean']>;
  topic?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateImageArgs = {
  caption?: InputMaybe<Scalars['String']>;
  characterId?: InputMaybe<Scalars['ID']>;
  folder?: InputMaybe<Scalars['String']>;
  gravity?: InputMaybe<Scalars['String']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  mediaId?: InputMaybe<Scalars['ID']>;
  nsfw?: InputMaybe<Scalars['Boolean']>;
  source_url?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  watermark?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateLodestoneLinkArgs = {
  characterId: Scalars['ID'];
};


export type MutationUpdateModerationArgs = {
  id: Scalars['ID'];
  resolution: Scalars['String'];
};


export type MutationUpdateProfileSectionArgs = {
  id: Scalars['ID'];
  row_order_position?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateProfileWidgetArgs = {
  column?: InputMaybe<Scalars['Int']>;
  data?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  row_order_position?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationUploadImageArgs = {
  characterId: Scalars['ID'];
  folder?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  nsfw?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Notification = ApplicationRecord & {
  __typename?: 'Notification';
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_unread?: Maybe<Scalars['Boolean']>;
  link?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  read_at?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type NotificationCollection = ApplicationRecord & {
  __typename?: 'NotificationCollection';
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  notifications?: Maybe<Array<Maybe<Notification>>>;
  unreadCount?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Paginated = {
  count?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  totalEntries?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type Policy = {
  can_destroy?: Maybe<Scalars['Boolean']>;
  can_edit?: Maybe<Scalars['Boolean']>;
};

export type ProfileSection = {
  __typename?: 'ProfileSection';
  columns: Array<Maybe<Scalars['Int']>>;
  id: Scalars['ID'];
  row_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  widgets?: Maybe<Array<Maybe<Widget>>>;
};

export type Query = {
  __typename?: 'Query';
  autocompleteCharacter?: Maybe<Array<Maybe<Character>>>;
  autocompleteHashtags?: Maybe<Array<Maybe<MediaHashtag>>>;
  autocompleteUser?: Maybe<Array<Maybe<User>>>;
  chatCounts?: Maybe<ChatCount>;
  findUser?: Maybe<User>;
  getActivity?: Maybe<Array<Maybe<Activity>>>;
  getApiKeys?: Maybe<Array<Maybe<ApiKey>>>;
  getArtist?: Maybe<Artist>;
  getArtists?: Maybe<ArtistsCollection>;
  getCharacter?: Maybe<Character>;
  getCharacterByUrl?: Maybe<Character>;
  getCharacters?: Maybe<Array<Maybe<Character>>>;
  getComments?: Maybe<MediaCommentCollection>;
  getConversation?: Maybe<Conversation>;
  getConversations?: Maybe<Array<Maybe<Conversation>>>;
  getDiscussion?: Maybe<ForumDiscussion>;
  getForum?: Maybe<Forum>;
  getForumPosts?: Maybe<ForumPostsCollection>;
  getForums?: Maybe<Array<Maybe<Forum>>>;
  getImageUploadToken?: Maybe<ImageUploadToken>;
  getMedia?: Maybe<Image>;
  getMessages?: Maybe<Array<Maybe<Message>>>;
  getNextModeration?: Maybe<Moderation>;
  getNotifications?: Maybe<NotificationCollection>;
  getSession?: Maybe<Session>;
  getUser?: Maybe<User>;
  getUsers?: Maybe<UsersCollection>;
  getVersion?: Maybe<RefsheetMeta>;
  searchForCharacter?: Maybe<CharactersCollection>;
};


export type QueryAutocompleteCharacterArgs = {
  slug?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type QueryAutocompleteHashtagsArgs = {
  hashtag: Scalars['String'];
};


export type QueryAutocompleteUserArgs = {
  username?: InputMaybe<Scalars['String']>;
};


export type QueryFindUserArgs = {
  username: Scalars['String'];
};


export type QueryGetActivityArgs = {
  page?: InputMaybe<Scalars['Int']>;
  since?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};


export type QueryGetArtistArgs = {
  slug: Scalars['String'];
};


export type QueryGetArtistsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryGetCharacterArgs = {
  id: Scalars['ID'];
  shortcode?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetCharacterByUrlArgs = {
  slug: Scalars['String'];
  username: Scalars['String'];
};


export type QueryGetCharactersArgs = {
  ascending?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  with_deleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetCommentsArgs = {
  mediaId: Scalars['ID'];
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  since?: InputMaybe<Scalars['Int']>;
};


export type QueryGetConversationArgs = {
  conversationId: Scalars['ID'];
};


export type QueryGetDiscussionArgs = {
  forumId: Scalars['String'];
  id: Scalars['String'];
};


export type QueryGetForumArgs = {
  slug: Scalars['String'];
};


export type QueryGetForumPostsArgs = {
  discussionId?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetImageUploadTokenArgs = {
  characterId: Scalars['ID'];
};


export type QueryGetMediaArgs = {
  mediaId: Scalars['ID'];
};


export type QueryGetMessagesArgs = {
  conversationId: Scalars['ID'];
};


export type QueryGetNotificationsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};


export type QueryGetUsersArgs = {
  ascending?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  with_deleted?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySearchForCharacterArgs = {
  page?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
};

export type RefsheetMeta = {
  __typename?: 'RefsheetMeta';
  version?: Maybe<Scalars['String']>;
};

export type RichText = {
  __typename?: 'RichText';
  content?: Maybe<Scalars['String']>;
  content_html?: Maybe<Scalars['String']>;
};

export type Session = {
  __typename?: 'Session';
  currentUser?: Maybe<User>;
  locale?: Maybe<Scalars['String']>;
  nsfwOk?: Maybe<Scalars['Boolean']>;
  sessionId?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Character information has changed */
  characterChanged: Character;
  /** Conversation counts changed */
  chatCountsChanged?: Maybe<ChatCount>;
  /** Conversation changed somehow */
  convChanged: Conversation;
  /** Image processing complete */
  imageProcessingComplete?: Maybe<Image>;
  /** New comment on media */
  newComment: MediaComment;
  /** Conversation changed somehow */
  newConversation: Conversation;
  /** New favorite on media */
  newFavorite: MediaFavorite;
  /** New message published */
  newMessage: Message;
  /** New notifications go here */
  newNotification: Notification;
};


export type SubscriptionCharacterChangedArgs = {
  id: Scalars['String'];
};


export type SubscriptionConvChangedArgs = {
  convId: Scalars['ID'];
};


export type SubscriptionImageProcessingCompleteArgs = {
  imageId: Scalars['ID'];
};


export type SubscriptionNewCommentArgs = {
  mediaId: Scalars['ID'];
};


export type SubscriptionNewFavoriteArgs = {
  mediaId: Scalars['ID'];
};


export type SubscriptionNewMessageArgs = {
  conversationId: Scalars['ID'];
};

export type Swatch = ApplicationRecord & {
  __typename?: 'Swatch';
  color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Theme = ApplicationRecord & {
  __typename?: 'Theme';
  colors?: Maybe<ThemeColorData>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type ThemeColorData = {
  __typename?: 'ThemeColorData';
  accent1?: Maybe<Scalars['String']>;
  accent2?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  cardBackground?: Maybe<Scalars['String']>;
  imageBackground?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  textLight?: Maybe<Scalars['String']>;
  textMedium?: Maybe<Scalars['String']>;
};

export type ThemeColorDataInput = {
  accent1?: InputMaybe<Scalars['String']>;
  accent2?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
  cardBackground?: InputMaybe<Scalars['String']>;
  imageBackground?: InputMaybe<Scalars['String']>;
  primary?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  textLight?: InputMaybe<Scalars['String']>;
  textMedium?: InputMaybe<Scalars['String']>;
};

export type Transfer = ApplicationRecord & {
  __typename?: 'Transfer';
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  updated_at?: Maybe<Scalars['Int']>;
};

export type User = ApplicationRecord & {
  __typename?: 'User';
  apiKeys?: Maybe<Array<Maybe<ApiKey>>>;
  avatar_url?: Maybe<Scalars['String']>;
  blocks?: Maybe<Scalars['Boolean']>;
  character_groups?: Maybe<Array<Maybe<CharacterGroup>>>;
  characters?: Maybe<Array<Maybe<Character>>>;
  characters_count?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  email_confirmed_at?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  is_admin?: Maybe<Scalars['Boolean']>;
  is_blocked?: Maybe<Scalars['Boolean']>;
  is_followed?: Maybe<Scalars['Boolean']>;
  is_managed?: Maybe<Scalars['Boolean']>;
  is_moderator?: Maybe<Scalars['Boolean']>;
  is_patron?: Maybe<Scalars['Boolean']>;
  is_supporter?: Maybe<Scalars['Boolean']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  profile_html?: Maybe<Scalars['String']>;
  profile_image_url?: Maybe<Scalars['String']>;
  support_pledge_amount?: Maybe<Scalars['Int']>;
  unconfirmed_email?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};


export type UserAvatar_UrlArgs = {
  style?: InputMaybe<Scalars['String']>;
};


export type UserCharactersArgs = {
  group_id?: InputMaybe<Scalars['ID']>;
};

export type UsersCollection = Paginated & {
  __typename?: 'UsersCollection';
  count?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  totalEntries?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
  users: Array<Maybe<User>>;
};

export type Version = ApplicationRecord & {
  __typename?: 'Version';
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  event: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  index?: Maybe<Scalars['Int']>;
  item_id: Scalars['Int'];
  item_type: Scalars['String'];
  object?: Maybe<Scalars['String']>;
  object_changes?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  was_me?: Maybe<Scalars['Boolean']>;
  whodunnit?: Maybe<User>;
};

export type Widget = {
  __typename?: 'Widget';
  column: Scalars['Int'];
  data?: Maybe<WidgetData>;
  id: Scalars['ID'];
  row_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  widget_type: Scalars['String'];
};

/** Various data attached to a particular widget */
export type WidgetData = Json | RichText | Youtube;

export type Youtube = {
  __typename?: 'Youtube';
  url?: Maybe<Scalars['String']>;
};

export type AutocompleteCharacterQueryVariables = Exact<{
  slug: Scalars['String'];
  username: Scalars['String'];
}>;


export type AutocompleteCharacterQuery = { __typename?: 'Query', autocompleteCharacter?: Array<{ __typename?: 'Character', id?: string | null, name: string, shortcode?: string | null, species?: string | null, path: string, profile_image?: { __typename?: 'Image', url?: { __typename?: 'ImageUrl', thumbnail?: string | null } | null } | null } | null> | null };

export type CreateActivityMutationVariables = Exact<{
  comment: Scalars['String'];
  characterId?: InputMaybe<Scalars['ID']>;
}>;


export type CreateActivityMutation = { __typename?: 'Mutation', createActivity?: { __typename?: 'Activity', id: string, user_id: string, character_id?: string | null, comment?: string | null } | null };

export type GetArtistsQueryVariables = Exact<{
  page: Scalars['Int'];
}>;


export type GetArtistsQuery = { __typename?: 'Query', getArtists?: { __typename?: 'ArtistsCollection', currentPage?: number | null, perPage?: number | null, artists: Array<{ __typename?: 'Artist', name: string, slug: string, guid: string, profile_markdown?: string | null, commission_info_markdown?: string | null, locked?: boolean | null, avatar_url?: string | null, user?: { __typename?: 'User', name?: string | null, username?: string | null } | null } | null> } | null };

export type GetArtistQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetArtistQuery = { __typename?: 'Query', getArtist?: { __typename?: 'Artist', name: string, slug: string, guid: string, profile_markdown?: string | null, commission_info_markdown?: string | null, locked?: boolean | null, avatar_url?: string | null, user?: { __typename?: 'User', name?: string | null, username?: string | null } | null } | null };

export type SetCharacterAvatarBlobMutationVariables = Exact<{
  id: Scalars['ID'];
  blob?: InputMaybe<Scalars['String']>;
}>;


export type SetCharacterAvatarBlobMutation = { __typename?: 'Mutation', setCharacterAvatarBlob?: { __typename?: 'Character', id?: string | null, avatar_url?: string | null } | null };

export type CreateColorSchemeMutationVariables = Exact<{
  characterId: Scalars['ID'];
  colorData?: InputMaybe<ThemeColorDataInput>;
}>;


export type CreateColorSchemeMutation = { __typename?: 'Mutation', createColorScheme?: { __typename?: 'Theme', id?: string | null, name?: string | null, colors?: { __typename?: 'ThemeColorData', primary?: string | null, accent1?: string | null, accent2?: string | null, background?: string | null, cardBackground?: string | null, imageBackground?: string | null, text?: string | null, textLight?: string | null, textMedium?: string | null } | null } | null };

export type UpdateColorSchemeMutationVariables = Exact<{
  id: Scalars['ID'];
  colorData: ThemeColorDataInput;
}>;


export type UpdateColorSchemeMutation = { __typename?: 'Mutation', udpateColorScheme?: { __typename?: 'Theme', id?: string | null, name?: string | null, colors?: { __typename?: 'ThemeColorData', primary?: string | null, accent1?: string | null, accent2?: string | null, background?: string | null, cardBackground?: string | null, imageBackground?: string | null, text?: string | null, textLight?: string | null, textMedium?: string | null } | null } | null };

export type SetCharacterCoverBlobMutationVariables = Exact<{
  id: Scalars['ID'];
  blob?: InputMaybe<Scalars['String']>;
}>;


export type SetCharacterCoverBlobMutation = { __typename?: 'Mutation', setCharacterCoverBlob?: { __typename?: 'Character', id?: string | null, cover_image_url?: string | null } | null };

export type CreateMediaFolderMutationVariables = Exact<{
  characterId: Scalars['ID'];
  name: Scalars['String'];
  slug?: InputMaybe<Scalars['String']>;
}>;


export type CreateMediaFolderMutation = { __typename?: 'Mutation', createMediaFolder?: { __typename?: 'MediaFolder', name?: string | null, slug?: string | null } | null };

export type GetCharacterVersionsQueryVariables = Exact<{
  characterId: Scalars['ID'];
}>;


export type GetCharacterVersionsQuery = { __typename?: 'Query', getCharacter?: { __typename?: 'Character', id?: string | null, slug: string, shortcode?: string | null, versions?: Array<{ __typename?: 'Version', id?: string | null, index?: number | null, event: string, was_me?: boolean | null, created_at?: number | null, object_changes?: string | null, whodunnit?: { __typename?: 'User', name?: string | null, username?: string | null } | null } | null> | null } | null };

export type CreateLodestoneLinkMutationVariables = Exact<{
  characterId: Scalars['ID'];
  lodestoneId: Scalars['String'];
}>;


export type CreateLodestoneLinkMutation = { __typename?: 'Mutation', createLodestoneLink?: { __typename?: 'Lodestone_Character', id?: string | null, name?: string | null, bio?: string | null, lodestone_id?: string | null, nameday?: string | null, remote_updated_at?: number | null, portrait_url?: string | null, title?: string | null, title_top?: boolean | null, town?: string | null, tribe?: string | null, diety?: string | null, gc_name?: string | null, gc_rank_name?: string | null, created_at?: number | null, updated_at?: number | null, race?: { __typename?: 'Lodestone_Race', id?: string | null, name?: string | null } | null, server?: { __typename?: 'Lodestone_Server', id?: string | null, name?: string | null, datacenter?: string | null } | null, active_class_job?: { __typename?: 'Lodestone_ClassJob', id?: string | null } | null, class_jobs?: Array<{ __typename?: 'Lodestone_ClassJob', id?: string | null, name?: string | null, class_abbr?: string | null, class_icon_url?: string | null, class_name?: string | null, job_abbr?: string | null, job_name?: string | null, level?: number | null, exp_level?: number | null, exp_level_max?: number | null, exp_level_togo?: number | null, specialized?: boolean | null, job_active?: boolean | null } | null> | null } | null };

export type UpdateLodestoneLinkMutationVariables = Exact<{
  characterId: Scalars['ID'];
}>;


export type UpdateLodestoneLinkMutation = { __typename?: 'Mutation', updateLodestoneLink?: { __typename?: 'Lodestone_Character', id?: string | null, name?: string | null, bio?: string | null, lodestone_id?: string | null, nameday?: string | null, remote_updated_at?: number | null, portrait_url?: string | null, title?: string | null, title_top?: boolean | null, town?: string | null, tribe?: string | null, diety?: string | null, gc_name?: string | null, gc_rank_name?: string | null, created_at?: number | null, updated_at?: number | null, race?: { __typename?: 'Lodestone_Race', id?: string | null, name?: string | null } | null, server?: { __typename?: 'Lodestone_Server', id?: string | null, name?: string | null, datacenter?: string | null } | null, active_class_job?: { __typename?: 'Lodestone_ClassJob', id?: string | null } | null, class_jobs?: Array<{ __typename?: 'Lodestone_ClassJob', id?: string | null, name?: string | null, class_abbr?: string | null, class_icon_url?: string | null, class_name?: string | null, job_abbr?: string | null, job_name?: string | null, level?: number | null, exp_level?: number | null, exp_level_max?: number | null, exp_level_togo?: number | null, specialized?: boolean | null, job_active?: boolean | null } | null> | null } | null };

export type ArchiveCharacterMutationVariables = Exact<{
  id: Scalars['ID'];
  confirmation: Scalars['String'];
}>;


export type ArchiveCharacterMutation = { __typename?: 'Mutation', destroyCharacter?: { __typename?: 'Character', id?: string | null, deleted_at?: number | null } | null };

export type TransferCharacterMutationVariables = Exact<{
  id: Scalars['ID'];
  destination: Scalars['String'];
}>;


export type TransferCharacterMutation = { __typename?: 'Mutation', transferCharacter?: { __typename?: 'Character', id?: string | null, pending_transfer?: { __typename?: 'Transfer', created_at?: number | null, id: string } | null } | null };

export type UpdateSettingsMutationVariables = Exact<{
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  shortcode?: InputMaybe<Scalars['String']>;
  nsfw?: InputMaybe<Scalars['Boolean']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
}>;


export type UpdateSettingsMutation = { __typename?: 'Mutation', updateCharacter?: { __typename?: 'Character', id?: string | null, name: string, species?: string | null, slug: string, shortcode?: string | null, nsfw?: boolean | null, hidden?: boolean | null } | null };

export type CreateWidgetMutationVariables = Exact<{
  characterId: Scalars['ID'];
  sectionId: Scalars['ID'];
  columnId: Scalars['ID'];
  type: Scalars['String'];
}>;


export type CreateWidgetMutation = { __typename?: 'Mutation', createProfileWidget?: { __typename?: 'Widget', id: string, widget_type: string, column: number, title?: string | null, row_order?: number | null, data?: { __typename?: 'Json' } | { __typename?: 'RichText', content?: string | null, content_html?: string | null } | { __typename?: 'Youtube', url?: string | null } | null } | null };

export type CreateProfileSectionMutationVariables = Exact<{
  characterId: Scalars['ID'];
  createAfterSectionId?: InputMaybe<Scalars['ID']>;
}>;


export type CreateProfileSectionMutation = { __typename?: 'Mutation', createProfileSection?: { __typename?: 'ProfileSection', id: string, title?: string | null, row_order?: number | null } | null };

export type DeleteProfileSectionMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteProfileSectionMutation = { __typename?: 'Mutation', deleteProfileSection?: { __typename?: 'ProfileSection', id: string } | null };

export type DeleteProfileWidgetMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteProfileWidgetMutation = { __typename?: 'Mutation', deleteProfileWidget?: { __typename?: 'Widget', id: string } | null };

export type UpdateCharacterMutationVariables = Exact<{
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  special_notes?: InputMaybe<Scalars['String']>;
}>;


export type UpdateCharacterMutation = { __typename?: 'Mutation', updateCharacter?: { __typename?: 'Character', slug: string, name: string, species?: string | null, special_notes?: string | null, special_notes_html?: string | null } | null };

export type UpdateProfileWidgetMutationVariables = Exact<{
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['String']>;
  row_order_position?: InputMaybe<Scalars['String']>;
  column?: InputMaybe<Scalars['Int']>;
}>;


export type UpdateProfileWidgetMutation = { __typename?: 'Mutation', updateProfileWidget?: { __typename?: 'Widget', id: string, widget_type: string, column: number, title?: string | null, row_order?: number | null, data?: { __typename?: 'Json' } | { __typename?: 'RichText', content?: string | null, content_html?: string | null } | { __typename?: 'Youtube', url?: string | null } | null } | null };

export type ConversationsFieldsFragment = { __typename?: 'Conversation', id: string, guid: string, unreadCount?: number | null, lastMessage?: { __typename?: 'Message', message?: string | null, created_at?: number | null, is_self?: boolean | null, user: { __typename?: 'User', name?: string | null } } | null, user?: { __typename?: 'User', name?: string | null, username?: string | null, avatar_url?: string | null, is_admin?: boolean | null, is_patron?: boolean | null } | null };

export type GetConversationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetConversationsQuery = { __typename?: 'Query', getConversations?: Array<{ __typename?: 'Conversation', id: string, guid: string, unreadCount?: number | null, lastMessage?: { __typename?: 'Message', message?: string | null, created_at?: number | null, is_self?: boolean | null, user: { __typename?: 'User', name?: string | null } } | null, user?: { __typename?: 'User', name?: string | null, username?: string | null, avatar_url?: string | null, is_admin?: boolean | null, is_patron?: boolean | null } | null } | null> | null };

export type SubscribeToConversationsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeToConversationsSubscription = { __typename?: 'Subscription', newConversation: { __typename?: 'Conversation', id: string, guid: string, unreadCount?: number | null, lastMessage?: { __typename?: 'Message', message?: string | null, created_at?: number | null, is_self?: boolean | null, user: { __typename?: 'User', name?: string | null } } | null, user?: { __typename?: 'User', name?: string | null, username?: string | null, avatar_url?: string | null, is_admin?: boolean | null, is_patron?: boolean | null } | null } };

export type ForumPostFieldsFragment = { __typename?: 'ForumPost', id?: string | null, content?: string | null, content_html?: string | null, karma_total?: number | null, created_at?: number | null, updated_at?: number | null, admin_post?: boolean | null, moderator_post?: boolean | null, is_edited?: boolean | null, can_edit?: boolean | null, can_destroy?: boolean | null, user?: { __typename?: 'User', username?: string | null, name?: string | null, is_admin?: boolean | null, is_patron?: boolean | null, is_supporter?: boolean | null, avatar_url?: string | null } | null, character?: { __typename?: 'Character', id?: string | null, name: string, slug: string, profile_image?: { __typename?: 'Image', url?: { __typename?: 'ImageUrl', thumbnail?: string | null } | null } | null } | null };

export type DestroyDiscussionMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DestroyDiscussionMutation = { __typename?: 'Mutation', destroyDiscussion?: { __typename?: 'ForumDiscussion', id?: string | null, deleted_at?: number | null } | null };

export type EditReplyMutationVariables = Exact<{
  postId: Scalars['ID'];
  content: Scalars['String'];
}>;


export type EditReplyMutation = { __typename?: 'Mutation', editReply?: { __typename?: 'ForumPost', id?: string | null, content?: string | null, content_html?: string | null, karma_total?: number | null, created_at?: number | null, updated_at?: number | null, admin_post?: boolean | null, moderator_post?: boolean | null, is_edited?: boolean | null, can_edit?: boolean | null, can_destroy?: boolean | null, user?: { __typename?: 'User', username?: string | null, name?: string | null, is_admin?: boolean | null, is_patron?: boolean | null, is_supporter?: boolean | null, avatar_url?: string | null } | null, character?: { __typename?: 'Character', id?: string | null, name: string, slug: string, profile_image?: { __typename?: 'Image', url?: { __typename?: 'ImageUrl', thumbnail?: string | null } | null } | null } | null } | null };

export type GetDiscussionQueryVariables = Exact<{
  forumId: Scalars['String'];
  discussionId: Scalars['String'];
}>;


export type GetDiscussionQuery = { __typename?: 'Query', getDiscussion?: { __typename?: 'ForumDiscussion', id?: string | null, topic?: string | null, slug?: string | null, locked?: boolean | null, karma_total?: number | null, updated_at?: number | null, created_at?: number | null, reply_count?: number | null, content?: string | null, content_html?: string | null, admin_post?: boolean | null, moderator_post?: boolean | null, can_edit?: boolean | null, can_destroy?: boolean | null, forum?: { __typename?: 'Forum', id?: string | null, slug?: string | null, name: string } | null, user?: { __typename?: 'User', username?: string | null, name?: string | null, is_admin?: boolean | null, is_patron?: boolean | null, is_supporter?: boolean | null, avatar_url?: string | null } | null, character?: { __typename?: 'Character', id?: string | null, name: string, slug: string, profile_image?: { __typename?: 'Image', url?: { __typename?: 'ImageUrl', thumbnail?: string | null } | null } | null } | null, posts?: Array<{ __typename?: 'ForumPost', id?: string | null, content?: string | null, content_html?: string | null, karma_total?: number | null, created_at?: number | null, updated_at?: number | null, admin_post?: boolean | null, moderator_post?: boolean | null, is_edited?: boolean | null, can_edit?: boolean | null, can_destroy?: boolean | null, user?: { __typename?: 'User', username?: string | null, name?: string | null, is_admin?: boolean | null, is_patron?: boolean | null, is_supporter?: boolean | null, avatar_url?: string | null } | null, character?: { __typename?: 'Character', id?: string | null, name: string, slug: string, profile_image?: { __typename?: 'Image', url?: { __typename?: 'ImageUrl', thumbnail?: string | null } | null } | null } | null } | null> | null } | null };

export type PostDiscussionReplyMutationVariables = Exact<{
  discussionId: Scalars['ID'];
  characterId?: InputMaybe<Scalars['ID']>;
  content: Scalars['String'];
}>;


export type PostDiscussionReplyMutation = { __typename?: 'Mutation', postReply?: { __typename?: 'ForumPost', id?: string | null, content?: string | null, content_html?: string | null, karma_total?: number | null, created_at?: number | null, updated_at?: number | null, admin_post?: boolean | null, moderator_post?: boolean | null, is_edited?: boolean | null, can_edit?: boolean | null, can_destroy?: boolean | null, user?: { __typename?: 'User', username?: string | null, name?: string | null, is_admin?: boolean | null, is_patron?: boolean | null, is_supporter?: boolean | null, avatar_url?: string | null } | null, character?: { __typename?: 'Character', id?: string | null, name: string, slug: string, profile_image?: { __typename?: 'Image', url?: { __typename?: 'ImageUrl', thumbnail?: string | null } | null } | null } | null } | null };

export type UpdateDiscussionMutationVariables = Exact<{
  id: Scalars['ID'];
  topic?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  sticky?: InputMaybe<Scalars['Boolean']>;
}>;


export type UpdateDiscussionMutation = { __typename?: 'Mutation', updateDiscussion?: { __typename?: 'ForumDiscussion', id?: string | null, topic?: string | null, slug?: string | null, locked?: boolean | null, sticky?: boolean | null, forum?: { __typename?: 'Forum', id?: string | null, slug?: string | null, name: string } | null } | null };

export type CreateDiscussionMutationVariables = Exact<{
  forumId: Scalars['String'];
  topic: Scalars['String'];
  content: Scalars['String'];
  locked: Scalars['Boolean'];
  sticky: Scalars['Boolean'];
}>;


export type CreateDiscussionMutation = { __typename?: 'Mutation', createDiscussion?: { __typename?: 'ForumDiscussion', id?: string | null, topic?: string | null, slug?: string | null, locked?: boolean | null, sticky?: boolean | null, forum?: { __typename?: 'Forum', id?: string | null, slug?: string | null, name: string } | null } | null };

export type GetDiscussionsQueryVariables = Exact<{
  forumId: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
}>;


export type GetDiscussionsQuery = { __typename?: 'Query', getForum?: { __typename?: 'Forum', id?: string | null, discussions?: { __typename?: 'ForumDiscussionCollection', count?: number | null, offset?: number | null, totalEntries?: number | null, currentPage?: number | null, perPage?: number | null, totalPages?: number | null, discussions?: Array<{ __typename?: 'ForumDiscussion', id?: string | null, topic?: string | null, slug?: string | null, locked?: boolean | null, karma_total?: number | null, updated_at?: number | null, created_at?: number | null, preview?: string | null, last_read_at?: number | null, unread_posts_count?: number | null, last_post_at?: number | null, reply_count?: number | null, admin_post?: boolean | null, moderator_post?: boolean | null, user?: { __typename?: 'User', username?: string | null, name?: string | null, is_admin?: boolean | null, is_patron?: boolean | null, is_supporter?: boolean | null, avatar_url?: string | null } | null, character?: { __typename?: 'Character', id?: string | null, name: string, slug: string, profile_image?: { __typename?: 'Image', url?: { __typename?: 'ImageUrl', thumbnail?: string | null } | null } | null } | null } | null> | null } | null } | null };

export type GetForumQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetForumQuery = { __typename?: 'Query', getForum?: { __typename?: 'Forum', id?: string | null, slug?: string | null, name: string, summary?: string | null, description?: string | null, system_owned?: boolean | null, created_at?: number | null, rules?: string | null, prepost_message?: string | null, is_open?: boolean | null, is_member?: boolean | null, member_count?: number | null, discussion_count?: number | null, owner?: { __typename?: 'User', username?: string | null, name?: string | null, is_admin?: boolean | null, is_patron?: boolean | null, is_supporter?: boolean | null, avatar_url?: string | null } | null, discussions?: { __typename?: 'ForumDiscussionCollection', discussions?: Array<{ __typename?: 'ForumDiscussion', id?: string | null, topic?: string | null, slug?: string | null, updated_at?: number | null, created_at?: number | null, admin_post?: boolean | null, moderator_post?: boolean | null, sticky?: boolean | null } | null> | null } | null } | null };

export type GetForumsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetForumsQuery = { __typename?: 'Query', getForums?: Array<{ __typename?: 'Forum', id?: string | null, slug?: string | null, name: string, summary?: string | null, system_owned?: boolean | null, is_open?: boolean | null, created_at?: number | null } | null> | null };

export type PostReplyMutationVariables = Exact<{
  content: Scalars['String'];
  characterId?: InputMaybe<Scalars['ID']>;
  discussionId: Scalars['ID'];
}>;


export type PostReplyMutation = { __typename?: 'Mutation', postReply?: { __typename?: 'ForumPost', id?: string | null, content?: string | null, content_html?: string | null, character?: { __typename?: 'Character', id?: string | null, name: string, profile_image?: { __typename?: 'Image', url?: { __typename?: 'ImageUrl', thumbnail?: string | null } | null } | null } | null, user?: { __typename?: 'User', id: string, username?: string | null, name?: string | null, avatar_url?: string | null, link?: string | null, is_admin?: boolean | null, is_patron?: boolean | null, is_supporter?: boolean | null } | null } | null };

export type SendKarmaMutationVariables = Exact<{
  postId: Scalars['ID'];
  take: Scalars['Boolean'];
}>;


export type SendKarmaMutation = { __typename?: 'Mutation', sendKarma?: { __typename?: 'ForumPost', id?: string | null, karma_total?: number | null } | null };

export type GetCharacterForUploadQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCharacterForUploadQuery = { __typename?: 'Query', getCharacter?: { __typename?: 'Character', name: string, nsfw?: boolean | null, profile_image?: { __typename?: 'Image', url?: { __typename?: 'ImageUrl', small?: string | null } | null } | null } | null };

export type OnImageProcessingCompleteSubscriptionVariables = Exact<{
  imageId: Scalars['ID'];
}>;


export type OnImageProcessingCompleteSubscription = { __typename?: 'Subscription', imageProcessingComplete?: { __typename?: 'Image', id?: string | null, title?: string | null, nsfw?: boolean | null, hidden?: boolean | null, background_color?: string | null, aspect_ratio?: number | null, comments_count?: number | null, favorites_count?: number | null, image_processing?: boolean | null, image_processing_error?: string | null, is_favorite?: boolean | null, is_managed?: boolean | null, width?: number | null, height?: number | null, url?: { __typename?: 'ImageUrl', small?: string | null, medium?: string | null } | null, size?: { __typename?: 'ImageSize', small?: { __typename?: 'Geometry', width: number, height: number } | null, medium?: { __typename?: 'Geometry', width: number, height: number } | null } | null } | null };

export type AddCommentMutationVariables = Exact<{
  mediaId: Scalars['ID'];
  comment: Scalars['String'];
}>;


export type AddCommentMutation = { __typename?: 'Mutation', addComment?: { __typename?: 'MediaComment', id?: string | null, created_at?: number | null, comment: string, user?: { __typename?: 'User', username?: string | null, name?: string | null, avatar_url?: string | null } | null } | null };

export type GetCommentsQueryVariables = Exact<{
  mediaId: Scalars['ID'];
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  since?: InputMaybe<Scalars['Int']>;
}>;


export type GetCommentsQuery = { __typename?: 'Query', getComments?: { __typename?: 'MediaCommentCollection', count?: number | null, totalEntries?: number | null, currentPage?: number | null, totalPages?: number | null, perPage?: number | null, offset?: number | null, comments?: Array<{ __typename?: 'MediaComment', id?: string | null, created_at?: number | null, comment: string, user?: { __typename?: 'User', username?: string | null, name?: string | null, avatar_url?: string | null } | null } | null> | null } | null };

export type RemoveCommentMutationVariables = Exact<{
  mediaId: Scalars['ID'];
  id: Scalars['ID'];
}>;


export type RemoveCommentMutation = { __typename?: 'Mutation', removeComment?: { __typename?: 'MediaComment', id?: string | null } | null };

export type SubscribeToCommentsSubscriptionVariables = Exact<{
  mediaId: Scalars['ID'];
}>;


export type SubscribeToCommentsSubscription = { __typename?: 'Subscription', newComment: { __typename?: 'MediaComment', id?: string | null, created_at?: number | null, comment: string, user?: { __typename?: 'User', username?: string | null, name?: string | null, avatar_url?: string | null } | null } };

export type AddFavoriteMutationVariables = Exact<{
  mediaId: Scalars['ID'];
}>;


export type AddFavoriteMutation = { __typename?: 'Mutation', addFavorite?: { __typename?: 'MediaFavorite', id?: string | null, user?: { __typename?: 'User', username?: string | null, name?: string | null, avatar_url?: string | null } | null } | null };

export type RemoveFavoriteMutationVariables = Exact<{
  mediaId: Scalars['ID'];
}>;


export type RemoveFavoriteMutation = { __typename?: 'Mutation', removeFavorite?: { __typename?: 'MediaFavorite', id?: string | null } | null };

export type DeleteMediaMutationVariables = Exact<{
  mediaId: Scalars['ID'];
}>;


export type DeleteMediaMutation = { __typename?: 'Mutation', deleteMedia?: { __typename?: 'Image', id?: string | null, deleted_at?: number | null, character?: { __typename?: 'Character', id?: string | null, username: string, slug: string } | null } | null };

export type GetMediaQueryVariables = Exact<{
  mediaId: Scalars['ID'];
}>;


export type GetMediaQuery = { __typename?: 'Query', getMedia?: { __typename?: 'Image', id?: string | null, title?: string | null, created_at?: number | null, caption?: string | null, caption_html?: string | null, source_url?: string | null, source_url_display?: string | null, is_v2_image?: boolean | null, nsfw?: boolean | null, hidden?: boolean | null, background_color?: string | null, image_processing?: boolean | null, image_processing_error?: string | null, favorites_count?: number | null, comments_count?: number | null, is_favorite?: boolean | null, is_managed?: boolean | null, watermark?: boolean | null, gravity?: string | null, download_link?: string | null, url?: { __typename?: 'ImageUrl', large?: string | null } | null, hashtags?: Array<{ __typename?: 'MediaHashtag', tag?: string | null } | null> | null, tags?: Array<{ __typename?: 'MediaTag', position_x?: number | null, position_y?: number | null, character?: { __typename?: 'Character', id?: string | null, name: string } | null } | null> | null, character?: { __typename?: 'Character', id?: string | null, name: string, path: string, profile_image?: { __typename?: 'Image', url?: { __typename?: 'ImageUrl', thumbnail?: string | null } | null } | null } | null, favorites?: Array<{ __typename?: 'MediaFavorite', id?: string | null, user?: { __typename?: 'User', username?: string | null, name?: string | null, avatar_url?: string | null } | null } | null> | null } | null };

export type UpdateImageMutationVariables = Exact<{
  id: Scalars['ID'];
  caption?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  nsfw?: InputMaybe<Scalars['Boolean']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  source_url?: InputMaybe<Scalars['String']>;
  watermark?: InputMaybe<Scalars['Boolean']>;
  gravity?: InputMaybe<Scalars['String']>;
}>;


export type UpdateImageMutation = { __typename?: 'Mutation', updateImage?: { __typename?: 'Image', id?: string | null, title?: string | null, caption?: string | null, caption_html?: string | null, source_url?: string | null, source_url_display?: string | null, nsfw?: boolean | null, hidden?: boolean | null, watermark?: boolean | null, gravity?: string | null, image_processing?: boolean | null, image_processing_error?: string | null, hashtags?: Array<{ __typename?: 'MediaHashtag', tag?: string | null } | null> | null, url?: { __typename?: 'ImageUrl', large?: string | null } | null } | null };

export type GetNotificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNotificationsQuery = { __typename?: 'Query', getNotifications?: { __typename?: 'NotificationCollection', unreadCount?: number | null, notifications?: Array<{ __typename?: 'Notification', id?: string | null, type?: string | null, title?: string | null, message?: string | null, icon?: string | null, href?: string | null, link?: string | null, tag?: string | null, read_at?: number | null, created_at?: number | null, is_unread?: boolean | null } | null> | null } | null };

export type MarkAllNotificationsAsReadMutationVariables = Exact<{ [key: string]: never; }>;


export type MarkAllNotificationsAsReadMutation = { __typename?: 'Mutation', markAllNotificationsAsRead?: { __typename?: 'NotificationCollection', unreadCount?: number | null } | null };

export type ReadNotificationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ReadNotificationMutation = { __typename?: 'Mutation', readNotification?: { __typename?: 'Notification', id?: string | null, type?: string | null, title?: string | null, message?: string | null, icon?: string | null, href?: string | null, link?: string | null, tag?: string | null, read_at?: number | null, created_at?: number | null, is_unread?: boolean | null } | null };

export type SubscribeToNotificationsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeToNotificationsSubscription = { __typename?: 'Subscription', newNotification: { __typename?: 'Notification', id?: string | null, type?: string | null, title?: string | null, message?: string | null, icon?: string | null, href?: string | null, link?: string | null, tag?: string | null, read_at?: number | null, created_at?: number | null, is_unread?: boolean | null } };

export type CreateApiKeyMutationVariables = Exact<{
  name: Scalars['String'];
  read_only: Scalars['Boolean'];
}>;


export type CreateApiKeyMutation = { __typename?: 'Mutation', createApiKey?: { __typename?: 'ApiKey', id?: string | null, name?: string | null, read_only?: boolean | null, secret?: string | null } | null };

export type GetApiKeysQueryVariables = Exact<{ [key: string]: never; }>;


export type GetApiKeysQuery = { __typename?: 'Query', getApiKeys?: Array<{ __typename?: 'ApiKey', id?: string | null, name?: string | null, read_only?: boolean | null, secret?: string | null } | null> | null };

export type AutcompleteUserQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
}>;


export type AutcompleteUserQuery = { __typename?: 'Query', autocompleteUser?: Array<{ __typename?: 'User', name?: string | null, username?: string | null } | null> | null };

export type AutocompleteCharacterQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
}>;


export type AutocompleteCharacterQuery = { __typename?: 'Query', autocompleteCharacter?: Array<{ __typename?: 'Character', name: string, username: string, slug: string } | null> | null };

export type AutocompleteHashtagsQueryVariables = Exact<{
  hashtag: Scalars['String'];
}>;


export type AutocompleteHashtagsQuery = { __typename?: 'Query', autocompleteHashtags?: Array<{ __typename?: 'MediaHashtag', tag?: string | null, count?: number | null } | null> | null };

export type SetUserAvatarBlobMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  blob?: InputMaybe<Scalars['String']>;
}>;


export type SetUserAvatarBlobMutation = { __typename?: 'Mutation', setUserAvatarBlob?: { __typename?: 'User', id: string, avatar_url?: string | null, profile_image_url?: string | null } | null };

export type CharacterAttributesFragment = { __typename?: 'Character', custom_attributes?: Array<{ __typename?: 'Attribute', id: string, name: string, value?: string | null } | null> | null };

export type CharacterFieldsFragment = { __typename?: 'Character', name: string, id?: string | null, slug: string, username: string, shortcode?: string | null, hidden?: boolean | null, nsfw?: boolean | null, special_notes?: string | null, special_notes_html?: string | null, species?: string | null, created_at?: number | null, version?: number | null, can_edit?: boolean | null };

export type CharacterImagesFragment = { __typename?: 'Character', images?: Array<{ __typename?: 'Image', id?: string | null, title?: string | null, nsfw?: boolean | null, hidden?: boolean | null, background_color?: string | null, aspect_ratio?: number | null, comments_count?: number | null, favorites_count?: number | null, image_processing?: boolean | null, image_processing_error?: string | null, is_favorite?: boolean | null, is_managed?: boolean | null, width?: number | null, height?: number | null, url?: { __typename?: 'ImageUrl', small?: string | null, small_square?: string | null, medium?: string | null } | null, size?: { __typename?: 'ImageSize', small?: { __typename?: 'Geometry', width: number, height: number } | null, small_square?: { __typename?: 'Geometry', width: number, height: number } | null, medium?: { __typename?: 'Geometry', width: number, height: number } | null } | null } | null> | null };

export type CharacterProfileFragment = { __typename?: 'Character', profile_sections?: Array<{ __typename?: 'ProfileSection', id: string, title?: string | null, columns: Array<number | null>, row_order?: number | null, widgets?: Array<{ __typename?: 'Widget', id: string, widget_type: string, column: number, title?: string | null, row_order?: number | null, data?: { __typename?: 'Json' } | { __typename?: 'RichText', content?: string | null, content_html?: string | null } | { __typename?: 'Youtube', url?: string | null } | null } | null> | null } | null> | null };

export type CharacterSwatchesFragment = { __typename?: 'Character', swatches?: Array<{ __typename?: 'Swatch', id?: string | null, name?: string | null, color?: string | null, notes?: string | null } | null> | null };

export type CharacterThemeFragment = { __typename?: 'Character', theme?: { __typename?: 'Theme', id?: string | null, name?: string | null, colors?: { __typename?: 'ThemeColorData', primary?: string | null, accent1?: string | null, accent2?: string | null, background?: string | null, cardBackground?: string | null, imageBackground?: string | null, text?: string | null, textLight?: string | null, textMedium?: string | null } | null } | null };

export type CharacterUserFragment = { __typename?: 'Character', user?: { __typename?: 'User', username?: string | null, name?: string | null, is_admin?: boolean | null, is_patron?: boolean | null, avatar_url?: string | null, is_followed?: boolean | null } | null };

export type DefaultCharacterFieldsFragment = { __typename?: 'Character', avatar_url?: string | null, cover_image_url?: string | null, name: string, id?: string | null, slug: string, username: string, shortcode?: string | null, hidden?: boolean | null, nsfw?: boolean | null, special_notes?: string | null, special_notes_html?: string | null, species?: string | null, created_at?: number | null, version?: number | null, can_edit?: boolean | null, featured_image?: { __typename?: 'Image', url?: { __typename?: 'ImageUrl', large?: string | null } | null } | null, profile_image?: { __typename?: 'Image', url?: { __typename?: 'ImageUrl', medium?: string | null } | null } | null, lodestone_character?: { __typename?: 'Lodestone_Character', id?: string | null, name?: string | null, bio?: string | null, lodestone_id?: string | null, nameday?: string | null, remote_updated_at?: number | null, portrait_url?: string | null, title?: string | null, title_top?: boolean | null, town?: string | null, tribe?: string | null, diety?: string | null, gc_name?: string | null, gc_rank_name?: string | null, created_at?: number | null, updated_at?: number | null, race?: { __typename?: 'Lodestone_Race', id?: string | null, name?: string | null } | null, server?: { __typename?: 'Lodestone_Server', id?: string | null, name?: string | null, datacenter?: string | null } | null, active_class_job?: { __typename?: 'Lodestone_ClassJob', id?: string | null } | null, class_jobs?: Array<{ __typename?: 'Lodestone_ClassJob', id?: string | null, name?: string | null, class_abbr?: string | null, class_icon_url?: string | null, class_name?: string | null, job_abbr?: string | null, job_name?: string | null, level?: number | null, exp_level?: number | null, exp_level_max?: number | null, exp_level_togo?: number | null, specialized?: boolean | null, job_active?: boolean | null } | null> | null } | null, marketplace_listing?: { __typename?: 'MarketplaceListing', id?: string | null, amount_cents?: number | null, amount_currency?: string | null } | null, custom_attributes?: Array<{ __typename?: 'Attribute', id: string, name: string, value?: string | null } | null> | null, profile_sections?: Array<{ __typename?: 'ProfileSection', id: string, title?: string | null, columns: Array<number | null>, row_order?: number | null, widgets?: Array<{ __typename?: 'Widget', id: string, widget_type: string, column: number, title?: string | null, row_order?: number | null, data?: { __typename?: 'Json' } | { __typename?: 'RichText', content?: string | null, content_html?: string | null } | { __typename?: 'Youtube', url?: string | null } | null } | null> | null } | null> | null, swatches?: Array<{ __typename?: 'Swatch', id?: string | null, name?: string | null, color?: string | null, notes?: string | null } | null> | null, images?: Array<{ __typename?: 'Image', id?: string | null, title?: string | null, nsfw?: boolean | null, hidden?: boolean | null, background_color?: string | null, aspect_ratio?: number | null, comments_count?: number | null, favorites_count?: number | null, image_processing?: boolean | null, image_processing_error?: string | null, is_favorite?: boolean | null, is_managed?: boolean | null, width?: number | null, height?: number | null, url?: { __typename?: 'ImageUrl', small?: string | null, small_square?: string | null, medium?: string | null } | null, size?: { __typename?: 'ImageSize', small?: { __typename?: 'Geometry', width: number, height: number } | null, small_square?: { __typename?: 'Geometry', width: number, height: number } | null, medium?: { __typename?: 'Geometry', width: number, height: number } | null } | null } | null> | null, user?: { __typename?: 'User', username?: string | null, name?: string | null, is_admin?: boolean | null, is_patron?: boolean | null, avatar_url?: string | null, is_followed?: boolean | null } | null, theme?: { __typename?: 'Theme', id?: string | null, name?: string | null, colors?: { __typename?: 'ThemeColorData', primary?: string | null, accent1?: string | null, accent2?: string | null, background?: string | null, cardBackground?: string | null, imageBackground?: string | null, text?: string | null, textLight?: string | null, textMedium?: string | null } | null } | null };

export type GalleryImageFieldsFragment = { __typename?: 'Image', id?: string | null, created_at?: number | null, title?: string | null, nsfw?: boolean | null, hidden?: boolean | null, background_color?: string | null, aspect_ratio?: number | null, comments_count?: number | null, favorites_count?: number | null, image_processing?: boolean | null, image_processing_error?: string | null, is_favorite?: boolean | null, is_managed?: boolean | null, width?: number | null, height?: number | null, url?: { __typename?: 'ImageUrl', thumbnail?: string | null, small?: string | null, medium?: string | null, large?: string | null } | null, size?: { __typename?: 'ImageSize', small?: { __typename?: 'Geometry', width: number, height: number } | null, small_square?: { __typename?: 'Geometry', width: number, height: number } | null, medium?: { __typename?: 'Geometry', width: number, height: number } | null } | null };

export type LodestoneCharacterFieldsFragment = { __typename?: 'Lodestone_Character', id?: string | null, name?: string | null, bio?: string | null, lodestone_id?: string | null, nameday?: string | null, remote_updated_at?: number | null, portrait_url?: string | null, title?: string | null, title_top?: boolean | null, town?: string | null, tribe?: string | null, diety?: string | null, gc_name?: string | null, gc_rank_name?: string | null, created_at?: number | null, updated_at?: number | null, race?: { __typename?: 'Lodestone_Race', id?: string | null, name?: string | null } | null, server?: { __typename?: 'Lodestone_Server', id?: string | null, name?: string | null, datacenter?: string | null } | null, active_class_job?: { __typename?: 'Lodestone_ClassJob', id?: string | null } | null, class_jobs?: Array<{ __typename?: 'Lodestone_ClassJob', id?: string | null, name?: string | null, class_abbr?: string | null, class_icon_url?: string | null, class_name?: string | null, job_abbr?: string | null, job_name?: string | null, level?: number | null, exp_level?: number | null, exp_level_max?: number | null, exp_level_togo?: number | null, specialized?: boolean | null, job_active?: boolean | null } | null> | null };

export type NotificationsFieldsFragment = { __typename?: 'Notification', id?: string | null, type?: string | null, title?: string | null, message?: string | null, icon?: string | null, href?: string | null, link?: string | null, tag?: string | null, read_at?: number | null, created_at?: number | null, is_unread?: boolean | null };

export type TransfersFieldsFragment = { __typename?: 'Conversation', id: string, guid: string, unreadCount?: number | null, lastMessage?: { __typename?: 'Message', message?: string | null, created_at?: number | null, is_self?: boolean | null, user: { __typename?: 'User', name?: string | null } } | null, user?: { __typename?: 'User', name?: string | null, username?: string | null, avatar_url?: string | null, is_admin?: boolean | null, is_patron?: boolean | null } | null };

export type WidgetFieldsFragment = { __typename?: 'Widget', id: string, widget_type: string, column: number, title?: string | null, row_order?: number | null, data?: { __typename?: 'Json' } | { __typename?: 'RichText', content?: string | null, content_html?: string | null } | { __typename?: 'Youtube', url?: string | null } | null };

export type GetCharacterImagesFragment = { __typename?: 'Character', id?: string | null, images?: Array<{ __typename?: 'Image', id?: string | null } | null> | null };

export type BlockUserMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type BlockUserMutation = { __typename?: 'Mutation', blockUser?: { __typename?: 'User', id: string, username?: string | null, is_blocked?: boolean | null, is_followed?: boolean | null } | null };

export type UnblockUserMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type UnblockUserMutation = { __typename?: 'Mutation', unblockUser?: { __typename?: 'User', id: string, username?: string | null, is_blocked?: boolean | null, is_followed?: boolean | null } | null };

export type UpdateModerationMutationVariables = Exact<{
  id: Scalars['ID'];
  resolution: Scalars['String'];
}>;


export type UpdateModerationMutation = { __typename?: 'Mutation', updateModeration?: { __typename?: 'Moderation', id?: string | null, status?: string | null } | null };

export type UploadImageMutationVariables = Exact<{
  characterId: Scalars['ID'];
  folder?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  nsfw?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
  location: Scalars['String'];
}>;


export type UploadImageMutation = { __typename?: 'Mutation', uploadImage?: { __typename?: 'Image', id?: string | null, created_at?: number | null, title?: string | null, nsfw?: boolean | null, hidden?: boolean | null, background_color?: string | null, aspect_ratio?: number | null, comments_count?: number | null, favorites_count?: number | null, image_processing?: boolean | null, image_processing_error?: string | null, is_favorite?: boolean | null, is_managed?: boolean | null, width?: number | null, height?: number | null, character?: { __typename?: 'Character', id?: string | null } | null, url?: { __typename?: 'ImageUrl', thumbnail?: string | null, small?: string | null, medium?: string | null, large?: string | null } | null, size?: { __typename?: 'ImageSize', small?: { __typename?: 'Geometry', width: number, height: number } | null, small_square?: { __typename?: 'Geometry', width: number, height: number } | null, medium?: { __typename?: 'Geometry', width: number, height: number } | null } | null } | null };

export type GetSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSessionQuery = { __typename?: 'Query', getSession?: { __typename?: 'Session', sessionId?: string | null, currentUser?: { __typename?: 'User', name?: string | null, username?: string | null, is_admin?: boolean | null } | null } | null };

export type GetCharacterProfileQueryVariables = Exact<{
  username: Scalars['String'];
  slug: Scalars['String'];
}>;


export type GetCharacterProfileQuery = { __typename?: 'Query', getCharacterByUrl?: { __typename?: 'Character', avatar_url?: string | null, cover_image_url?: string | null, name: string, id?: string | null, slug: string, username: string, shortcode?: string | null, hidden?: boolean | null, nsfw?: boolean | null, special_notes?: string | null, special_notes_html?: string | null, species?: string | null, created_at?: number | null, version?: number | null, can_edit?: boolean | null, featured_image?: { __typename?: 'Image', url?: { __typename?: 'ImageUrl', large?: string | null } | null } | null, profile_image?: { __typename?: 'Image', url?: { __typename?: 'ImageUrl', medium?: string | null } | null } | null, lodestone_character?: { __typename?: 'Lodestone_Character', id?: string | null, name?: string | null, bio?: string | null, lodestone_id?: string | null, nameday?: string | null, remote_updated_at?: number | null, portrait_url?: string | null, title?: string | null, title_top?: boolean | null, town?: string | null, tribe?: string | null, diety?: string | null, gc_name?: string | null, gc_rank_name?: string | null, created_at?: number | null, updated_at?: number | null, race?: { __typename?: 'Lodestone_Race', id?: string | null, name?: string | null } | null, server?: { __typename?: 'Lodestone_Server', id?: string | null, name?: string | null, datacenter?: string | null } | null, active_class_job?: { __typename?: 'Lodestone_ClassJob', id?: string | null } | null, class_jobs?: Array<{ __typename?: 'Lodestone_ClassJob', id?: string | null, name?: string | null, class_abbr?: string | null, class_icon_url?: string | null, class_name?: string | null, job_abbr?: string | null, job_name?: string | null, level?: number | null, exp_level?: number | null, exp_level_max?: number | null, exp_level_togo?: number | null, specialized?: boolean | null, job_active?: boolean | null } | null> | null } | null, marketplace_listing?: { __typename?: 'MarketplaceListing', id?: string | null, amount_cents?: number | null, amount_currency?: string | null } | null, custom_attributes?: Array<{ __typename?: 'Attribute', id: string, name: string, value?: string | null } | null> | null, profile_sections?: Array<{ __typename?: 'ProfileSection', id: string, title?: string | null, columns: Array<number | null>, row_order?: number | null, widgets?: Array<{ __typename?: 'Widget', id: string, widget_type: string, column: number, title?: string | null, row_order?: number | null, data?: { __typename?: 'Json' } | { __typename?: 'RichText', content?: string | null, content_html?: string | null } | { __typename?: 'Youtube', url?: string | null } | null } | null> | null } | null> | null, swatches?: Array<{ __typename?: 'Swatch', id?: string | null, name?: string | null, color?: string | null, notes?: string | null } | null> | null, images?: Array<{ __typename?: 'Image', id?: string | null, title?: string | null, nsfw?: boolean | null, hidden?: boolean | null, background_color?: string | null, aspect_ratio?: number | null, comments_count?: number | null, favorites_count?: number | null, image_processing?: boolean | null, image_processing_error?: string | null, is_favorite?: boolean | null, is_managed?: boolean | null, width?: number | null, height?: number | null, url?: { __typename?: 'ImageUrl', small?: string | null, small_square?: string | null, medium?: string | null } | null, size?: { __typename?: 'ImageSize', small?: { __typename?: 'Geometry', width: number, height: number } | null, small_square?: { __typename?: 'Geometry', width: number, height: number } | null, medium?: { __typename?: 'Geometry', width: number, height: number } | null } | null } | null> | null, user?: { __typename?: 'User', username?: string | null, name?: string | null, is_admin?: boolean | null, is_patron?: boolean | null, avatar_url?: string | null, is_followed?: boolean | null } | null, theme?: { __typename?: 'Theme', id?: string | null, name?: string | null, colors?: { __typename?: 'ThemeColorData', primary?: string | null, accent1?: string | null, accent2?: string | null, background?: string | null, cardBackground?: string | null, imageBackground?: string | null, text?: string | null, textLight?: string | null, textMedium?: string | null } | null } | null } | null };

export type GetCharacterProfileByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCharacterProfileByIdQuery = { __typename?: 'Query', getCharacter?: { __typename?: 'Character', avatar_url?: string | null, cover_image_url?: string | null, name: string, id?: string | null, slug: string, username: string, shortcode?: string | null, hidden?: boolean | null, nsfw?: boolean | null, special_notes?: string | null, special_notes_html?: string | null, species?: string | null, created_at?: number | null, version?: number | null, can_edit?: boolean | null, featured_image?: { __typename?: 'Image', url?: { __typename?: 'ImageUrl', large?: string | null } | null } | null, profile_image?: { __typename?: 'Image', url?: { __typename?: 'ImageUrl', medium?: string | null } | null } | null, lodestone_character?: { __typename?: 'Lodestone_Character', id?: string | null, name?: string | null, bio?: string | null, lodestone_id?: string | null, nameday?: string | null, remote_updated_at?: number | null, portrait_url?: string | null, title?: string | null, title_top?: boolean | null, town?: string | null, tribe?: string | null, diety?: string | null, gc_name?: string | null, gc_rank_name?: string | null, created_at?: number | null, updated_at?: number | null, race?: { __typename?: 'Lodestone_Race', id?: string | null, name?: string | null } | null, server?: { __typename?: 'Lodestone_Server', id?: string | null, name?: string | null, datacenter?: string | null } | null, active_class_job?: { __typename?: 'Lodestone_ClassJob', id?: string | null } | null, class_jobs?: Array<{ __typename?: 'Lodestone_ClassJob', id?: string | null, name?: string | null, class_abbr?: string | null, class_icon_url?: string | null, class_name?: string | null, job_abbr?: string | null, job_name?: string | null, level?: number | null, exp_level?: number | null, exp_level_max?: number | null, exp_level_togo?: number | null, specialized?: boolean | null, job_active?: boolean | null } | null> | null } | null, marketplace_listing?: { __typename?: 'MarketplaceListing', id?: string | null, amount_cents?: number | null, amount_currency?: string | null } | null, custom_attributes?: Array<{ __typename?: 'Attribute', id: string, name: string, value?: string | null } | null> | null, profile_sections?: Array<{ __typename?: 'ProfileSection', id: string, title?: string | null, columns: Array<number | null>, row_order?: number | null, widgets?: Array<{ __typename?: 'Widget', id: string, widget_type: string, column: number, title?: string | null, row_order?: number | null, data?: { __typename?: 'Json' } | { __typename?: 'RichText', content?: string | null, content_html?: string | null } | { __typename?: 'Youtube', url?: string | null } | null } | null> | null } | null> | null, swatches?: Array<{ __typename?: 'Swatch', id?: string | null, name?: string | null, color?: string | null, notes?: string | null } | null> | null, images?: Array<{ __typename?: 'Image', id?: string | null, title?: string | null, nsfw?: boolean | null, hidden?: boolean | null, background_color?: string | null, aspect_ratio?: number | null, comments_count?: number | null, favorites_count?: number | null, image_processing?: boolean | null, image_processing_error?: string | null, is_favorite?: boolean | null, is_managed?: boolean | null, width?: number | null, height?: number | null, url?: { __typename?: 'ImageUrl', small?: string | null, small_square?: string | null, medium?: string | null } | null, size?: { __typename?: 'ImageSize', small?: { __typename?: 'Geometry', width: number, height: number } | null, small_square?: { __typename?: 'Geometry', width: number, height: number } | null, medium?: { __typename?: 'Geometry', width: number, height: number } | null } | null } | null> | null, user?: { __typename?: 'User', username?: string | null, name?: string | null, is_admin?: boolean | null, is_patron?: boolean | null, avatar_url?: string | null, is_followed?: boolean | null } | null, theme?: { __typename?: 'Theme', id?: string | null, name?: string | null, colors?: { __typename?: 'ThemeColorData', primary?: string | null, accent1?: string | null, accent2?: string | null, background?: string | null, cardBackground?: string | null, imageBackground?: string | null, text?: string | null, textLight?: string | null, textMedium?: string | null } | null } | null } | null };

export type GetImageUploadTokenQueryVariables = Exact<{
  characterId: Scalars['ID'];
}>;


export type GetImageUploadTokenQuery = { __typename?: 'Query', getImageUploadToken?: { __typename?: 'ImageUploadToken', key?: string | null, acl?: string | null, success_action_status?: string | null, policy?: string | null, x_amz_credential?: string | null, x_amz_algorithm?: string | null, x_amz_date?: string | null, x_amz_signature?: string | null, url?: string | null } | null };

export type GetNextModerationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNextModerationQuery = { __typename?: 'Query', getNextModeration?: { __typename?: 'Moderation', id?: string | null, comment?: string | null, violationType?: string | null, violationMessage?: string | null, dmcaSourceUrl?: string | null, status?: string | null, itemType?: string | null, itemId?: string | null, user?: { __typename?: 'User', username?: string | null } | null, sender?: { __typename?: 'User', username?: string | null } | null, item?: { __typename?: 'Image', caption?: string | null, hidden?: boolean | null, nsfw?: boolean | null, source_url?: string | null, url?: { __typename?: 'ImageUrl', medium?: string | null } | null } | null } | null };

export type GetUserProfileQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetUserProfileQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', id: string, name?: string | null, username?: string | null, created_at?: number | null, profile?: string | null, profile_html?: string | null, profile_image_url?: string | null, blocks?: boolean | null, is_blocked?: boolean | null, is_followed?: boolean | null, is_admin?: boolean | null, is_managed?: boolean | null, is_moderator?: boolean | null, is_supporter?: boolean | null, is_patron?: boolean | null, character_groups?: Array<{ __typename?: 'CharacterGroup', name: string, characters_count: number } | null> | null } | null };

export type GetCharacterImagesQueryVariables = Exact<{
  username: Scalars['String'];
  slug: Scalars['String'];
}>;


export type GetCharacterImagesQuery = { __typename?: 'Query', getCharacterByUrl?: { __typename?: 'Character', id?: string | null, media_folders?: Array<{ __typename?: 'MediaFolder', name?: string | null, slug?: string | null, id?: string | null, is_nsfw?: boolean | null, is_password_protected?: boolean | null, media_count?: number | null } | null> | null, images?: Array<{ __typename?: 'Image', id?: string | null, created_at?: number | null, title?: string | null, nsfw?: boolean | null, hidden?: boolean | null, background_color?: string | null, aspect_ratio?: number | null, comments_count?: number | null, favorites_count?: number | null, image_processing?: boolean | null, image_processing_error?: string | null, is_favorite?: boolean | null, is_managed?: boolean | null, width?: number | null, height?: number | null, url?: { __typename?: 'ImageUrl', thumbnail?: string | null, small?: string | null, medium?: string | null, large?: string | null } | null, size?: { __typename?: 'ImageSize', small?: { __typename?: 'Geometry', width: number, height: number } | null, small_square?: { __typename?: 'Geometry', width: number, height: number } | null, medium?: { __typename?: 'Geometry', width: number, height: number } | null } | null } | null> | null } | null };

export const ConversationsFieldsFragmentDoc = gql`
    fragment ConversationsFields on Conversation {
  id
  guid
  unreadCount
  lastMessage {
    message
    created_at
    is_self
    user {
      name
    }
  }
  user {
    name
    username
    avatar_url
    is_admin
    is_patron
  }
}
    `;
export const ForumPostFieldsFragmentDoc = gql`
    fragment ForumPostFields on ForumPost {
  id
  content
  content_html
  karma_total
  created_at
  updated_at
  admin_post
  moderator_post
  is_edited
  can_edit
  can_destroy
  user {
    username
    name
    is_admin
    is_patron
    is_supporter
    avatar_url
  }
  character {
    id
    name
    slug
    profile_image {
      url {
        thumbnail
      }
    }
  }
}
    `;
export const CharacterFieldsFragmentDoc = gql`
    fragment CharacterFields on Character {
  name
  id
  slug
  username
  shortcode
  hidden
  nsfw
  special_notes
  special_notes_html
  species
  created_at
  version
  can_edit
}
    `;
export const CharacterAttributesFragmentDoc = gql`
    fragment CharacterAttributes on Character {
  custom_attributes {
    id
    name
    value
  }
}
    `;
export const WidgetFieldsFragmentDoc = gql`
    fragment WidgetFields on Widget {
  id
  widget_type
  column
  title
  row_order
  data {
    ... on RichText {
      content
      content_html
    }
    ... on Youtube {
      url
    }
  }
}
    `;
export const CharacterProfileFragmentDoc = gql`
    fragment CharacterProfile on Character {
  profile_sections {
    id
    title
    columns
    row_order
    widgets {
      ...WidgetFields
    }
  }
}
    ${WidgetFieldsFragmentDoc}`;
export const CharacterSwatchesFragmentDoc = gql`
    fragment CharacterSwatches on Character {
  swatches {
    id
    name
    color
    notes
  }
}
    `;
export const CharacterImagesFragmentDoc = gql`
    fragment CharacterImages on Character {
  images {
    id
    title
    nsfw
    hidden
    background_color
    aspect_ratio
    comments_count
    favorites_count
    image_processing
    image_processing_error
    is_favorite
    is_managed
    width
    height
    url {
      small
      small_square
      medium
    }
    size {
      small {
        width
        height
      }
      small_square {
        width
        height
      }
      medium {
        width
        height
      }
    }
  }
}
    `;
export const CharacterUserFragmentDoc = gql`
    fragment CharacterUser on Character {
  user {
    username
    name
    is_admin
    is_patron
    avatar_url
    is_followed
  }
}
    `;
export const CharacterThemeFragmentDoc = gql`
    fragment CharacterTheme on Character {
  theme {
    id
    name
    colors {
      primary
      accent1
      accent2
      background
      cardBackground
      imageBackground
      text
      textLight
      textMedium
    }
  }
}
    `;
export const LodestoneCharacterFieldsFragmentDoc = gql`
    fragment LodestoneCharacterFields on Lodestone_Character {
  id
  name
  bio
  lodestone_id
  nameday
  remote_updated_at
  portrait_url
  title
  title_top
  town
  tribe
  diety
  gc_name
  gc_rank_name
  created_at
  updated_at
  race {
    id
    name
  }
  server {
    id
    name
    datacenter
  }
  active_class_job {
    id
  }
  class_jobs {
    id
    name
    class_abbr
    class_icon_url
    class_name
    job_abbr
    job_name
    level
    exp_level
    exp_level_max
    exp_level_togo
    specialized
    job_active
  }
}
    `;
export const DefaultCharacterFieldsFragmentDoc = gql`
    fragment DefaultCharacterFields on Character {
  ...CharacterFields
  ...CharacterAttributes
  ...CharacterProfile
  ...CharacterSwatches
  ...CharacterImages
  ...CharacterUser
  ...CharacterTheme
  featured_image {
    url {
      large
    }
  }
  profile_image {
    url {
      medium
    }
  }
  avatar_url(style: "medium")
  cover_image_url(style: "large")
  lodestone_character {
    ...LodestoneCharacterFields
  }
  marketplace_listing {
    id
    amount_cents
    amount_currency
  }
}
    ${CharacterFieldsFragmentDoc}
${CharacterAttributesFragmentDoc}
${CharacterProfileFragmentDoc}
${CharacterSwatchesFragmentDoc}
${CharacterImagesFragmentDoc}
${CharacterUserFragmentDoc}
${CharacterThemeFragmentDoc}
${LodestoneCharacterFieldsFragmentDoc}`;
export const GalleryImageFieldsFragmentDoc = gql`
    fragment GalleryImageFields on Image {
  id
  created_at
  title
  nsfw
  hidden
  background_color
  aspect_ratio
  comments_count
  favorites_count
  image_processing
  image_processing_error
  is_favorite
  is_managed
  width
  height
  url {
    thumbnail
    small
    small
    medium
    large
  }
  size {
    small {
      width
      height
    }
    small_square {
      width
      height
    }
    medium {
      width
      height
    }
  }
}
    `;
export const NotificationsFieldsFragmentDoc = gql`
    fragment NotificationsFields on Notification {
  id
  type
  title
  message
  icon
  href
  link
  tag
  read_at
  created_at
  is_unread
}
    `;
export const TransfersFieldsFragmentDoc = gql`
    fragment TransfersFields on Conversation {
  id
  guid
  unreadCount
  lastMessage {
    message
    created_at
    is_self
    user {
      name
    }
  }
  user {
    name
    username
    avatar_url
    is_admin
    is_patron
  }
}
    `;
export const GetCharacterImagesFragmentDoc = gql`
    fragment getCharacterImages on Character {
  id
  images {
    id
  }
}
    `;
export const AutocompleteCharacterDocument = gql`
    query AutocompleteCharacter($slug: String!, $username: String!) {
  autocompleteCharacter(slug: $slug, username: $username) {
    id
    name
    shortcode
    species
    profile_image {
      url {
        thumbnail
      }
    }
    path
  }
}
    `;

/**
 * __useAutocompleteCharacterQuery__
 *
 * To run a query within a React component, call `useAutocompleteCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useAutocompleteCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAutocompleteCharacterQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useAutocompleteCharacterQuery(baseOptions: Apollo.QueryHookOptions<AutocompleteCharacterQuery, AutocompleteCharacterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AutocompleteCharacterQuery, AutocompleteCharacterQueryVariables>(AutocompleteCharacterDocument, options);
      }
export function useAutocompleteCharacterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AutocompleteCharacterQuery, AutocompleteCharacterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AutocompleteCharacterQuery, AutocompleteCharacterQueryVariables>(AutocompleteCharacterDocument, options);
        }
export type AutocompleteCharacterQueryHookResult = ReturnType<typeof useAutocompleteCharacterQuery>;
export type AutocompleteCharacterLazyQueryHookResult = ReturnType<typeof useAutocompleteCharacterLazyQuery>;
export type AutocompleteCharacterQueryResult = Apollo.QueryResult<AutocompleteCharacterQuery, AutocompleteCharacterQueryVariables>;
export const CreateActivityDocument = gql`
    mutation CreateActivity($comment: String!, $characterId: ID) {
  createActivity(comment: $comment, character_id: $characterId) {
    id
    user_id
    character_id
    comment
  }
}
    `;
export type CreateActivityMutationFn = Apollo.MutationFunction<CreateActivityMutation, CreateActivityMutationVariables>;

/**
 * __useCreateActivityMutation__
 *
 * To run a mutation, you first call `useCreateActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createActivityMutation, { data, loading, error }] = useCreateActivityMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *      characterId: // value for 'characterId'
 *   },
 * });
 */
export function useCreateActivityMutation(baseOptions?: Apollo.MutationHookOptions<CreateActivityMutation, CreateActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateActivityMutation, CreateActivityMutationVariables>(CreateActivityDocument, options);
      }
export type CreateActivityMutationHookResult = ReturnType<typeof useCreateActivityMutation>;
export type CreateActivityMutationResult = Apollo.MutationResult<CreateActivityMutation>;
export type CreateActivityMutationOptions = Apollo.BaseMutationOptions<CreateActivityMutation, CreateActivityMutationVariables>;
export const GetArtistsDocument = gql`
    query getArtists($page: Int!) {
  getArtists(page: $page) {
    currentPage
    perPage
    artists {
      name
      slug
      guid
      profile_markdown
      commission_info_markdown
      locked
      avatar_url
      user {
        name
        username
      }
    }
  }
}
    `;

/**
 * __useGetArtistsQuery__
 *
 * To run a query within a React component, call `useGetArtistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArtistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArtistsQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetArtistsQuery(baseOptions: Apollo.QueryHookOptions<GetArtistsQuery, GetArtistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArtistsQuery, GetArtistsQueryVariables>(GetArtistsDocument, options);
      }
export function useGetArtistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArtistsQuery, GetArtistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArtistsQuery, GetArtistsQueryVariables>(GetArtistsDocument, options);
        }
export type GetArtistsQueryHookResult = ReturnType<typeof useGetArtistsQuery>;
export type GetArtistsLazyQueryHookResult = ReturnType<typeof useGetArtistsLazyQuery>;
export type GetArtistsQueryResult = Apollo.QueryResult<GetArtistsQuery, GetArtistsQueryVariables>;
export const GetArtistDocument = gql`
    query getArtist($slug: String!) {
  getArtist(slug: $slug) {
    name
    slug
    guid
    profile_markdown
    commission_info_markdown
    locked
    avatar_url
    user {
      name
      username
    }
  }
}
    `;

/**
 * __useGetArtistQuery__
 *
 * To run a query within a React component, call `useGetArtistQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArtistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArtistQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetArtistQuery(baseOptions: Apollo.QueryHookOptions<GetArtistQuery, GetArtistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArtistQuery, GetArtistQueryVariables>(GetArtistDocument, options);
      }
export function useGetArtistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArtistQuery, GetArtistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArtistQuery, GetArtistQueryVariables>(GetArtistDocument, options);
        }
export type GetArtistQueryHookResult = ReturnType<typeof useGetArtistQuery>;
export type GetArtistLazyQueryHookResult = ReturnType<typeof useGetArtistLazyQuery>;
export type GetArtistQueryResult = Apollo.QueryResult<GetArtistQuery, GetArtistQueryVariables>;
export const SetCharacterAvatarBlobDocument = gql`
    mutation setCharacterAvatarBlob($id: ID!, $blob: String) {
  setCharacterAvatarBlob(id: $id, blob: $blob) {
    id
    avatar_url(style: "medium")
  }
}
    `;
export type SetCharacterAvatarBlobMutationFn = Apollo.MutationFunction<SetCharacterAvatarBlobMutation, SetCharacterAvatarBlobMutationVariables>;

/**
 * __useSetCharacterAvatarBlobMutation__
 *
 * To run a mutation, you first call `useSetCharacterAvatarBlobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetCharacterAvatarBlobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setCharacterAvatarBlobMutation, { data, loading, error }] = useSetCharacterAvatarBlobMutation({
 *   variables: {
 *      id: // value for 'id'
 *      blob: // value for 'blob'
 *   },
 * });
 */
export function useSetCharacterAvatarBlobMutation(baseOptions?: Apollo.MutationHookOptions<SetCharacterAvatarBlobMutation, SetCharacterAvatarBlobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetCharacterAvatarBlobMutation, SetCharacterAvatarBlobMutationVariables>(SetCharacterAvatarBlobDocument, options);
      }
export type SetCharacterAvatarBlobMutationHookResult = ReturnType<typeof useSetCharacterAvatarBlobMutation>;
export type SetCharacterAvatarBlobMutationResult = Apollo.MutationResult<SetCharacterAvatarBlobMutation>;
export type SetCharacterAvatarBlobMutationOptions = Apollo.BaseMutationOptions<SetCharacterAvatarBlobMutation, SetCharacterAvatarBlobMutationVariables>;
export const CreateColorSchemeDocument = gql`
    mutation createColorScheme($characterId: ID!, $colorData: ThemeColorDataInput) {
  createColorScheme(characterId: $characterId, colorData: $colorData) {
    id
    name
    colors {
      primary
      accent1
      accent2
      background
      cardBackground
      imageBackground
      text
      textLight
      textMedium
    }
  }
}
    `;
export type CreateColorSchemeMutationFn = Apollo.MutationFunction<CreateColorSchemeMutation, CreateColorSchemeMutationVariables>;

/**
 * __useCreateColorSchemeMutation__
 *
 * To run a mutation, you first call `useCreateColorSchemeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateColorSchemeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createColorSchemeMutation, { data, loading, error }] = useCreateColorSchemeMutation({
 *   variables: {
 *      characterId: // value for 'characterId'
 *      colorData: // value for 'colorData'
 *   },
 * });
 */
export function useCreateColorSchemeMutation(baseOptions?: Apollo.MutationHookOptions<CreateColorSchemeMutation, CreateColorSchemeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateColorSchemeMutation, CreateColorSchemeMutationVariables>(CreateColorSchemeDocument, options);
      }
export type CreateColorSchemeMutationHookResult = ReturnType<typeof useCreateColorSchemeMutation>;
export type CreateColorSchemeMutationResult = Apollo.MutationResult<CreateColorSchemeMutation>;
export type CreateColorSchemeMutationOptions = Apollo.BaseMutationOptions<CreateColorSchemeMutation, CreateColorSchemeMutationVariables>;
export const UpdateColorSchemeDocument = gql`
    mutation updateColorScheme($id: ID!, $colorData: ThemeColorDataInput!) {
  udpateColorScheme(id: $id, colorData: $colorData) {
    id
    name
    colors {
      primary
      accent1
      accent2
      background
      cardBackground
      imageBackground
      text
      textLight
      textMedium
    }
  }
}
    `;
export type UpdateColorSchemeMutationFn = Apollo.MutationFunction<UpdateColorSchemeMutation, UpdateColorSchemeMutationVariables>;

/**
 * __useUpdateColorSchemeMutation__
 *
 * To run a mutation, you first call `useUpdateColorSchemeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateColorSchemeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateColorSchemeMutation, { data, loading, error }] = useUpdateColorSchemeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      colorData: // value for 'colorData'
 *   },
 * });
 */
export function useUpdateColorSchemeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateColorSchemeMutation, UpdateColorSchemeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateColorSchemeMutation, UpdateColorSchemeMutationVariables>(UpdateColorSchemeDocument, options);
      }
export type UpdateColorSchemeMutationHookResult = ReturnType<typeof useUpdateColorSchemeMutation>;
export type UpdateColorSchemeMutationResult = Apollo.MutationResult<UpdateColorSchemeMutation>;
export type UpdateColorSchemeMutationOptions = Apollo.BaseMutationOptions<UpdateColorSchemeMutation, UpdateColorSchemeMutationVariables>;
export const SetCharacterCoverBlobDocument = gql`
    mutation setCharacterCoverBlob($id: ID!, $blob: String) {
  setCharacterCoverBlob(id: $id, blob: $blob) {
    id
    cover_image_url(style: "large")
  }
}
    `;
export type SetCharacterCoverBlobMutationFn = Apollo.MutationFunction<SetCharacterCoverBlobMutation, SetCharacterCoverBlobMutationVariables>;

/**
 * __useSetCharacterCoverBlobMutation__
 *
 * To run a mutation, you first call `useSetCharacterCoverBlobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetCharacterCoverBlobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setCharacterCoverBlobMutation, { data, loading, error }] = useSetCharacterCoverBlobMutation({
 *   variables: {
 *      id: // value for 'id'
 *      blob: // value for 'blob'
 *   },
 * });
 */
export function useSetCharacterCoverBlobMutation(baseOptions?: Apollo.MutationHookOptions<SetCharacterCoverBlobMutation, SetCharacterCoverBlobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetCharacterCoverBlobMutation, SetCharacterCoverBlobMutationVariables>(SetCharacterCoverBlobDocument, options);
      }
export type SetCharacterCoverBlobMutationHookResult = ReturnType<typeof useSetCharacterCoverBlobMutation>;
export type SetCharacterCoverBlobMutationResult = Apollo.MutationResult<SetCharacterCoverBlobMutation>;
export type SetCharacterCoverBlobMutationOptions = Apollo.BaseMutationOptions<SetCharacterCoverBlobMutation, SetCharacterCoverBlobMutationVariables>;
export const CreateMediaFolderDocument = gql`
    mutation createMediaFolder($characterId: ID!, $name: String!, $slug: String) {
  createMediaFolder(characterId: $characterId, name: $name, slug: $slug) {
    name
    slug
  }
}
    `;
export type CreateMediaFolderMutationFn = Apollo.MutationFunction<CreateMediaFolderMutation, CreateMediaFolderMutationVariables>;

/**
 * __useCreateMediaFolderMutation__
 *
 * To run a mutation, you first call `useCreateMediaFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMediaFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMediaFolderMutation, { data, loading, error }] = useCreateMediaFolderMutation({
 *   variables: {
 *      characterId: // value for 'characterId'
 *      name: // value for 'name'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCreateMediaFolderMutation(baseOptions?: Apollo.MutationHookOptions<CreateMediaFolderMutation, CreateMediaFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMediaFolderMutation, CreateMediaFolderMutationVariables>(CreateMediaFolderDocument, options);
      }
export type CreateMediaFolderMutationHookResult = ReturnType<typeof useCreateMediaFolderMutation>;
export type CreateMediaFolderMutationResult = Apollo.MutationResult<CreateMediaFolderMutation>;
export type CreateMediaFolderMutationOptions = Apollo.BaseMutationOptions<CreateMediaFolderMutation, CreateMediaFolderMutationVariables>;
export const GetCharacterVersionsDocument = gql`
    query getCharacterVersions($characterId: ID!) {
  getCharacter(id: $characterId) {
    id
    slug
    shortcode
    versions {
      id
      index
      event
      was_me
      created_at
      whodunnit {
        name
        username
      }
      object_changes
    }
  }
}
    `;

/**
 * __useGetCharacterVersionsQuery__
 *
 * To run a query within a React component, call `useGetCharacterVersionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterVersionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterVersionsQuery({
 *   variables: {
 *      characterId: // value for 'characterId'
 *   },
 * });
 */
export function useGetCharacterVersionsQuery(baseOptions: Apollo.QueryHookOptions<GetCharacterVersionsQuery, GetCharacterVersionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharacterVersionsQuery, GetCharacterVersionsQueryVariables>(GetCharacterVersionsDocument, options);
      }
export function useGetCharacterVersionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharacterVersionsQuery, GetCharacterVersionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharacterVersionsQuery, GetCharacterVersionsQueryVariables>(GetCharacterVersionsDocument, options);
        }
export type GetCharacterVersionsQueryHookResult = ReturnType<typeof useGetCharacterVersionsQuery>;
export type GetCharacterVersionsLazyQueryHookResult = ReturnType<typeof useGetCharacterVersionsLazyQuery>;
export type GetCharacterVersionsQueryResult = Apollo.QueryResult<GetCharacterVersionsQuery, GetCharacterVersionsQueryVariables>;
export const CreateLodestoneLinkDocument = gql`
    mutation createLodestoneLink($characterId: ID!, $lodestoneId: String!) {
  createLodestoneLink(characterId: $characterId, lodestoneId: $lodestoneId) {
    ...LodestoneCharacterFields
  }
}
    ${LodestoneCharacterFieldsFragmentDoc}`;
export type CreateLodestoneLinkMutationFn = Apollo.MutationFunction<CreateLodestoneLinkMutation, CreateLodestoneLinkMutationVariables>;

/**
 * __useCreateLodestoneLinkMutation__
 *
 * To run a mutation, you first call `useCreateLodestoneLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLodestoneLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLodestoneLinkMutation, { data, loading, error }] = useCreateLodestoneLinkMutation({
 *   variables: {
 *      characterId: // value for 'characterId'
 *      lodestoneId: // value for 'lodestoneId'
 *   },
 * });
 */
export function useCreateLodestoneLinkMutation(baseOptions?: Apollo.MutationHookOptions<CreateLodestoneLinkMutation, CreateLodestoneLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLodestoneLinkMutation, CreateLodestoneLinkMutationVariables>(CreateLodestoneLinkDocument, options);
      }
export type CreateLodestoneLinkMutationHookResult = ReturnType<typeof useCreateLodestoneLinkMutation>;
export type CreateLodestoneLinkMutationResult = Apollo.MutationResult<CreateLodestoneLinkMutation>;
export type CreateLodestoneLinkMutationOptions = Apollo.BaseMutationOptions<CreateLodestoneLinkMutation, CreateLodestoneLinkMutationVariables>;
export const UpdateLodestoneLinkDocument = gql`
    mutation updateLodestoneLink($characterId: ID!) {
  updateLodestoneLink(characterId: $characterId) {
    ...LodestoneCharacterFields
  }
}
    ${LodestoneCharacterFieldsFragmentDoc}`;
export type UpdateLodestoneLinkMutationFn = Apollo.MutationFunction<UpdateLodestoneLinkMutation, UpdateLodestoneLinkMutationVariables>;

/**
 * __useUpdateLodestoneLinkMutation__
 *
 * To run a mutation, you first call `useUpdateLodestoneLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLodestoneLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLodestoneLinkMutation, { data, loading, error }] = useUpdateLodestoneLinkMutation({
 *   variables: {
 *      characterId: // value for 'characterId'
 *   },
 * });
 */
export function useUpdateLodestoneLinkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLodestoneLinkMutation, UpdateLodestoneLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLodestoneLinkMutation, UpdateLodestoneLinkMutationVariables>(UpdateLodestoneLinkDocument, options);
      }
export type UpdateLodestoneLinkMutationHookResult = ReturnType<typeof useUpdateLodestoneLinkMutation>;
export type UpdateLodestoneLinkMutationResult = Apollo.MutationResult<UpdateLodestoneLinkMutation>;
export type UpdateLodestoneLinkMutationOptions = Apollo.BaseMutationOptions<UpdateLodestoneLinkMutation, UpdateLodestoneLinkMutationVariables>;
export const ArchiveCharacterDocument = gql`
    mutation archiveCharacter($id: ID!, $confirmation: String!) {
  destroyCharacter(id: $id, confirmation: $confirmation) {
    id
    deleted_at
  }
}
    `;
export type ArchiveCharacterMutationFn = Apollo.MutationFunction<ArchiveCharacterMutation, ArchiveCharacterMutationVariables>;

/**
 * __useArchiveCharacterMutation__
 *
 * To run a mutation, you first call `useArchiveCharacterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveCharacterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveCharacterMutation, { data, loading, error }] = useArchiveCharacterMutation({
 *   variables: {
 *      id: // value for 'id'
 *      confirmation: // value for 'confirmation'
 *   },
 * });
 */
export function useArchiveCharacterMutation(baseOptions?: Apollo.MutationHookOptions<ArchiveCharacterMutation, ArchiveCharacterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ArchiveCharacterMutation, ArchiveCharacterMutationVariables>(ArchiveCharacterDocument, options);
      }
export type ArchiveCharacterMutationHookResult = ReturnType<typeof useArchiveCharacterMutation>;
export type ArchiveCharacterMutationResult = Apollo.MutationResult<ArchiveCharacterMutation>;
export type ArchiveCharacterMutationOptions = Apollo.BaseMutationOptions<ArchiveCharacterMutation, ArchiveCharacterMutationVariables>;
export const TransferCharacterDocument = gql`
    mutation transferCharacter($id: ID!, $destination: String!) {
  transferCharacter(id: $id, destination: $destination) {
    id
    pending_transfer {
      created_at
      id
    }
  }
}
    `;
export type TransferCharacterMutationFn = Apollo.MutationFunction<TransferCharacterMutation, TransferCharacterMutationVariables>;

/**
 * __useTransferCharacterMutation__
 *
 * To run a mutation, you first call `useTransferCharacterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTransferCharacterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [transferCharacterMutation, { data, loading, error }] = useTransferCharacterMutation({
 *   variables: {
 *      id: // value for 'id'
 *      destination: // value for 'destination'
 *   },
 * });
 */
export function useTransferCharacterMutation(baseOptions?: Apollo.MutationHookOptions<TransferCharacterMutation, TransferCharacterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TransferCharacterMutation, TransferCharacterMutationVariables>(TransferCharacterDocument, options);
      }
export type TransferCharacterMutationHookResult = ReturnType<typeof useTransferCharacterMutation>;
export type TransferCharacterMutationResult = Apollo.MutationResult<TransferCharacterMutation>;
export type TransferCharacterMutationOptions = Apollo.BaseMutationOptions<TransferCharacterMutation, TransferCharacterMutationVariables>;
export const UpdateSettingsDocument = gql`
    mutation updateSettings($id: ID!, $name: String, $species: String, $slug: String, $shortcode: String, $nsfw: Boolean, $hidden: Boolean) {
  updateCharacter(
    id: $id
    name: $name
    species: $species
    slug: $slug
    shortcode: $shortcode
    nsfw: $nsfw
    hidden: $hidden
  ) {
    id
    name
    species
    slug
    shortcode
    nsfw
    hidden
  }
}
    `;
export type UpdateSettingsMutationFn = Apollo.MutationFunction<UpdateSettingsMutation, UpdateSettingsMutationVariables>;

/**
 * __useUpdateSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSettingsMutation, { data, loading, error }] = useUpdateSettingsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      species: // value for 'species'
 *      slug: // value for 'slug'
 *      shortcode: // value for 'shortcode'
 *      nsfw: // value for 'nsfw'
 *      hidden: // value for 'hidden'
 *   },
 * });
 */
export function useUpdateSettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSettingsMutation, UpdateSettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSettingsMutation, UpdateSettingsMutationVariables>(UpdateSettingsDocument, options);
      }
export type UpdateSettingsMutationHookResult = ReturnType<typeof useUpdateSettingsMutation>;
export type UpdateSettingsMutationResult = Apollo.MutationResult<UpdateSettingsMutation>;
export type UpdateSettingsMutationOptions = Apollo.BaseMutationOptions<UpdateSettingsMutation, UpdateSettingsMutationVariables>;
export const CreateWidgetDocument = gql`
    mutation createWidget($characterId: ID!, $sectionId: ID!, $columnId: ID!, $type: String!) {
  createProfileWidget(
    characterId: $characterId
    sectionId: $sectionId
    columnId: $columnId
    type: $type
  ) {
    ...WidgetFields
  }
}
    ${WidgetFieldsFragmentDoc}`;
export type CreateWidgetMutationFn = Apollo.MutationFunction<CreateWidgetMutation, CreateWidgetMutationVariables>;

/**
 * __useCreateWidgetMutation__
 *
 * To run a mutation, you first call `useCreateWidgetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWidgetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWidgetMutation, { data, loading, error }] = useCreateWidgetMutation({
 *   variables: {
 *      characterId: // value for 'characterId'
 *      sectionId: // value for 'sectionId'
 *      columnId: // value for 'columnId'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateWidgetMutation(baseOptions?: Apollo.MutationHookOptions<CreateWidgetMutation, CreateWidgetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWidgetMutation, CreateWidgetMutationVariables>(CreateWidgetDocument, options);
      }
export type CreateWidgetMutationHookResult = ReturnType<typeof useCreateWidgetMutation>;
export type CreateWidgetMutationResult = Apollo.MutationResult<CreateWidgetMutation>;
export type CreateWidgetMutationOptions = Apollo.BaseMutationOptions<CreateWidgetMutation, CreateWidgetMutationVariables>;
export const CreateProfileSectionDocument = gql`
    mutation createProfileSection($characterId: ID!, $createAfterSectionId: ID) {
  createProfileSection(
    characterId: $characterId
    createAfterSectionId: $createAfterSectionId
  ) {
    id
    title
    row_order
  }
}
    `;
export type CreateProfileSectionMutationFn = Apollo.MutationFunction<CreateProfileSectionMutation, CreateProfileSectionMutationVariables>;

/**
 * __useCreateProfileSectionMutation__
 *
 * To run a mutation, you first call `useCreateProfileSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfileSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfileSectionMutation, { data, loading, error }] = useCreateProfileSectionMutation({
 *   variables: {
 *      characterId: // value for 'characterId'
 *      createAfterSectionId: // value for 'createAfterSectionId'
 *   },
 * });
 */
export function useCreateProfileSectionMutation(baseOptions?: Apollo.MutationHookOptions<CreateProfileSectionMutation, CreateProfileSectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProfileSectionMutation, CreateProfileSectionMutationVariables>(CreateProfileSectionDocument, options);
      }
export type CreateProfileSectionMutationHookResult = ReturnType<typeof useCreateProfileSectionMutation>;
export type CreateProfileSectionMutationResult = Apollo.MutationResult<CreateProfileSectionMutation>;
export type CreateProfileSectionMutationOptions = Apollo.BaseMutationOptions<CreateProfileSectionMutation, CreateProfileSectionMutationVariables>;
export const DeleteProfileSectionDocument = gql`
    mutation deleteProfileSection($id: ID!) {
  deleteProfileSection(id: $id) {
    id
  }
}
    `;
export type DeleteProfileSectionMutationFn = Apollo.MutationFunction<DeleteProfileSectionMutation, DeleteProfileSectionMutationVariables>;

/**
 * __useDeleteProfileSectionMutation__
 *
 * To run a mutation, you first call `useDeleteProfileSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProfileSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProfileSectionMutation, { data, loading, error }] = useDeleteProfileSectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProfileSectionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProfileSectionMutation, DeleteProfileSectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProfileSectionMutation, DeleteProfileSectionMutationVariables>(DeleteProfileSectionDocument, options);
      }
export type DeleteProfileSectionMutationHookResult = ReturnType<typeof useDeleteProfileSectionMutation>;
export type DeleteProfileSectionMutationResult = Apollo.MutationResult<DeleteProfileSectionMutation>;
export type DeleteProfileSectionMutationOptions = Apollo.BaseMutationOptions<DeleteProfileSectionMutation, DeleteProfileSectionMutationVariables>;
export const DeleteProfileWidgetDocument = gql`
    mutation deleteProfileWidget($id: ID!) {
  deleteProfileWidget(id: $id) {
    id
  }
}
    `;
export type DeleteProfileWidgetMutationFn = Apollo.MutationFunction<DeleteProfileWidgetMutation, DeleteProfileWidgetMutationVariables>;

/**
 * __useDeleteProfileWidgetMutation__
 *
 * To run a mutation, you first call `useDeleteProfileWidgetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProfileWidgetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProfileWidgetMutation, { data, loading, error }] = useDeleteProfileWidgetMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProfileWidgetMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProfileWidgetMutation, DeleteProfileWidgetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProfileWidgetMutation, DeleteProfileWidgetMutationVariables>(DeleteProfileWidgetDocument, options);
      }
export type DeleteProfileWidgetMutationHookResult = ReturnType<typeof useDeleteProfileWidgetMutation>;
export type DeleteProfileWidgetMutationResult = Apollo.MutationResult<DeleteProfileWidgetMutation>;
export type DeleteProfileWidgetMutationOptions = Apollo.BaseMutationOptions<DeleteProfileWidgetMutation, DeleteProfileWidgetMutationVariables>;
export const UpdateCharacterDocument = gql`
    mutation updateCharacter($id: ID!, $name: String, $species: String, $special_notes: String) {
  updateCharacter(
    id: $id
    name: $name
    species: $species
    special_notes: $special_notes
  ) {
    slug
    name
    species
    special_notes
    special_notes_html
  }
}
    `;
export type UpdateCharacterMutationFn = Apollo.MutationFunction<UpdateCharacterMutation, UpdateCharacterMutationVariables>;

/**
 * __useUpdateCharacterMutation__
 *
 * To run a mutation, you first call `useUpdateCharacterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCharacterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCharacterMutation, { data, loading, error }] = useUpdateCharacterMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      species: // value for 'species'
 *      special_notes: // value for 'special_notes'
 *   },
 * });
 */
export function useUpdateCharacterMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCharacterMutation, UpdateCharacterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCharacterMutation, UpdateCharacterMutationVariables>(UpdateCharacterDocument, options);
      }
export type UpdateCharacterMutationHookResult = ReturnType<typeof useUpdateCharacterMutation>;
export type UpdateCharacterMutationResult = Apollo.MutationResult<UpdateCharacterMutation>;
export type UpdateCharacterMutationOptions = Apollo.BaseMutationOptions<UpdateCharacterMutation, UpdateCharacterMutationVariables>;
export const UpdateProfileWidgetDocument = gql`
    mutation updateProfileWidget($id: ID!, $title: String, $data: String, $row_order_position: String, $column: Int) {
  updateProfileWidget(
    id: $id
    title: $title
    data: $data
    row_order_position: $row_order_position
    column: $column
  ) {
    ...WidgetFields
  }
}
    ${WidgetFieldsFragmentDoc}`;
export type UpdateProfileWidgetMutationFn = Apollo.MutationFunction<UpdateProfileWidgetMutation, UpdateProfileWidgetMutationVariables>;

/**
 * __useUpdateProfileWidgetMutation__
 *
 * To run a mutation, you first call `useUpdateProfileWidgetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileWidgetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileWidgetMutation, { data, loading, error }] = useUpdateProfileWidgetMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      data: // value for 'data'
 *      row_order_position: // value for 'row_order_position'
 *      column: // value for 'column'
 *   },
 * });
 */
export function useUpdateProfileWidgetMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileWidgetMutation, UpdateProfileWidgetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileWidgetMutation, UpdateProfileWidgetMutationVariables>(UpdateProfileWidgetDocument, options);
      }
export type UpdateProfileWidgetMutationHookResult = ReturnType<typeof useUpdateProfileWidgetMutation>;
export type UpdateProfileWidgetMutationResult = Apollo.MutationResult<UpdateProfileWidgetMutation>;
export type UpdateProfileWidgetMutationOptions = Apollo.BaseMutationOptions<UpdateProfileWidgetMutation, UpdateProfileWidgetMutationVariables>;
export const GetConversationsDocument = gql`
    query getConversations {
  getConversations {
    ...ConversationsFields
  }
}
    ${ConversationsFieldsFragmentDoc}`;

/**
 * __useGetConversationsQuery__
 *
 * To run a query within a React component, call `useGetConversationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConversationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConversationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetConversationsQuery(baseOptions?: Apollo.QueryHookOptions<GetConversationsQuery, GetConversationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetConversationsQuery, GetConversationsQueryVariables>(GetConversationsDocument, options);
      }
export function useGetConversationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetConversationsQuery, GetConversationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetConversationsQuery, GetConversationsQueryVariables>(GetConversationsDocument, options);
        }
export type GetConversationsQueryHookResult = ReturnType<typeof useGetConversationsQuery>;
export type GetConversationsLazyQueryHookResult = ReturnType<typeof useGetConversationsLazyQuery>;
export type GetConversationsQueryResult = Apollo.QueryResult<GetConversationsQuery, GetConversationsQueryVariables>;
export const SubscribeToConversationsDocument = gql`
    subscription subscribeToConversations {
  newConversation {
    ...ConversationsFields
  }
}
    ${ConversationsFieldsFragmentDoc}`;

/**
 * __useSubscribeToConversationsSubscription__
 *
 * To run a query within a React component, call `useSubscribeToConversationsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToConversationsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeToConversationsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubscribeToConversationsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubscribeToConversationsSubscription, SubscribeToConversationsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubscribeToConversationsSubscription, SubscribeToConversationsSubscriptionVariables>(SubscribeToConversationsDocument, options);
      }
export type SubscribeToConversationsSubscriptionHookResult = ReturnType<typeof useSubscribeToConversationsSubscription>;
export type SubscribeToConversationsSubscriptionResult = Apollo.SubscriptionResult<SubscribeToConversationsSubscription>;
export const DestroyDiscussionDocument = gql`
    mutation destroyDiscussion($id: ID!) {
  destroyDiscussion(id: $id) {
    id
    deleted_at
  }
}
    `;
export type DestroyDiscussionMutationFn = Apollo.MutationFunction<DestroyDiscussionMutation, DestroyDiscussionMutationVariables>;

/**
 * __useDestroyDiscussionMutation__
 *
 * To run a mutation, you first call `useDestroyDiscussionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDestroyDiscussionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [destroyDiscussionMutation, { data, loading, error }] = useDestroyDiscussionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDestroyDiscussionMutation(baseOptions?: Apollo.MutationHookOptions<DestroyDiscussionMutation, DestroyDiscussionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DestroyDiscussionMutation, DestroyDiscussionMutationVariables>(DestroyDiscussionDocument, options);
      }
export type DestroyDiscussionMutationHookResult = ReturnType<typeof useDestroyDiscussionMutation>;
export type DestroyDiscussionMutationResult = Apollo.MutationResult<DestroyDiscussionMutation>;
export type DestroyDiscussionMutationOptions = Apollo.BaseMutationOptions<DestroyDiscussionMutation, DestroyDiscussionMutationVariables>;
export const EditReplyDocument = gql`
    mutation editReply($postId: ID!, $content: String!) {
  editReply(postId: $postId, content: $content) {
    ...ForumPostFields
  }
}
    ${ForumPostFieldsFragmentDoc}`;
export type EditReplyMutationFn = Apollo.MutationFunction<EditReplyMutation, EditReplyMutationVariables>;

/**
 * __useEditReplyMutation__
 *
 * To run a mutation, you first call `useEditReplyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditReplyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editReplyMutation, { data, loading, error }] = useEditReplyMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useEditReplyMutation(baseOptions?: Apollo.MutationHookOptions<EditReplyMutation, EditReplyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditReplyMutation, EditReplyMutationVariables>(EditReplyDocument, options);
      }
export type EditReplyMutationHookResult = ReturnType<typeof useEditReplyMutation>;
export type EditReplyMutationResult = Apollo.MutationResult<EditReplyMutation>;
export type EditReplyMutationOptions = Apollo.BaseMutationOptions<EditReplyMutation, EditReplyMutationVariables>;
export const GetDiscussionDocument = gql`
    query getDiscussion($forumId: String!, $discussionId: String!) {
  getDiscussion(forumId: $forumId, id: $discussionId) {
    id
    topic
    slug
    locked
    karma_total
    updated_at
    created_at
    reply_count
    content
    content_html
    admin_post
    moderator_post
    can_edit
    can_destroy
    forum {
      id
      slug
      name
    }
    user {
      username
      name
      is_admin
      is_patron
      is_supporter
      avatar_url
    }
    character {
      id
      name
      slug
      profile_image {
        url {
          thumbnail
        }
      }
    }
    posts {
      ...ForumPostFields
    }
  }
}
    ${ForumPostFieldsFragmentDoc}`;

/**
 * __useGetDiscussionQuery__
 *
 * To run a query within a React component, call `useGetDiscussionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDiscussionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDiscussionQuery({
 *   variables: {
 *      forumId: // value for 'forumId'
 *      discussionId: // value for 'discussionId'
 *   },
 * });
 */
export function useGetDiscussionQuery(baseOptions: Apollo.QueryHookOptions<GetDiscussionQuery, GetDiscussionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDiscussionQuery, GetDiscussionQueryVariables>(GetDiscussionDocument, options);
      }
export function useGetDiscussionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDiscussionQuery, GetDiscussionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDiscussionQuery, GetDiscussionQueryVariables>(GetDiscussionDocument, options);
        }
export type GetDiscussionQueryHookResult = ReturnType<typeof useGetDiscussionQuery>;
export type GetDiscussionLazyQueryHookResult = ReturnType<typeof useGetDiscussionLazyQuery>;
export type GetDiscussionQueryResult = Apollo.QueryResult<GetDiscussionQuery, GetDiscussionQueryVariables>;
export const PostDiscussionReplyDocument = gql`
    mutation postDiscussionReply($discussionId: ID!, $characterId: ID, $content: String!) {
  postReply(
    discussionId: $discussionId
    characterId: $characterId
    content: $content
  ) {
    ...ForumPostFields
  }
}
    ${ForumPostFieldsFragmentDoc}`;
export type PostDiscussionReplyMutationFn = Apollo.MutationFunction<PostDiscussionReplyMutation, PostDiscussionReplyMutationVariables>;

/**
 * __usePostDiscussionReplyMutation__
 *
 * To run a mutation, you first call `usePostDiscussionReplyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostDiscussionReplyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postDiscussionReplyMutation, { data, loading, error }] = usePostDiscussionReplyMutation({
 *   variables: {
 *      discussionId: // value for 'discussionId'
 *      characterId: // value for 'characterId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function usePostDiscussionReplyMutation(baseOptions?: Apollo.MutationHookOptions<PostDiscussionReplyMutation, PostDiscussionReplyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostDiscussionReplyMutation, PostDiscussionReplyMutationVariables>(PostDiscussionReplyDocument, options);
      }
export type PostDiscussionReplyMutationHookResult = ReturnType<typeof usePostDiscussionReplyMutation>;
export type PostDiscussionReplyMutationResult = Apollo.MutationResult<PostDiscussionReplyMutation>;
export type PostDiscussionReplyMutationOptions = Apollo.BaseMutationOptions<PostDiscussionReplyMutation, PostDiscussionReplyMutationVariables>;
export const UpdateDiscussionDocument = gql`
    mutation updateDiscussion($id: ID!, $topic: String, $content: String, $locked: Boolean, $sticky: Boolean) {
  updateDiscussion(
    id: $id
    topic: $topic
    content: $content
    locked: $locked
    sticky: $sticky
  ) {
    id
    topic
    slug
    locked
    sticky
    forum {
      id
      slug
      name
    }
  }
}
    `;
export type UpdateDiscussionMutationFn = Apollo.MutationFunction<UpdateDiscussionMutation, UpdateDiscussionMutationVariables>;

/**
 * __useUpdateDiscussionMutation__
 *
 * To run a mutation, you first call `useUpdateDiscussionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDiscussionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDiscussionMutation, { data, loading, error }] = useUpdateDiscussionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      topic: // value for 'topic'
 *      content: // value for 'content'
 *      locked: // value for 'locked'
 *      sticky: // value for 'sticky'
 *   },
 * });
 */
export function useUpdateDiscussionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDiscussionMutation, UpdateDiscussionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDiscussionMutation, UpdateDiscussionMutationVariables>(UpdateDiscussionDocument, options);
      }
export type UpdateDiscussionMutationHookResult = ReturnType<typeof useUpdateDiscussionMutation>;
export type UpdateDiscussionMutationResult = Apollo.MutationResult<UpdateDiscussionMutation>;
export type UpdateDiscussionMutationOptions = Apollo.BaseMutationOptions<UpdateDiscussionMutation, UpdateDiscussionMutationVariables>;
export const CreateDiscussionDocument = gql`
    mutation createDiscussion($forumId: String!, $topic: String!, $content: String!, $locked: Boolean!, $sticky: Boolean!) {
  createDiscussion(
    forumId: $forumId
    topic: $topic
    content: $content
    locked: $locked
    sticky: $sticky
  ) {
    id
    topic
    slug
    locked
    sticky
    forum {
      id
      slug
      name
    }
  }
}
    `;
export type CreateDiscussionMutationFn = Apollo.MutationFunction<CreateDiscussionMutation, CreateDiscussionMutationVariables>;

/**
 * __useCreateDiscussionMutation__
 *
 * To run a mutation, you first call `useCreateDiscussionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDiscussionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDiscussionMutation, { data, loading, error }] = useCreateDiscussionMutation({
 *   variables: {
 *      forumId: // value for 'forumId'
 *      topic: // value for 'topic'
 *      content: // value for 'content'
 *      locked: // value for 'locked'
 *      sticky: // value for 'sticky'
 *   },
 * });
 */
export function useCreateDiscussionMutation(baseOptions?: Apollo.MutationHookOptions<CreateDiscussionMutation, CreateDiscussionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDiscussionMutation, CreateDiscussionMutationVariables>(CreateDiscussionDocument, options);
      }
export type CreateDiscussionMutationHookResult = ReturnType<typeof useCreateDiscussionMutation>;
export type CreateDiscussionMutationResult = Apollo.MutationResult<CreateDiscussionMutation>;
export type CreateDiscussionMutationOptions = Apollo.BaseMutationOptions<CreateDiscussionMutation, CreateDiscussionMutationVariables>;
export const GetDiscussionsDocument = gql`
    query getDiscussions($forumId: String!, $page: Int, $sort: String, $query: String) {
  getForum(slug: $forumId) {
    id
    discussions(page: $page, sort: $sort, query: $query) {
      count
      offset
      totalEntries
      currentPage
      perPage
      totalPages
      discussions {
        id
        topic
        slug
        locked
        karma_total
        updated_at
        created_at
        preview
        last_read_at
        unread_posts_count
        last_post_at
        reply_count
        admin_post
        moderator_post
        user {
          username
          name
          is_admin
          is_patron
          is_supporter
          avatar_url
        }
        character {
          id
          name
          slug
          profile_image {
            url {
              thumbnail
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetDiscussionsQuery__
 *
 * To run a query within a React component, call `useGetDiscussionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDiscussionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDiscussionsQuery({
 *   variables: {
 *      forumId: // value for 'forumId'
 *      page: // value for 'page'
 *      sort: // value for 'sort'
 *      query: // value for 'query'
 *   },
 * });
 */
export function useGetDiscussionsQuery(baseOptions: Apollo.QueryHookOptions<GetDiscussionsQuery, GetDiscussionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDiscussionsQuery, GetDiscussionsQueryVariables>(GetDiscussionsDocument, options);
      }
export function useGetDiscussionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDiscussionsQuery, GetDiscussionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDiscussionsQuery, GetDiscussionsQueryVariables>(GetDiscussionsDocument, options);
        }
export type GetDiscussionsQueryHookResult = ReturnType<typeof useGetDiscussionsQuery>;
export type GetDiscussionsLazyQueryHookResult = ReturnType<typeof useGetDiscussionsLazyQuery>;
export type GetDiscussionsQueryResult = Apollo.QueryResult<GetDiscussionsQuery, GetDiscussionsQueryVariables>;
export const GetForumDocument = gql`
    query getForum($id: String!) {
  getForum(slug: $id) {
    id
    slug
    name
    summary
    description
    system_owned
    created_at
    rules
    prepost_message
    is_open
    is_member
    member_count
    discussion_count
    owner {
      username
      name
      is_admin
      is_patron
      is_supporter
      avatar_url
    }
    discussions(sticky: true) {
      discussions {
        id
        topic
        slug
        updated_at
        created_at
        admin_post
        moderator_post
        sticky
      }
    }
  }
}
    `;

/**
 * __useGetForumQuery__
 *
 * To run a query within a React component, call `useGetForumQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetForumQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetForumQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetForumQuery(baseOptions: Apollo.QueryHookOptions<GetForumQuery, GetForumQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetForumQuery, GetForumQueryVariables>(GetForumDocument, options);
      }
export function useGetForumLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetForumQuery, GetForumQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetForumQuery, GetForumQueryVariables>(GetForumDocument, options);
        }
export type GetForumQueryHookResult = ReturnType<typeof useGetForumQuery>;
export type GetForumLazyQueryHookResult = ReturnType<typeof useGetForumLazyQuery>;
export type GetForumQueryResult = Apollo.QueryResult<GetForumQuery, GetForumQueryVariables>;
export const GetForumsDocument = gql`
    query getForums {
  getForums {
    id
    slug
    name
    summary
    system_owned
    is_open
    created_at
  }
}
    `;

/**
 * __useGetForumsQuery__
 *
 * To run a query within a React component, call `useGetForumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetForumsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetForumsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetForumsQuery(baseOptions?: Apollo.QueryHookOptions<GetForumsQuery, GetForumsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetForumsQuery, GetForumsQueryVariables>(GetForumsDocument, options);
      }
export function useGetForumsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetForumsQuery, GetForumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetForumsQuery, GetForumsQueryVariables>(GetForumsDocument, options);
        }
export type GetForumsQueryHookResult = ReturnType<typeof useGetForumsQuery>;
export type GetForumsLazyQueryHookResult = ReturnType<typeof useGetForumsLazyQuery>;
export type GetForumsQueryResult = Apollo.QueryResult<GetForumsQuery, GetForumsQueryVariables>;
export const PostReplyDocument = gql`
    mutation postReply($content: String!, $characterId: ID, $discussionId: ID!) {
  postReply(
    content: $content
    characterId: $characterId
    discussionId: $discussionId
  ) {
    id
    content
    content_html
    character {
      id
      name
      profile_image {
        url {
          thumbnail
        }
      }
    }
    user {
      id
      username
      name
      avatar_url
      link
      is_admin
      is_patron
      is_supporter
    }
  }
}
    `;
export type PostReplyMutationFn = Apollo.MutationFunction<PostReplyMutation, PostReplyMutationVariables>;

/**
 * __usePostReplyMutation__
 *
 * To run a mutation, you first call `usePostReplyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostReplyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postReplyMutation, { data, loading, error }] = usePostReplyMutation({
 *   variables: {
 *      content: // value for 'content'
 *      characterId: // value for 'characterId'
 *      discussionId: // value for 'discussionId'
 *   },
 * });
 */
export function usePostReplyMutation(baseOptions?: Apollo.MutationHookOptions<PostReplyMutation, PostReplyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostReplyMutation, PostReplyMutationVariables>(PostReplyDocument, options);
      }
export type PostReplyMutationHookResult = ReturnType<typeof usePostReplyMutation>;
export type PostReplyMutationResult = Apollo.MutationResult<PostReplyMutation>;
export type PostReplyMutationOptions = Apollo.BaseMutationOptions<PostReplyMutation, PostReplyMutationVariables>;
export const SendKarmaDocument = gql`
    mutation sendKarma($postId: ID!, $take: Boolean!) {
  sendKarma(discussionId: $postId, take: $take) {
    id
    karma_total
  }
}
    `;
export type SendKarmaMutationFn = Apollo.MutationFunction<SendKarmaMutation, SendKarmaMutationVariables>;

/**
 * __useSendKarmaMutation__
 *
 * To run a mutation, you first call `useSendKarmaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendKarmaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendKarmaMutation, { data, loading, error }] = useSendKarmaMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useSendKarmaMutation(baseOptions?: Apollo.MutationHookOptions<SendKarmaMutation, SendKarmaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendKarmaMutation, SendKarmaMutationVariables>(SendKarmaDocument, options);
      }
export type SendKarmaMutationHookResult = ReturnType<typeof useSendKarmaMutation>;
export type SendKarmaMutationResult = Apollo.MutationResult<SendKarmaMutation>;
export type SendKarmaMutationOptions = Apollo.BaseMutationOptions<SendKarmaMutation, SendKarmaMutationVariables>;
export const GetCharacterForUploadDocument = gql`
    query getCharacterForUpload($id: ID!) {
  getCharacter(id: $id) {
    name
    nsfw
    profile_image {
      url {
        small
      }
    }
  }
}
    `;

/**
 * __useGetCharacterForUploadQuery__
 *
 * To run a query within a React component, call `useGetCharacterForUploadQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterForUploadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterForUploadQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCharacterForUploadQuery(baseOptions: Apollo.QueryHookOptions<GetCharacterForUploadQuery, GetCharacterForUploadQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharacterForUploadQuery, GetCharacterForUploadQueryVariables>(GetCharacterForUploadDocument, options);
      }
export function useGetCharacterForUploadLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharacterForUploadQuery, GetCharacterForUploadQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharacterForUploadQuery, GetCharacterForUploadQueryVariables>(GetCharacterForUploadDocument, options);
        }
export type GetCharacterForUploadQueryHookResult = ReturnType<typeof useGetCharacterForUploadQuery>;
export type GetCharacterForUploadLazyQueryHookResult = ReturnType<typeof useGetCharacterForUploadLazyQuery>;
export type GetCharacterForUploadQueryResult = Apollo.QueryResult<GetCharacterForUploadQuery, GetCharacterForUploadQueryVariables>;
export const OnImageProcessingCompleteDocument = gql`
    subscription onImageProcessingComplete($imageId: ID!) {
  imageProcessingComplete(imageId: $imageId) {
    id
    title
    nsfw
    hidden
    background_color
    aspect_ratio
    comments_count
    favorites_count
    image_processing
    image_processing_error
    is_favorite
    is_managed
    width
    height
    url {
      small
      medium
    }
    size {
      small {
        width
        height
      }
      medium {
        width
        height
      }
    }
  }
}
    `;

/**
 * __useOnImageProcessingCompleteSubscription__
 *
 * To run a query within a React component, call `useOnImageProcessingCompleteSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnImageProcessingCompleteSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnImageProcessingCompleteSubscription({
 *   variables: {
 *      imageId: // value for 'imageId'
 *   },
 * });
 */
export function useOnImageProcessingCompleteSubscription(baseOptions: Apollo.SubscriptionHookOptions<OnImageProcessingCompleteSubscription, OnImageProcessingCompleteSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnImageProcessingCompleteSubscription, OnImageProcessingCompleteSubscriptionVariables>(OnImageProcessingCompleteDocument, options);
      }
export type OnImageProcessingCompleteSubscriptionHookResult = ReturnType<typeof useOnImageProcessingCompleteSubscription>;
export type OnImageProcessingCompleteSubscriptionResult = Apollo.SubscriptionResult<OnImageProcessingCompleteSubscription>;
export const AddCommentDocument = gql`
    mutation addComment($mediaId: ID!, $comment: String!) {
  addComment(mediaId: $mediaId, comment: $comment) {
    id
    created_at
    user {
      username
      name
      avatar_url
    }
    comment
  }
}
    `;
export type AddCommentMutationFn = Apollo.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useAddCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, options);
      }
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;
export const GetCommentsDocument = gql`
    query getComments($mediaId: ID!, $page: Int, $perPage: Int, $since: Int) {
  getComments(mediaId: $mediaId, page: $page, perPage: $perPage, since: $since) {
    count
    totalEntries
    currentPage
    totalPages
    perPage
    offset
    comments {
      id
      created_at
      user {
        username
        name
        avatar_url
      }
      comment
    }
  }
}
    `;

/**
 * __useGetCommentsQuery__
 *
 * To run a query within a React component, call `useGetCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsQuery({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      since: // value for 'since'
 *   },
 * });
 */
export function useGetCommentsQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
      }
export function useGetCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
        }
export type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>;
export type GetCommentsLazyQueryHookResult = ReturnType<typeof useGetCommentsLazyQuery>;
export type GetCommentsQueryResult = Apollo.QueryResult<GetCommentsQuery, GetCommentsQueryVariables>;
export const RemoveCommentDocument = gql`
    mutation removeComment($mediaId: ID!, $id: ID!) {
  removeComment(mediaId: $mediaId, id: $id) {
    id
  }
}
    `;
export type RemoveCommentMutationFn = Apollo.MutationFunction<RemoveCommentMutation, RemoveCommentMutationVariables>;

/**
 * __useRemoveCommentMutation__
 *
 * To run a mutation, you first call `useRemoveCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCommentMutation, { data, loading, error }] = useRemoveCommentMutation({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveCommentMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCommentMutation, RemoveCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCommentMutation, RemoveCommentMutationVariables>(RemoveCommentDocument, options);
      }
export type RemoveCommentMutationHookResult = ReturnType<typeof useRemoveCommentMutation>;
export type RemoveCommentMutationResult = Apollo.MutationResult<RemoveCommentMutation>;
export type RemoveCommentMutationOptions = Apollo.BaseMutationOptions<RemoveCommentMutation, RemoveCommentMutationVariables>;
export const SubscribeToCommentsDocument = gql`
    subscription subscribeToComments($mediaId: ID!) {
  newComment(mediaId: $mediaId) {
    id
    created_at
    user {
      username
      name
      avatar_url
    }
    comment
  }
}
    `;

/**
 * __useSubscribeToCommentsSubscription__
 *
 * To run a query within a React component, call `useSubscribeToCommentsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToCommentsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeToCommentsSubscription({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *   },
 * });
 */
export function useSubscribeToCommentsSubscription(baseOptions: Apollo.SubscriptionHookOptions<SubscribeToCommentsSubscription, SubscribeToCommentsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubscribeToCommentsSubscription, SubscribeToCommentsSubscriptionVariables>(SubscribeToCommentsDocument, options);
      }
export type SubscribeToCommentsSubscriptionHookResult = ReturnType<typeof useSubscribeToCommentsSubscription>;
export type SubscribeToCommentsSubscriptionResult = Apollo.SubscriptionResult<SubscribeToCommentsSubscription>;
export const AddFavoriteDocument = gql`
    mutation addFavorite($mediaId: ID!) {
  addFavorite(mediaId: $mediaId) {
    id
    user {
      username
      name
      avatar_url
    }
  }
}
    `;
export type AddFavoriteMutationFn = Apollo.MutationFunction<AddFavoriteMutation, AddFavoriteMutationVariables>;

/**
 * __useAddFavoriteMutation__
 *
 * To run a mutation, you first call `useAddFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFavoriteMutation, { data, loading, error }] = useAddFavoriteMutation({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *   },
 * });
 */
export function useAddFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<AddFavoriteMutation, AddFavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFavoriteMutation, AddFavoriteMutationVariables>(AddFavoriteDocument, options);
      }
export type AddFavoriteMutationHookResult = ReturnType<typeof useAddFavoriteMutation>;
export type AddFavoriteMutationResult = Apollo.MutationResult<AddFavoriteMutation>;
export type AddFavoriteMutationOptions = Apollo.BaseMutationOptions<AddFavoriteMutation, AddFavoriteMutationVariables>;
export const RemoveFavoriteDocument = gql`
    mutation removeFavorite($mediaId: ID!) {
  removeFavorite(mediaId: $mediaId) {
    id
  }
}
    `;
export type RemoveFavoriteMutationFn = Apollo.MutationFunction<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>;

/**
 * __useRemoveFavoriteMutation__
 *
 * To run a mutation, you first call `useRemoveFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFavoriteMutation, { data, loading, error }] = useRemoveFavoriteMutation({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *   },
 * });
 */
export function useRemoveFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>(RemoveFavoriteDocument, options);
      }
export type RemoveFavoriteMutationHookResult = ReturnType<typeof useRemoveFavoriteMutation>;
export type RemoveFavoriteMutationResult = Apollo.MutationResult<RemoveFavoriteMutation>;
export type RemoveFavoriteMutationOptions = Apollo.BaseMutationOptions<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>;
export const DeleteMediaDocument = gql`
    mutation deleteMedia($mediaId: ID!) {
  deleteMedia(mediaId: $mediaId) {
    id
    character {
      id
      username
      slug
    }
    deleted_at
  }
}
    `;
export type DeleteMediaMutationFn = Apollo.MutationFunction<DeleteMediaMutation, DeleteMediaMutationVariables>;

/**
 * __useDeleteMediaMutation__
 *
 * To run a mutation, you first call `useDeleteMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMediaMutation, { data, loading, error }] = useDeleteMediaMutation({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *   },
 * });
 */
export function useDeleteMediaMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMediaMutation, DeleteMediaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMediaMutation, DeleteMediaMutationVariables>(DeleteMediaDocument, options);
      }
export type DeleteMediaMutationHookResult = ReturnType<typeof useDeleteMediaMutation>;
export type DeleteMediaMutationResult = Apollo.MutationResult<DeleteMediaMutation>;
export type DeleteMediaMutationOptions = Apollo.BaseMutationOptions<DeleteMediaMutation, DeleteMediaMutationVariables>;
export const GetMediaDocument = gql`
    query getMedia($mediaId: ID!) {
  getMedia(mediaId: $mediaId) {
    id
    title
    created_at
    caption
    caption_html
    source_url
    source_url_display
    is_v2_image
    nsfw
    hidden
    background_color
    image_processing
    image_processing_error
    favorites_count
    comments_count
    is_favorite
    is_managed
    watermark
    gravity
    url {
      large
    }
    download_link
    hashtags {
      tag
    }
    tags {
      position_x
      position_y
      character {
        id
        name
      }
    }
    character {
      id
      name
      path
      profile_image {
        url {
          thumbnail
        }
      }
    }
    favorites {
      id
      user {
        username
        name
        avatar_url
      }
    }
  }
}
    `;

/**
 * __useGetMediaQuery__
 *
 * To run a query within a React component, call `useGetMediaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMediaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMediaQuery({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *   },
 * });
 */
export function useGetMediaQuery(baseOptions: Apollo.QueryHookOptions<GetMediaQuery, GetMediaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMediaQuery, GetMediaQueryVariables>(GetMediaDocument, options);
      }
export function useGetMediaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMediaQuery, GetMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMediaQuery, GetMediaQueryVariables>(GetMediaDocument, options);
        }
export type GetMediaQueryHookResult = ReturnType<typeof useGetMediaQuery>;
export type GetMediaLazyQueryHookResult = ReturnType<typeof useGetMediaLazyQuery>;
export type GetMediaQueryResult = Apollo.QueryResult<GetMediaQuery, GetMediaQueryVariables>;
export const UpdateImageDocument = gql`
    mutation updateImage($id: ID!, $caption: String, $title: String, $nsfw: Boolean, $hidden: Boolean, $source_url: String, $watermark: Boolean, $gravity: String) {
  updateImage(
    mediaId: $id
    caption: $caption
    title: $title
    nsfw: $nsfw
    hidden: $hidden
    source_url: $source_url
    watermark: $watermark
    gravity: $gravity
  ) {
    id
    title
    caption
    caption_html
    source_url
    source_url_display
    nsfw
    hidden
    watermark
    gravity
    image_processing
    image_processing_error
    hashtags {
      tag
    }
    url {
      large
    }
  }
}
    `;
export type UpdateImageMutationFn = Apollo.MutationFunction<UpdateImageMutation, UpdateImageMutationVariables>;

/**
 * __useUpdateImageMutation__
 *
 * To run a mutation, you first call `useUpdateImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateImageMutation, { data, loading, error }] = useUpdateImageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      caption: // value for 'caption'
 *      title: // value for 'title'
 *      nsfw: // value for 'nsfw'
 *      hidden: // value for 'hidden'
 *      source_url: // value for 'source_url'
 *      watermark: // value for 'watermark'
 *      gravity: // value for 'gravity'
 *   },
 * });
 */
export function useUpdateImageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateImageMutation, UpdateImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateImageMutation, UpdateImageMutationVariables>(UpdateImageDocument, options);
      }
export type UpdateImageMutationHookResult = ReturnType<typeof useUpdateImageMutation>;
export type UpdateImageMutationResult = Apollo.MutationResult<UpdateImageMutation>;
export type UpdateImageMutationOptions = Apollo.BaseMutationOptions<UpdateImageMutation, UpdateImageMutationVariables>;
export const GetNotificationsDocument = gql`
    query getNotifications {
  getNotifications {
    unreadCount
    notifications {
      ...NotificationsFields
    }
  }
}
    ${NotificationsFieldsFragmentDoc}`;

/**
 * __useGetNotificationsQuery__
 *
 * To run a query within a React component, call `useGetNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotificationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNotificationsQuery(baseOptions?: Apollo.QueryHookOptions<GetNotificationsQuery, GetNotificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(GetNotificationsDocument, options);
      }
export function useGetNotificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNotificationsQuery, GetNotificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(GetNotificationsDocument, options);
        }
export type GetNotificationsQueryHookResult = ReturnType<typeof useGetNotificationsQuery>;
export type GetNotificationsLazyQueryHookResult = ReturnType<typeof useGetNotificationsLazyQuery>;
export type GetNotificationsQueryResult = Apollo.QueryResult<GetNotificationsQuery, GetNotificationsQueryVariables>;
export const MarkAllNotificationsAsReadDocument = gql`
    mutation markAllNotificationsAsRead {
  markAllNotificationsAsRead {
    unreadCount
  }
}
    `;
export type MarkAllNotificationsAsReadMutationFn = Apollo.MutationFunction<MarkAllNotificationsAsReadMutation, MarkAllNotificationsAsReadMutationVariables>;

/**
 * __useMarkAllNotificationsAsReadMutation__
 *
 * To run a mutation, you first call `useMarkAllNotificationsAsReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkAllNotificationsAsReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markAllNotificationsAsReadMutation, { data, loading, error }] = useMarkAllNotificationsAsReadMutation({
 *   variables: {
 *   },
 * });
 */
export function useMarkAllNotificationsAsReadMutation(baseOptions?: Apollo.MutationHookOptions<MarkAllNotificationsAsReadMutation, MarkAllNotificationsAsReadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkAllNotificationsAsReadMutation, MarkAllNotificationsAsReadMutationVariables>(MarkAllNotificationsAsReadDocument, options);
      }
export type MarkAllNotificationsAsReadMutationHookResult = ReturnType<typeof useMarkAllNotificationsAsReadMutation>;
export type MarkAllNotificationsAsReadMutationResult = Apollo.MutationResult<MarkAllNotificationsAsReadMutation>;
export type MarkAllNotificationsAsReadMutationOptions = Apollo.BaseMutationOptions<MarkAllNotificationsAsReadMutation, MarkAllNotificationsAsReadMutationVariables>;
export const ReadNotificationDocument = gql`
    mutation readNotification($id: ID!) {
  readNotification(id: $id) {
    ...NotificationsFields
  }
}
    ${NotificationsFieldsFragmentDoc}`;
export type ReadNotificationMutationFn = Apollo.MutationFunction<ReadNotificationMutation, ReadNotificationMutationVariables>;

/**
 * __useReadNotificationMutation__
 *
 * To run a mutation, you first call `useReadNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReadNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [readNotificationMutation, { data, loading, error }] = useReadNotificationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReadNotificationMutation(baseOptions?: Apollo.MutationHookOptions<ReadNotificationMutation, ReadNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReadNotificationMutation, ReadNotificationMutationVariables>(ReadNotificationDocument, options);
      }
export type ReadNotificationMutationHookResult = ReturnType<typeof useReadNotificationMutation>;
export type ReadNotificationMutationResult = Apollo.MutationResult<ReadNotificationMutation>;
export type ReadNotificationMutationOptions = Apollo.BaseMutationOptions<ReadNotificationMutation, ReadNotificationMutationVariables>;
export const SubscribeToNotificationsDocument = gql`
    subscription subscribeToNotifications {
  newNotification {
    ...NotificationsFields
  }
}
    ${NotificationsFieldsFragmentDoc}`;

/**
 * __useSubscribeToNotificationsSubscription__
 *
 * To run a query within a React component, call `useSubscribeToNotificationsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToNotificationsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeToNotificationsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubscribeToNotificationsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubscribeToNotificationsSubscription, SubscribeToNotificationsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubscribeToNotificationsSubscription, SubscribeToNotificationsSubscriptionVariables>(SubscribeToNotificationsDocument, options);
      }
export type SubscribeToNotificationsSubscriptionHookResult = ReturnType<typeof useSubscribeToNotificationsSubscription>;
export type SubscribeToNotificationsSubscriptionResult = Apollo.SubscriptionResult<SubscribeToNotificationsSubscription>;
export const CreateApiKeyDocument = gql`
    mutation createApiKey($name: String!, $read_only: Boolean!) {
  createApiKey(name: $name, read_only: $read_only) {
    id
    name
    read_only
    secret
  }
}
    `;
export type CreateApiKeyMutationFn = Apollo.MutationFunction<CreateApiKeyMutation, CreateApiKeyMutationVariables>;

/**
 * __useCreateApiKeyMutation__
 *
 * To run a mutation, you first call `useCreateApiKeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateApiKeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createApiKeyMutation, { data, loading, error }] = useCreateApiKeyMutation({
 *   variables: {
 *      name: // value for 'name'
 *      read_only: // value for 'read_only'
 *   },
 * });
 */
export function useCreateApiKeyMutation(baseOptions?: Apollo.MutationHookOptions<CreateApiKeyMutation, CreateApiKeyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateApiKeyMutation, CreateApiKeyMutationVariables>(CreateApiKeyDocument, options);
      }
export type CreateApiKeyMutationHookResult = ReturnType<typeof useCreateApiKeyMutation>;
export type CreateApiKeyMutationResult = Apollo.MutationResult<CreateApiKeyMutation>;
export type CreateApiKeyMutationOptions = Apollo.BaseMutationOptions<CreateApiKeyMutation, CreateApiKeyMutationVariables>;
export const GetApiKeysDocument = gql`
    query getApiKeys {
  getApiKeys {
    id
    name
    read_only
    secret
  }
}
    `;

/**
 * __useGetApiKeysQuery__
 *
 * To run a query within a React component, call `useGetApiKeysQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApiKeysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApiKeysQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetApiKeysQuery(baseOptions?: Apollo.QueryHookOptions<GetApiKeysQuery, GetApiKeysQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetApiKeysQuery, GetApiKeysQueryVariables>(GetApiKeysDocument, options);
      }
export function useGetApiKeysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetApiKeysQuery, GetApiKeysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetApiKeysQuery, GetApiKeysQueryVariables>(GetApiKeysDocument, options);
        }
export type GetApiKeysQueryHookResult = ReturnType<typeof useGetApiKeysQuery>;
export type GetApiKeysLazyQueryHookResult = ReturnType<typeof useGetApiKeysLazyQuery>;
export type GetApiKeysQueryResult = Apollo.QueryResult<GetApiKeysQuery, GetApiKeysQueryVariables>;
export const AutcompleteUserDocument = gql`
    query autcompleteUser($username: String) {
  autocompleteUser(username: $username) {
    name
    username
  }
}
    `;

/**
 * __useAutcompleteUserQuery__
 *
 * To run a query within a React component, call `useAutcompleteUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAutcompleteUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAutcompleteUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useAutcompleteUserQuery(baseOptions?: Apollo.QueryHookOptions<AutcompleteUserQuery, AutcompleteUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AutcompleteUserQuery, AutcompleteUserQueryVariables>(AutcompleteUserDocument, options);
      }
export function useAutcompleteUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AutcompleteUserQuery, AutcompleteUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AutcompleteUserQuery, AutcompleteUserQueryVariables>(AutcompleteUserDocument, options);
        }
export type AutcompleteUserQueryHookResult = ReturnType<typeof useAutcompleteUserQuery>;
export type AutcompleteUserLazyQueryHookResult = ReturnType<typeof useAutcompleteUserLazyQuery>;
export type AutcompleteUserQueryResult = Apollo.QueryResult<AutcompleteUserQuery, AutcompleteUserQueryVariables>;
export const AutocompleteCharacterDocument = gql`
    query autocompleteCharacter($username: String, $slug: String) {
  autocompleteCharacter(username: $username, slug: $slug) {
    name
    username
    slug
  }
}
    `;

/**
 * __useAutocompleteCharacterQuery__
 *
 * To run a query within a React component, call `useAutocompleteCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useAutocompleteCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAutocompleteCharacterQuery({
 *   variables: {
 *      username: // value for 'username'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useAutocompleteCharacterQuery(baseOptions?: Apollo.QueryHookOptions<AutocompleteCharacterQuery, AutocompleteCharacterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AutocompleteCharacterQuery, AutocompleteCharacterQueryVariables>(AutocompleteCharacterDocument, options);
      }
export function useAutocompleteCharacterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AutocompleteCharacterQuery, AutocompleteCharacterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AutocompleteCharacterQuery, AutocompleteCharacterQueryVariables>(AutocompleteCharacterDocument, options);
        }
export type AutocompleteCharacterQueryHookResult = ReturnType<typeof useAutocompleteCharacterQuery>;
export type AutocompleteCharacterLazyQueryHookResult = ReturnType<typeof useAutocompleteCharacterLazyQuery>;
export type AutocompleteCharacterQueryResult = Apollo.QueryResult<AutocompleteCharacterQuery, AutocompleteCharacterQueryVariables>;
export const AutocompleteHashtagsDocument = gql`
    query autocompleteHashtags($hashtag: String!) {
  autocompleteHashtags(hashtag: $hashtag) {
    tag
    count
  }
}
    `;

/**
 * __useAutocompleteHashtagsQuery__
 *
 * To run a query within a React component, call `useAutocompleteHashtagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAutocompleteHashtagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAutocompleteHashtagsQuery({
 *   variables: {
 *      hashtag: // value for 'hashtag'
 *   },
 * });
 */
export function useAutocompleteHashtagsQuery(baseOptions: Apollo.QueryHookOptions<AutocompleteHashtagsQuery, AutocompleteHashtagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AutocompleteHashtagsQuery, AutocompleteHashtagsQueryVariables>(AutocompleteHashtagsDocument, options);
      }
export function useAutocompleteHashtagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AutocompleteHashtagsQuery, AutocompleteHashtagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AutocompleteHashtagsQuery, AutocompleteHashtagsQueryVariables>(AutocompleteHashtagsDocument, options);
        }
export type AutocompleteHashtagsQueryHookResult = ReturnType<typeof useAutocompleteHashtagsQuery>;
export type AutocompleteHashtagsLazyQueryHookResult = ReturnType<typeof useAutocompleteHashtagsLazyQuery>;
export type AutocompleteHashtagsQueryResult = Apollo.QueryResult<AutocompleteHashtagsQuery, AutocompleteHashtagsQueryVariables>;
export const SetUserAvatarBlobDocument = gql`
    mutation setUserAvatarBlob($id: ID, $blob: String) {
  setUserAvatarBlob(id: $id, blob: $blob) {
    id
    avatar_url(style: "thumbnail")
    profile_image_url
  }
}
    `;
export type SetUserAvatarBlobMutationFn = Apollo.MutationFunction<SetUserAvatarBlobMutation, SetUserAvatarBlobMutationVariables>;

/**
 * __useSetUserAvatarBlobMutation__
 *
 * To run a mutation, you first call `useSetUserAvatarBlobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetUserAvatarBlobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setUserAvatarBlobMutation, { data, loading, error }] = useSetUserAvatarBlobMutation({
 *   variables: {
 *      id: // value for 'id'
 *      blob: // value for 'blob'
 *   },
 * });
 */
export function useSetUserAvatarBlobMutation(baseOptions?: Apollo.MutationHookOptions<SetUserAvatarBlobMutation, SetUserAvatarBlobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetUserAvatarBlobMutation, SetUserAvatarBlobMutationVariables>(SetUserAvatarBlobDocument, options);
      }
export type SetUserAvatarBlobMutationHookResult = ReturnType<typeof useSetUserAvatarBlobMutation>;
export type SetUserAvatarBlobMutationResult = Apollo.MutationResult<SetUserAvatarBlobMutation>;
export type SetUserAvatarBlobMutationOptions = Apollo.BaseMutationOptions<SetUserAvatarBlobMutation, SetUserAvatarBlobMutationVariables>;
export const BlockUserDocument = gql`
    mutation blockUser($username: String!) {
  blockUser(username: $username) {
    id
    username
    is_blocked
    is_followed
  }
}
    `;
export type BlockUserMutationFn = Apollo.MutationFunction<BlockUserMutation, BlockUserMutationVariables>;

/**
 * __useBlockUserMutation__
 *
 * To run a mutation, you first call `useBlockUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBlockUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [blockUserMutation, { data, loading, error }] = useBlockUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useBlockUserMutation(baseOptions?: Apollo.MutationHookOptions<BlockUserMutation, BlockUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BlockUserMutation, BlockUserMutationVariables>(BlockUserDocument, options);
      }
export type BlockUserMutationHookResult = ReturnType<typeof useBlockUserMutation>;
export type BlockUserMutationResult = Apollo.MutationResult<BlockUserMutation>;
export type BlockUserMutationOptions = Apollo.BaseMutationOptions<BlockUserMutation, BlockUserMutationVariables>;
export const UnblockUserDocument = gql`
    mutation unblockUser($username: String!) {
  unblockUser(username: $username) {
    id
    username
    is_blocked
    is_followed
  }
}
    `;
export type UnblockUserMutationFn = Apollo.MutationFunction<UnblockUserMutation, UnblockUserMutationVariables>;

/**
 * __useUnblockUserMutation__
 *
 * To run a mutation, you first call `useUnblockUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnblockUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unblockUserMutation, { data, loading, error }] = useUnblockUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUnblockUserMutation(baseOptions?: Apollo.MutationHookOptions<UnblockUserMutation, UnblockUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnblockUserMutation, UnblockUserMutationVariables>(UnblockUserDocument, options);
      }
export type UnblockUserMutationHookResult = ReturnType<typeof useUnblockUserMutation>;
export type UnblockUserMutationResult = Apollo.MutationResult<UnblockUserMutation>;
export type UnblockUserMutationOptions = Apollo.BaseMutationOptions<UnblockUserMutation, UnblockUserMutationVariables>;
export const UpdateModerationDocument = gql`
    mutation updateModeration($id: ID!, $resolution: String!) {
  updateModeration(id: $id, resolution: $resolution) {
    id
    status
  }
}
    `;
export type UpdateModerationMutationFn = Apollo.MutationFunction<UpdateModerationMutation, UpdateModerationMutationVariables>;

/**
 * __useUpdateModerationMutation__
 *
 * To run a mutation, you first call `useUpdateModerationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateModerationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateModerationMutation, { data, loading, error }] = useUpdateModerationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      resolution: // value for 'resolution'
 *   },
 * });
 */
export function useUpdateModerationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateModerationMutation, UpdateModerationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateModerationMutation, UpdateModerationMutationVariables>(UpdateModerationDocument, options);
      }
export type UpdateModerationMutationHookResult = ReturnType<typeof useUpdateModerationMutation>;
export type UpdateModerationMutationResult = Apollo.MutationResult<UpdateModerationMutation>;
export type UpdateModerationMutationOptions = Apollo.BaseMutationOptions<UpdateModerationMutation, UpdateModerationMutationVariables>;
export const UploadImageDocument = gql`
    mutation uploadImage($characterId: ID!, $folder: String, $title: String, $nsfw: Boolean, $key: String!, $location: String!) {
  uploadImage(
    characterId: $characterId
    folder: $folder
    title: $title
    nsfw: $nsfw
    key: $key
    location: $location
  ) {
    character {
      id
    }
    ...GalleryImageFields
  }
}
    ${GalleryImageFieldsFragmentDoc}`;
export type UploadImageMutationFn = Apollo.MutationFunction<UploadImageMutation, UploadImageMutationVariables>;

/**
 * __useUploadImageMutation__
 *
 * To run a mutation, you first call `useUploadImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadImageMutation, { data, loading, error }] = useUploadImageMutation({
 *   variables: {
 *      characterId: // value for 'characterId'
 *      folder: // value for 'folder'
 *      title: // value for 'title'
 *      nsfw: // value for 'nsfw'
 *      key: // value for 'key'
 *      location: // value for 'location'
 *   },
 * });
 */
export function useUploadImageMutation(baseOptions?: Apollo.MutationHookOptions<UploadImageMutation, UploadImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadImageMutation, UploadImageMutationVariables>(UploadImageDocument, options);
      }
export type UploadImageMutationHookResult = ReturnType<typeof useUploadImageMutation>;
export type UploadImageMutationResult = Apollo.MutationResult<UploadImageMutation>;
export type UploadImageMutationOptions = Apollo.BaseMutationOptions<UploadImageMutation, UploadImageMutationVariables>;
export const GetSessionDocument = gql`
    query getSession {
  getSession {
    sessionId
    currentUser {
      name
      username
      is_admin
    }
  }
}
    `;

/**
 * __useGetSessionQuery__
 *
 * To run a query within a React component, call `useGetSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSessionQuery(baseOptions?: Apollo.QueryHookOptions<GetSessionQuery, GetSessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSessionQuery, GetSessionQueryVariables>(GetSessionDocument, options);
      }
export function useGetSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSessionQuery, GetSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSessionQuery, GetSessionQueryVariables>(GetSessionDocument, options);
        }
export type GetSessionQueryHookResult = ReturnType<typeof useGetSessionQuery>;
export type GetSessionLazyQueryHookResult = ReturnType<typeof useGetSessionLazyQuery>;
export type GetSessionQueryResult = Apollo.QueryResult<GetSessionQuery, GetSessionQueryVariables>;
export const GetCharacterProfileDocument = gql`
    query getCharacterProfile($username: String!, $slug: String!) {
  getCharacterByUrl(username: $username, slug: $slug) {
    ...DefaultCharacterFields
  }
}
    ${DefaultCharacterFieldsFragmentDoc}`;

/**
 * __useGetCharacterProfileQuery__
 *
 * To run a query within a React component, call `useGetCharacterProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterProfileQuery({
 *   variables: {
 *      username: // value for 'username'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCharacterProfileQuery(baseOptions: Apollo.QueryHookOptions<GetCharacterProfileQuery, GetCharacterProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharacterProfileQuery, GetCharacterProfileQueryVariables>(GetCharacterProfileDocument, options);
      }
export function useGetCharacterProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharacterProfileQuery, GetCharacterProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharacterProfileQuery, GetCharacterProfileQueryVariables>(GetCharacterProfileDocument, options);
        }
export type GetCharacterProfileQueryHookResult = ReturnType<typeof useGetCharacterProfileQuery>;
export type GetCharacterProfileLazyQueryHookResult = ReturnType<typeof useGetCharacterProfileLazyQuery>;
export type GetCharacterProfileQueryResult = Apollo.QueryResult<GetCharacterProfileQuery, GetCharacterProfileQueryVariables>;
export const GetCharacterProfileByIdDocument = gql`
    query getCharacterProfileById($id: ID!) {
  getCharacter(id: $id) {
    ...DefaultCharacterFields
  }
}
    ${DefaultCharacterFieldsFragmentDoc}`;

/**
 * __useGetCharacterProfileByIdQuery__
 *
 * To run a query within a React component, call `useGetCharacterProfileByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterProfileByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterProfileByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCharacterProfileByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCharacterProfileByIdQuery, GetCharacterProfileByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharacterProfileByIdQuery, GetCharacterProfileByIdQueryVariables>(GetCharacterProfileByIdDocument, options);
      }
export function useGetCharacterProfileByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharacterProfileByIdQuery, GetCharacterProfileByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharacterProfileByIdQuery, GetCharacterProfileByIdQueryVariables>(GetCharacterProfileByIdDocument, options);
        }
export type GetCharacterProfileByIdQueryHookResult = ReturnType<typeof useGetCharacterProfileByIdQuery>;
export type GetCharacterProfileByIdLazyQueryHookResult = ReturnType<typeof useGetCharacterProfileByIdLazyQuery>;
export type GetCharacterProfileByIdQueryResult = Apollo.QueryResult<GetCharacterProfileByIdQuery, GetCharacterProfileByIdQueryVariables>;
export const GetImageUploadTokenDocument = gql`
    query getImageUploadToken($characterId: ID!) {
  getImageUploadToken(characterId: $characterId) {
    key
    acl
    success_action_status
    policy
    x_amz_credential
    x_amz_algorithm
    x_amz_date
    x_amz_signature
    url
  }
}
    `;

/**
 * __useGetImageUploadTokenQuery__
 *
 * To run a query within a React component, call `useGetImageUploadTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetImageUploadTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetImageUploadTokenQuery({
 *   variables: {
 *      characterId: // value for 'characterId'
 *   },
 * });
 */
export function useGetImageUploadTokenQuery(baseOptions: Apollo.QueryHookOptions<GetImageUploadTokenQuery, GetImageUploadTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetImageUploadTokenQuery, GetImageUploadTokenQueryVariables>(GetImageUploadTokenDocument, options);
      }
export function useGetImageUploadTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetImageUploadTokenQuery, GetImageUploadTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetImageUploadTokenQuery, GetImageUploadTokenQueryVariables>(GetImageUploadTokenDocument, options);
        }
export type GetImageUploadTokenQueryHookResult = ReturnType<typeof useGetImageUploadTokenQuery>;
export type GetImageUploadTokenLazyQueryHookResult = ReturnType<typeof useGetImageUploadTokenLazyQuery>;
export type GetImageUploadTokenQueryResult = Apollo.QueryResult<GetImageUploadTokenQuery, GetImageUploadTokenQueryVariables>;
export const GetNextModerationDocument = gql`
    query getNextModeration {
  getNextModeration {
    id
    user {
      username
    }
    sender {
      username
    }
    comment
    violationType
    violationMessage
    dmcaSourceUrl
    status
    itemType
    itemId
    item {
      ... on Image {
        caption
        hidden
        nsfw
        source_url
        url {
          medium
        }
      }
    }
  }
}
    `;

/**
 * __useGetNextModerationQuery__
 *
 * To run a query within a React component, call `useGetNextModerationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNextModerationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNextModerationQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNextModerationQuery(baseOptions?: Apollo.QueryHookOptions<GetNextModerationQuery, GetNextModerationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNextModerationQuery, GetNextModerationQueryVariables>(GetNextModerationDocument, options);
      }
export function useGetNextModerationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNextModerationQuery, GetNextModerationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNextModerationQuery, GetNextModerationQueryVariables>(GetNextModerationDocument, options);
        }
export type GetNextModerationQueryHookResult = ReturnType<typeof useGetNextModerationQuery>;
export type GetNextModerationLazyQueryHookResult = ReturnType<typeof useGetNextModerationLazyQuery>;
export type GetNextModerationQueryResult = Apollo.QueryResult<GetNextModerationQuery, GetNextModerationQueryVariables>;
export const GetUserProfileDocument = gql`
    query getUserProfile($username: String!) {
  getUser(username: $username) {
    id
    name
    username
    created_at
    profile
    profile_html
    profile_image_url
    blocks
    is_blocked
    is_followed
    is_admin
    is_managed
    is_moderator
    is_supporter
    is_patron
    character_groups {
      name
      characters_count
    }
  }
}
    `;

/**
 * __useGetUserProfileQuery__
 *
 * To run a query within a React component, call `useGetUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProfileQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserProfileQuery(baseOptions: Apollo.QueryHookOptions<GetUserProfileQuery, GetUserProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(GetUserProfileDocument, options);
      }
export function useGetUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserProfileQuery, GetUserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(GetUserProfileDocument, options);
        }
export type GetUserProfileQueryHookResult = ReturnType<typeof useGetUserProfileQuery>;
export type GetUserProfileLazyQueryHookResult = ReturnType<typeof useGetUserProfileLazyQuery>;
export type GetUserProfileQueryResult = Apollo.QueryResult<GetUserProfileQuery, GetUserProfileQueryVariables>;
export const GetCharacterImagesDocument = gql`
    query getCharacterImages($username: String!, $slug: String!) {
  getCharacterByUrl(username: $username, slug: $slug) {
    id
    media_folders {
      name
      slug
      id
      is_nsfw
      is_password_protected
      media_count
    }
    images {
      ...GalleryImageFields
    }
  }
}
    ${GalleryImageFieldsFragmentDoc}`;

/**
 * __useGetCharacterImagesQuery__
 *
 * To run a query within a React component, call `useGetCharacterImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterImagesQuery({
 *   variables: {
 *      username: // value for 'username'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCharacterImagesQuery(baseOptions: Apollo.QueryHookOptions<GetCharacterImagesQuery, GetCharacterImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharacterImagesQuery, GetCharacterImagesQueryVariables>(GetCharacterImagesDocument, options);
      }
export function useGetCharacterImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharacterImagesQuery, GetCharacterImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharacterImagesQuery, GetCharacterImagesQueryVariables>(GetCharacterImagesDocument, options);
        }
export type GetCharacterImagesQueryHookResult = ReturnType<typeof useGetCharacterImagesQuery>;
export type GetCharacterImagesLazyQueryHookResult = ReturnType<typeof useGetCharacterImagesLazyQuery>;
export type GetCharacterImagesQueryResult = Apollo.QueryResult<GetCharacterImagesQuery, GetCharacterImagesQueryVariables>;

declare module '*/autocompleteCharacter.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const AutocompleteCharacter: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/createActivity.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CreateActivity: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getArtists.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getArtists: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getArtist.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getArtist: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/setCharacterAvatarBlob.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const setCharacterAvatarBlob: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/createColorScheme.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const createColorScheme: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/updateColorScheme.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const updateColorScheme: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/setCharacterCoverBlob.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const setCharacterCoverBlob: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/createFolder.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const createMediaFolder: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getCharacterVersions.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getCharacterVersions: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/createLodestoneLink.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const createLodestoneLink: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/updateLodestoneLink.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const updateLodestoneLink: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/archiveCharacter.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const archiveCharacter: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/transferCharacter.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const transferCharacter: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/updateSettings.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const updateSettings: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/createWidget.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const createWidget: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/createProfileSection.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const createProfileSection: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/deleteProfileSection.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const deleteProfileSection: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/deleteProfileWidget.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const deleteProfileWidget: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/updateCharacter.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const updateCharacter: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/updateProfileWidget.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const updateProfileWidget: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/ConversationsFields.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const ConversationsFields: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getConversations.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getConversations: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/subscribeToConversations.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const subscribeToConversations: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/ForumPostFields.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const ForumPostFields: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/destroyDiscussion.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const destroyDiscussion: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/editReply.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const editReply: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getDiscussion.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getDiscussion: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/postReply.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const postDiscussionReply: DocumentNode;
export const postReply: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/updateDiscussion.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const updateDiscussion: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/createDiscussion.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const createDiscussion: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getDiscussions.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getDiscussions: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getForum.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getForum: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getForums.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getForums: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/sendKarma.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const sendKarma: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getCharacterForUpload.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getCharacterForUpload: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/imageProcessingComplete.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const onImageProcessingComplete: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/addComment.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const addComment: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getComments.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getComments: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/removeComment.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const removeComment: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/subscribeToComments.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const subscribeToComments: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/addFavorite.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const addFavorite: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/removeFavorite.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const removeFavorite: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/deleteMedia.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const deleteMedia: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getMedia.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getMedia: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/updateImage.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const updateImage: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getNotifications.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getNotifications: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/markAllNotificationsAsRead.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const markAllNotificationsAsRead: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/readNotification.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const readNotification: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/subscribeToNotifications.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const subscribeToNotifications: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/createApiKey.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const createApiKey: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getApiKeys.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getApiKeys: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/autocomplete.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const autcompleteUser: DocumentNode;
export const autocompleteCharacter: DocumentNode;
export const autocompleteHashtags: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/setUserAvatarBlob.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const setUserAvatarBlob: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/CharacterAttributes.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CharacterAttributes: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/CharacterFields.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CharacterFields: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/CharacterImages.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CharacterImages: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/CharacterProfile.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CharacterProfile: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/CharacterSwatches.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CharacterSwatches: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/CharacterTheme.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CharacterTheme: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/CharacterUser.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CharacterUser: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/DefaultCharacterFields.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const DefaultCharacterFields: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/GalleryImageFields.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GalleryImageFields: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/LodestoneCharacterFields.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const LodestoneCharacterFields: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/NotificationsFields.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const NotificationsFields: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/TransfersFields.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const TransfersFields: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/WidgetFields.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const WidgetFields: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getCharacterImages.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getCharacterImages: DocumentNode;
export const getCharacterImages: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/blockUser.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const blockUser: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/unblockUser.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const unblockUser: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/updateModeration.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const updateModeration: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/uploadImage.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const uploadImage: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/GetSession.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getSession: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getCharacterProfile.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getCharacterProfile: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getCharacterProfileById.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getCharacterProfileById: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getImageUploadToken.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getImageUploadToken: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getNextModeration.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getNextModeration: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/getUserProfile.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getUserProfile: DocumentNode;

  export default defaultDocument;
}
    

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "ApplicationRecord": [
      "Activity",
      "ApiKey",
      "Artist",
      "Character",
      "CharacterGroup",
      "Conversation",
      "Forum",
      "ForumDiscussion",
      "ForumPost",
      "Image",
      "Lodestone_Character",
      "Lodestone_ClassJob",
      "Lodestone_Race",
      "Lodestone_Server",
      "MarketplaceListing",
      "MediaComment",
      "MediaFavorite",
      "MediaFolder",
      "MediaHashtag",
      "MediaTag",
      "Message",
      "Moderation",
      "Notification",
      "NotificationCollection",
      "Swatch",
      "Theme",
      "Transfer",
      "User",
      "Version"
    ],
    "ModerationItem": [
      "Image"
    ],
    "Paginated": [
      "ArtistsCollection",
      "ForumDiscussionCollection",
      "ForumPostsCollection",
      "MediaCommentCollection",
      "UsersCollection"
    ],
    "Policy": [
      "ForumDiscussion",
      "ForumPost"
    ],
    "WidgetData": [
      "Json",
      "RichText",
      "Youtube"
    ]
  }
};
      export default result;
    