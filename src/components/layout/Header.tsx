import { Input, Segmented } from 'antd';
import { ChangeEvent, useContext, useEffect } from 'react';
import chingalLogo from '@/Assets/imgs/chingal-logo.png';
import Moon from '@/Assets/svgs/Moon.svg?react';
import Sun from '@/Assets/svgs/Sun.svg?react';
import Search from '@/Assets/svgs/Search.svg?react';
import { Context } from '../../providers/context/ContextProvider';
import { ACTION_TYPES } from '../../enums';
import { useThemeMode } from '../../services';
import { TTheme } from '../../types';

function Header() {
  const [themeMode, setThemeMode] = useThemeMode();
  const store = useContext(Context);
  const { dispatch, state } = store!;
  const { searchValue } = state;

  useEffect(() => {
    const savedSearchVal = localStorage.getItem('searchValue');
    savedSearchVal && dispatch({ type: ACTION_TYPES.SET_SEARCH_VALUE, payload: savedSearchVal });
  }, []);

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: ACTION_TYPES.SET_SEARCH_VALUE, payload: e.target.value });
    localStorage.setItem('searchValue', e.target.value);
  }
  function handleSwitchChange(newTheme: TTheme) {
    setThemeMode(newTheme);
  }

  return (
    <header className="header">
      <img src={chingalLogo} alt="Chingal Logo" />
      <div className="header__left-container">
        <Input
          size="large"
          value={searchValue}
          onChange={handleSearch}
          className="header__search"
          placeholder="جستجو"
          prefix={<Search />}
        />
        <Segmented
          value={themeMode ?? undefined}
          onChange={handleSwitchChange}
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
