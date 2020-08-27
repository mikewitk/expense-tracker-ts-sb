import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import Header from './Header'
import knobData from './Header.knobs.json'

const { innerText } = knobData

export const mainHeader = () => (
  <Header>{text(innerText.label, innerText.default, innerText.group)}</Header>
)

export default {
  component: Header,
  decorators: [withKnobs],
  title: 'Component/Header',
}
