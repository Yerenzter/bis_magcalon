import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AddUser from './Actions/AddUser.jsx';
import DeleteUser from './Actions/DeleteUser.jsx';
import { SetUserId, EditUser } from './Actions/EditUser.jsx';
import PromoteUser from './Actions/PromoteUser.jsx';

import {
  Button,
  Page,
  Input,
  Loop,
  Table,
  Text,
  Tick
} from '../.././lib';

export default function ManageUsers() {
  const [data, sendData, user_id, user_name] = useState({});

  useEffect(() => {
    Tick(getData)
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get('http://yerenzter.me:4435/accounts');
      sendData(res.data);
    } catch(e) {
      throw e;
    }
  };
  return(
    <>
      <AddUser />
      <EditUser />

      <Page id='manageUsers' title='Manage Users' fullscreen={true}>
        <div className='d-flex flex-row justify-content-center'>
          <form className=' d-flex mb-3'>
            <Input name='user_name' label='Search users' />
            <Button props='btn-primary ms-3' type='submit' label='Search' />
            <Button props='btn-primary ms-3' type='button' toggle='modal' target='addUser' label='Add' />
          </form>
        </div>
        <form>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Username</th>
                <th scope='col'>Password</th>
                <th scope='col'>User Type</th>
                <th scope='col'>Date Joined</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>

            <tbody>
              <Loop repeat={ data.length }>
                {(index) => <tr key={index}>
                    <th scope='row' name='user_id'>{ data[index].account_id }</th>
                    <td>{ data[index].account_username }</td>
                    <td>{ data[index].account_password }</td>
                    <td>{ data[index].account_type }</td>
                    <td>{ data[index].account_created }</td>
                    <td>
                      <Button label='Edit' type='button' toggle='modal' target='editUser' click={() => SetUserId(data[index].account_id)} props='btn-primary mx-2' />
                      <Button label='Delete' type='button' click={() => DeleteUser(data[index].account_id)} props='btn-danger mx-2' />
                      <div className='btn-group'>
                        <Button label='Promote' props='btn-success dropdown-toggle mx-2' toggle='dropdown' />
                        <ul className='dropdown-menu'>
                          <li onClick={() => PromoteUser('Admin', data[index].account_id)}><a className='dropdown-item'>Admin</a></li>
                          <li onClick={() => PromoteUser('Personnel', data[index].account_id)}><a className='dropdown-item'>Personnel</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                }
              </Loop>
            </tbody>
          </table>
        </form>
      </Page>
    </>
  );
}
