export function decodeFileName(formattedUserAvatarURL: string) {
  try {
    return decodeURIComponent(escape(formattedUserAvatarURL));
  } catch {
    return formattedUserAvatarURL;
  }
}
