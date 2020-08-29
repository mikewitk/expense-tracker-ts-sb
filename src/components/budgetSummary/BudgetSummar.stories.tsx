import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { BudgetSummary, BudgetSummaryProps } from './BudgetSummary'

export default {
  title: 'Component/BudgetSummary',
  component: BudgetSummary,
  argTypes: {
    currentValue: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
  },
} as Meta

const Template: Story<BudgetSummaryProps> = args => <BudgetSummary {...args} />

export const monthStart = Template.bind({})
monthStart.args = {
  sectionTitle: 'Budget',
  month: 'january',
  currentValue: 0.3,
}
