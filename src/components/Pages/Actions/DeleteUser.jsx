import axios from 'axios';

export default function DeleteUser(id) {
  try {
    const user = {
      user_id: id
    }
    axios.delete(`http://yerenzter.me:4435/users`, user)
    .then(() => console.log('User deleted successfully'))
    .catch(e => console.log(e));
  } catch(err) {
    throw err;
  }
}
