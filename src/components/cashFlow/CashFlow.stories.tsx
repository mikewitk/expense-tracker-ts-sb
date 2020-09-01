import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { CashFlow, CashFlowProps } from './CashFlow'

export default {
  title: 'Component/CashFlow',
  component: CashFlow,
} as Meta

const Template: Story<CashFlowProps> = args => <CashFlow {...args} />

export const positiveCashFlow = Template.bind({})
positiveCashFlow.args = {
  sectionTitle: 'Cash Flow',
  earnedVal: 8523,
  spentVal: 2500,
}

export const equalCashFlow = Template.bind({})
equalCashFlow.args = {
  sectionTitle: 'Cash Flow',
  earnedVal: 6498,
  spentVal: 6498,
}

export const negativeCashFlow = Template.bind({})
negativeCashFlow.args = {
  sectionTitle: 'Cash Flow',
  earnedVal: 2500,
  spentVal: 8523,
}
