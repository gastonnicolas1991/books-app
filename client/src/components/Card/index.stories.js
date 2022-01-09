import React from 'react';
import Card from '.';
import { cardProps } from './helpers';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = cardProps;

export const InactiveCharacter = Template.bind({});
InactiveCharacter.args = { ...cardProps, statusActive: false };

export const FavoriteCharacter = Template.bind({});
FavoriteCharacter.args = { ...cardProps, isFav: true };
