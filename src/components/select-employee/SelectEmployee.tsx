import React, { ChangeEvent, FC, useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import SearchContainer from './search-container/SearchContainer';
import PersonType from './person-type/PersonType';
import imgCount  from '../../assets/images/Frame 1476.png'

import './selectEmployee.scss';

const data = [
  {
    title: 'Dr.Don Health',
  },
  {
    title: 'Dr.Xavier lll',
  },
  {
    title: 'Dr.Siegfried Tausend',
  },
];

interface Props {}

const SelectEmployee: FC = (props: Props) => {
  const { Title } = Typography;
  const [clicked, setClicked] = useState<boolean>(false);
  const [searchedValue, setSearchedValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchedValue(e.target.value);
  };

  const filtered = data?.filter((item: any) =>
    item.title.toLowerCase().trim().includes(searchedValue.toLowerCase().trim())
  );

  const menu = (
    <Menu className='menu'>
      <SearchContainer onChange={onChange} value={searchedValue}/>
      <PersonType data={data} filtered={filtered}/>
    </Menu>
  );

  const handleIconClick = (e: any) => {
    e.preventDefault();
    setClicked(!clicked);
  };

  return (
    <div className='select__employee__container'>
      <Title level={3}>Select employee dropdown</Title>
      <Dropdown overlay={menu} trigger={['click']}>
        <div className='ant-dropdown-link' onClick={handleIconClick}>
          <div>
            <img src = {imgCount} alt=''/>
          </div>
          <p>Select Employee</p>
          <DownOutlined
            className={clicked ? 'up' : 'down'}
            onClick={handleIconClick}
          />
        </div>
      </Dropdown>
    </div>
  );
};

export default SelectEmployee;
