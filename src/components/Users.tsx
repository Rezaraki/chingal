import { useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useQuery } from '@tanstack/react-query';
import { getSortOrderFromLocal, getUsers, pickNeededProperties, setSortOrdertoLocal } from '../services';
import { utf8Sorter } from '../services/utils';
import { Context } from '../providers/context/ContextProvider';
import { IUsersData } from '../types';
import { Loading } from './common';
import { SortOrder } from 'antd/lib/table/interface';

function Users() {
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);
  useEffect(() => {
    const savedSortOrder = getSortOrderFromLocal();
    if (savedSortOrder) {
      setSortOrder(savedSortOrder);
    }
  }, []);
  const handleSortChange = (_: unknown, __: unknown, sorter: Record<string, any>) => {
    setSortOrder(sorter.order);
    setSortOrdertoLocal(sorter.order);
  };

  const columns: ColumnsType<IUsersData> = [
    {
      title: 'نام کاربر',
      dataIndex: 'name',
      key: 'name',
      // TODO: change sort icon
      render: (name: string, record, index) => <Link to={`/users/${record.id}`}>{name}</Link>,
      sortOrder,
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

  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    select: pickNeededProperties,
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

  return isLoading ? (
    <Loading />
  ) : (
    <Table
      className="users"
      scroll={{ y: 780 }}
      pagination={false}
      loading={isLoading}
      columns={columns}
      dataSource={filteredUsers}
      onChange={handleSortChange}
    />
  );
}
export default Users;
