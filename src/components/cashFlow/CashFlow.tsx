import React from 'react'
import styled from 'styled-components'

export interface CashFlowProps {
  sectionTitle: string
  earnedVal: number
  spentVal: number
}

export const CashFlow: React.FC<CashFlowProps> = ({
  sectionTitle = 'Cash Flow',
  earnedVal,
  spentVal,
}) => {
  const netValue = (earned: number, spent: number) => {
    const val = earned - spent
    if (val >= 0) {
      return `$${val}`
    } else {
      return `-$${val * -1}`
    }
  }

  const value = earnedVal - spentVal
  const numbers = [earnedVal, spentVal]
  const largestNumber = Math.max(...numbers)
  const earnedWidth = (earnedVal / largestNumber) * 100
  const spentWidth = (spentVal / largestNumber) * 100

  return (
    <StyledCashFlow
      netValue={value}
      earnedWidth={earnedWidth}
      spentWidth={spentWidth}
    >
      <h4>{sectionTitle}</h4>
      <div className='section'>
        <div className='graphs'>
          <div className='meter earned' />
          <div className='meter spent' />
        </div>
        <div className='values'>
          <div>
            <p>${earnedVal} earned</p>
            <p>-${spentVal} spent</p>
          </div>
          <p className='net-value'>{netValue(earnedVal, spentVal)}</p>
        </div>
      </div>
    </StyledCashFlow>
  )
}

interface StyledProps {
  netValue: number
  earnedWidth: number
  spentWidth: number
}

const StyledCashFlow = styled.div<StyledProps>`
  h4 {
    margin-bottom: 8px;
    text-transform: uppercase;
  }
  .section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .graphs {
    width: 80px;
    margin-right: 16px;
  }

  .meter {
    height: 15px;
    position: relative;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    border-radius: 10px;
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
    margin: 8px 0;
  }

  .earned {
    background-color: ${props => props.theme.primary500};
    width: ${props => props.earnedWidth}%;
  }

  .spent {
    background-color: ${props => props.theme.red};
    width: ${props => props.spentWidth}%;
  }

  .values {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      margin: 8px 0;
      color: ${props => props.theme.grey300};
      font-size: 15px;
      text-transform: capitalize;
    }
  }

  p.net-value {
    color: ${props => (props.netValue >= 0 ? 'blue' : 'red')};
    font-size: 18px;
    font-weight: 600;
  }
`
