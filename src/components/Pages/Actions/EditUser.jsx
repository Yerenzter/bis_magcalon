import axios from 'axios';

import {
  Button,
  Container,
  Input,
  Page
} from '../../.././lib';

let userId = 0;

export function UpdateUser() {
  try {
    let username = document.querySelector('#editUsername');
    let password = document.querySelector('#editPassword');

    const user = {
      account_username: username.value,
      account_password: password.value,
      account_id: userId
    };

    const res = axios.put('http://yerenzter.me:4435/accounts', user)
    .then(() => alert('User updated successfully'))
    .catch(e => alert(e));
  } catch(err) {
    throw err
  }
}

export function SetUserId(id) {
  return userId = id;
}

export function Footer() {
  return(
    <>
      <Button label='Cancel' toggle='modal' target='manageUsers' props='btn-secondary' />
      <Button label='Done' toggle='modal' target='manageUsers' click={() => UpdateUser()} props='btn-primary' />
    </>
  );
}

export function EditUser() {
  return(
    <Page id='editUser' title='Edit user account' enableFooter={true} footerChildren={ <Footer /> }>
      <Input label='Change username' id='editUsername' props='mb-3'/>
      <Input label='Change password' id='editPassword' />
    </Page>
  );
};

export default { UpdateUser, SetUserId, Footer, EditUser }
