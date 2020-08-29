import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import AccountSummary from './AccountSummary'
import knobData from './AccountSummary.knob.json'

const { sectionTitle, cashText, debtText, cashNumber, debtNumber } = knobData

export const basicSummary = () => (
  <AccountSummary
    sectionTitle={text(
      sectionTitle.label,
      sectionTitle.default,
      sectionTitle.group
    )}
    cashText={text(cashText.label, cashText.default, cashText.group)}
    cashNumber={text(cashNumber.label, cashNumber.default, cashNumber.group)}
    debtText={text(debtText.label, debtText.default, debtText.group)}
    debtNumber={text(debtNumber.label, debtNumber.default, debtNumber.group)}
  />
)

export default {
  title: 'Component/Account',
  decorators: [withKnobs],
  component: AccountSummary,
}
