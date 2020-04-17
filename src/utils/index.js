export { default as getToken } from './getToken';

export const checkNullAvatar = avatar => {
  if (avatar) {
    return avatar;
  }

  return 'https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png';
};
