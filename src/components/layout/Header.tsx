import { Input, Segmented } from 'antd';
import { SearchProps } from 'antd/lib/input';
import chingalLogo from '@/Assets/imgs/chingal-logo.png';
import Moon from '@/Assets/svgs/Moon.svg?react';
import Sun from '@/Assets/svgs/Sun.svg?react';
import Search from '@/Assets/svgs/Search.svg?react';

// const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

function Header() {
  return (
    <header className="header">
      <img src={chingalLogo} alt="Chingal Logo" />
      <div className="header__left-container">
        {/* <Search placeholder="جستجو" className="header__search" allowClear onSearch={onSearch} /> */}
        <Input size="large" className="header__search" placeholder="جستجو" prefix={<Search />} />
        <Segmented
          value="dark"
          options={[
            {
              value: 'light',
              icon: <Sun />,
            },
            {
              value: 'dark',
              icon: <Moon />,
            },
          ]}
        />
      </div>
    </header>
  );
}
export default Header;
