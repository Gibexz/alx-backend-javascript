import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((val) => val.map((condition) => ({
      status: condition.status,
      value: condition.status === 'fulfilled' ? condition.value : condition.reason.toString(),
    })));
}
