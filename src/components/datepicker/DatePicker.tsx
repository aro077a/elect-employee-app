import React from 'react';
import { Typography, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ReactInfiniteCalendar from 'react-infinite-calendar';
import "react-infinite-calendar/styles.css";
import './datePicker.scss'

interface Props {}

const DatePicker = (props: Props) => {
  const { Title } = Typography;

  const menu = (
    <Menu className='menu1'>
      <ReactInfiniteCalendar
        className='calendar'
        displayOptions={{
          showHeader: false,
        }}
        locale={{
          weekStartsOn: 1,
          weekdays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        }}
        theme={{
          todayColor: 'transparent',
          selectionColor: 'rgb(52,107,209)',
          textColor: {
            default: '#FFF',
            active: '#FFF',
          },
          weekdayColor: '#142A51',
          floatingNav: {
            background: '#142A51',
            color: '#FFF',
            chevron: '#FFF',
          },
        }}
        minDate={new Date()}
      />
    </Menu>
  );
  return (
    <div className='datepicker__dropdown'>
      <Title level={3}>Date picker</Title>
      <Dropdown overlay={menu} trigger={['click']}>
        <div className='ant-dropdown-link'>
          <p>Date picker</p>
          <DownOutlined />
        </div>
      </Dropdown>
    </div>
  );
};

export default DatePicker;
