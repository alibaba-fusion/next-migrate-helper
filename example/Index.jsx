import React from 'react';
import { Rating, Badge, Balloon, Button, Select, Form, Progress, Loading, Tag, Input, Tab } from '@alife/next';
import moment from 'moment';

const { Group: ButtonGroup } = Button;
const { TabPane } = Tab;

class Demo extends React.Component {

  render() {
    return (
      <div>
        <Rating type="grade" showInfo />
        <Badge count={3.2} align="left" />
        <Balloon alignment="normal" />
        <Button shape="warning" />
        <Select multiple />
        <Select.Combobox multiple ></Select.Combobox>
        <Select.Combobox tags />
        <Select.Combobox />
        <Form direction="ver" />
        <Form direction="hoz" />
        <Progress percent={30} showInfo={false} />
        <Loading shape="fusion-reactor" />
        <Tag shape="selectable"/>
        <Input multiple />
        <Tab><TabPane/></Tab>
      </div>
    );
  }

}

export default Demo;
