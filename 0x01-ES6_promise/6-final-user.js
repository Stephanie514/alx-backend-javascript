/*  function handleProfileSignup that accepts three arguments */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPr = signUpUser(firstName, lastName);
  const uploadPhotoPr = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPr, uploadPhotoPr]).then((values) => {
    const result = [];
    values.forEach((element) => {
      if (element.status === 'fulfilled') {
        result.push({ status: element.status, value: element.value });
      } else {
        result.push({ status: element.status, value: `${element.reason}` });
      }
    });
    return result;
  });
}
