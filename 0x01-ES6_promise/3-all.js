import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const Pr1 = uploadPhoto();
  const Pr2 = createUser();

  return Promise.all([Pr1, Pr2]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
