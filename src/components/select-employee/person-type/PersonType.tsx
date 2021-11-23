import React, { FC, useState } from 'react';
import { List, Avatar, Checkbox } from 'antd';
import userImg from '../../../assets/images/528-5285307_user-profile-circle-hd-png-download.png';
import './personType.scss';

interface Props {
    data: dataType[]
    filtered: dataType[]
}

type dataType ={
    title: string
}

const PersonType:FC<Props> = ({data,filtered}) => {
  const [checked, setChecked] = useState<string[]>([]);
  const [checkAll, setCheckAll] = useState<boolean>(false);

  const onCheckAllChange = () => {
    if (checkAll) {
      setChecked([]);
      setCheckAll(false);
    } else {
      setChecked(data.map((item) => item.title));
      setCheckAll(true);
    }
  };

  const onCheck = (i: string) => {
    let arr = [...checked];
    if (arr.includes(i)) {
      arr = arr.filter((item: any) => {
        console.log(item.title, i);
        return item !== i;
      });
    } else {
      arr = [...arr, i];
    }

    if (arr.length === data.length) {
      setCheckAll(true);
    } else {
      setCheckAll(false);
    }
    setChecked(arr);
  };

  return (
    <>
      <div className='checkAll__container'>
        <p>All employee</p>
        <Checkbox onChange={onCheckAllChange} checked={checkAll} />
      </div>
      <List
        itemLayout='horizontal'
        dataSource={filtered}
        renderItem={(item, i) => {
          return (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={userImg} alt='user' />}
                title={item.title}
                description=''
              />
              <Checkbox
                checked={checked.includes(item.title)}
                onChange={() => onCheck(item.title)}
              />
            </List.Item>
          );
        }}
      />
    </>
  );
};

export default PersonType;
