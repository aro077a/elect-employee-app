import React, { ChangeEvent, FC } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './searchContainer.scss';

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string
}

const SearchContainer: FC<Props> = ({ onChange,value }) => {
  return (
    <div className='search__container'>
      <Input
        placeholder='Search employee...'
        prefix={<SearchOutlined />}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default SearchContainer;
