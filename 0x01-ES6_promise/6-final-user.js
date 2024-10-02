import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const results = await Promise.all([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName)
    ]);
    return results.map(result => ({
      status: 'fulfilled',
      value: result
    }));
  } catch (error) {
    return [{
      status: 'rejected',
      value: error.toString()
    }];
  }
}
