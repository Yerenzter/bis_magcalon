import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AddResident from './components/AddResident.jsx';

import {
  Button,
  Card,
  Input,
  Loop,
  Page,
  ProfileCard,
  Table,
  Text,
  Tick
} from '../.././lib';

export default function ManageResidents() {
  const [data, sendData] = useState({});

  useEffect(() => {
    Tick(getData);
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get('http://yerenzter.me:4435/users');
      sendData(res.data);
    } catch(e) {
      throw e;
    }
  };

  return(
    <>
      <Page id='manageResidents' title='Manage Residents' fullscreen={true}>
        <div className='d-flex flex-row justify-content-center'>
          <form className='d-flex mb-5'>
            <Input name='residents' label='Search residents' />
            <Button props='btn-primary mx-3' type='button' label='Search' />
            <Button props='btn-primary' type='button' label='Add' />
          </form>
        </div>

        <form>
          <Table.Row props='gy-3'>
            <Loop repeat={data.length}>
              {(index) => <ProfileCard key={index} img='' name={data[index].user_name} purok={index}/>}
            </Loop>
          </Table.Row>
        </form>
      </Page>
    </>
  );
}
