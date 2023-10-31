import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../services';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { utf8Sorter } from '../services/utils';
import pickNeededPropertiesforUsersTable from '../services/utils/pickNeededProperties';
import { useContext, useMemo } from 'react';
import { Context } from '../providers/context/ContextProvider';
import { IUsersData } from '../types';
const y = [
  {
    createdAt: '2023-07-09T08:21:39.305Z',
    name: 'amir3',
    avatar: '',
    dateOfBirth: '2011-07-08T19:30:00.000Z',
    country: 'ایران5',
    city: 'کرج5',
    street: '455',
    zipcode: '815',
    company: '5شرکت',
    email: 'amir@gmail.com',
    phoneNumber: '09945566885',
    id: '188',
    userName: 'amirhossei',
    age: '225',
    username: 'amirhossei',
  },
  {
    createdAt: '2023-07-09T08:21:39.305Z',
    name: 'amir5',
    avatar: '',
    dateOfBirth: '2011-07-08T19:30:00.000Z',
    country: 'ایران5',
    city: 'کرج5',
    street: '455',
    zipcode: '815',
    company: '5شرکت',
    email: 'amir@gmail.com',
    phoneNumber: '09945566885',
    id: '188',
    userName: 'amirhossei',
    age: '225',
    username: 'amirhossei',
  },
  {
    createdAt: '2023-07-09T08:21:39.305Z',
    name: 'با',
    avatar: '',
    dateOfBirth: '2011-07-08T19:30:00.000Z',
    country: 'ایران5',
    city: 'کرج5',
    street: '455',
    zipcode: '815',
    company: '5شرکت',
    email: 'amir@gmail.com',
    phoneNumber: '09945566885',
    id: '188',
    userName: 'amirhossei',
    age: '225',
    username: 'amirhossei',
  },
  {
    createdAt: '2023-07-09T08:21:39.305Z',
    name: 'اب',
    avatar: '',
    dateOfBirth: '2011-07-08T19:30:00.000Z',
    country: 'ایران5',
    city: 'کرج5',
    street: '455',
    zipcode: '815',
    company: '5شرکت',
    email: 'amir@gmail.com',
    phoneNumber: '09945566885',
    id: '188',
    userName: 'amirhossei',
    age: '225',
    username: 'amirhossei',
  },
];

const columns: ColumnsType<IUsersData> = [
  {
    title: 'نام کاربر',
    dataIndex: 'name',
    key: 'name',
    render: (name: string, record, index) => <Link to={'/users/' + record.id}>{name}</Link>,
    sorter: (a, b) => utf8Sorter(a.name, b.name),
  },
  {
    title: 'سن',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'شماره تلفن',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'ایمیل',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'آدرس',
    dataIndex: 'city',
    key: 'city',
  },

  {
    title: 'شرکت',
    dataIndex: 'company',
    key: 'company',
  },
];

function Users() {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    select: pickNeededPropertiesforUsersTable,
  });
  const store = useContext(Context);
  const {
    state: { searchValue },
  } = store!;

  const filteredUsers = useMemo(
    () =>
      users?.filter((person) => {
        if (!searchValue) return users;

        const values = Object.values(person).map((value) => value.toLowerCase());

        return values.some((value) => value.includes(searchValue.toLowerCase()));
      }),

    [users, searchValue],
  );

  return <Table pagination={false} loading={isLoading} columns={columns} dataSource={filteredUsers} />;
}
export default Users;
