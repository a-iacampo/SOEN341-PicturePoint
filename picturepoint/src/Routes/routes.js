//Login
export const SIGN_UP = "/signup";
export const SIGN_IN = "/";
export const PASSWORD_FORGET = "/pw-forget";

//UserProfile
export const HOME = "/:username";
export const ACCOUNT = "/:username/Account";
export const FRIEND = "/:username/Friends";
//export const PHOTO = "/user/Photos";
export const ADD_PHOTO = "/:username/Photos/AddPhoto";
export const PHOTO_ID = "/:username/Photos/:id";

//FriendProfile
export const FRIEND_ID = "/:id";
export const F_FRIEND = "/:id/Friends";
export const F_PHOTO = "/:id/Photos";
export const F_PHOTO_ID = "/:id/Photos/:id";