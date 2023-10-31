import { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../services';
import { utf8Sorter } from '../services/utils';
import pickNeededPropertiesforUsersTable from '../services/utils/pickNeededPropertiesforUsersTable';
import { Context } from '../providers/context/ContextProvider';
import { IUsersData } from '../types';

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

  return (
    <Table
      className="users"
      scroll={{ y: 780 }}
      pagination={false}
      loading={isLoading}
      columns={columns}
      dataSource={filteredUsers}
    />
  );
}
export default Users;
