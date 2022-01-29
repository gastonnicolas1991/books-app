import React from 'react';
import CardDetail from '.';
import { cardDetailProps } from './helpers';

export default {
  title: 'Components/CardDetail',
  component: CardDetail,
};

const Template = args => <CardDetail {...args} />;

export const Default = Template.bind({});
Default.args = cardDetailProps;
