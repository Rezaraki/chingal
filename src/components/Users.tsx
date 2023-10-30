import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../services';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { utf8Sorter } from '../utils';
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
interface DataType {
  createdAt: string;
  name: string;
  avatar: string;
  dateOfBirth: string;
  country: string;
  city: string;
  street: string;
  zipcode: string;
  company: string;
  email: string;
  phoneNumber: string;
  id: string;
  userName: string;
  age: string;
  username: string;
}

const columns: ColumnsType<DataType> = [
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

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

function Users() {
  const { data: users, isLoading, error } = useQuery({ queryKey: ['users'], queryFn: getUsers });
  console.log('data', data);
  return <Table pagination={false} columns={columns} dataSource={y} />;
}
export default Users;
