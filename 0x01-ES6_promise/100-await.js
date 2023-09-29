import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let got = {};

  try {
    const photo = await uploadPhoto();
    const users = await createUser();
    got = { photo, users };
  } catch (error) {
    got = { photo: null, users: null };
  }
  return got;
}
