import axios from 'axios';

export default function PromoteUser(type, id) {
  try {
    const user = {
      account_type: type,
      account_id: id
    };

    axios.put('http://yerenzter.me:4435/accounts/promote', user)
    .then(() => console.log('Success'))
    .catch(e => console.log(e));
  } catch(e) {
    throw e;
  }
}
