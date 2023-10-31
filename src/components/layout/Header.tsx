import { Input, Segmented } from 'antd';
import { ChangeEvent, useContext } from 'react';
import chingalLogo from '@/Assets/imgs/chingal-logo.png';
import Moon from '@/Assets/svgs/Moon.svg?react';
import Sun from '@/Assets/svgs/Sun.svg?react';
import Search from '@/Assets/svgs/Search.svg?react';
import { Context } from '../../providers/context/ContextProvider';
import { ACTION_TYPES } from '../../enums';

function Header() {
  const store = useContext(Context);
  const { dispatch, state } = store ?? {};
  const { searchValue } = state ?? {};

  function handelSearch(e: ChangeEvent<HTMLInputElement>) {
    dispatch && dispatch({ type: ACTION_TYPES.SET_SEARCH_VALUE, payload: e.target.value });
  }
  function handelSearch() {
    dispatch && dispatch({ type: ACTION_TYPES.EXCUTE_SEARCH, payload: '' });
  }

  return (
    <header className="header">
      <img src={chingalLogo} alt="Chingal Logo" />
      <div className="header__left-container">
        <Input
          size="large"
          value={searchValue}
          onChange={handelSearch}
          onPressEnter={}
          className="header__search"
          placeholder="جستجو"
          prefix={<Search onClick={handelSearch} />}
        />
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
