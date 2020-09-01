import React from 'react'
import styled from 'styled-components'

export interface BudgetSummaryProps {
  sectionTitle: string
  month:
    | 'january'
    | 'february'
    | 'march'
    | 'april'
    | 'may'
    | 'june'
    | 'july'
    | 'august'
    | 'september'
    | 'october'
    | 'november'
    | 'december'
  maxValue?: number
  currentValue?: number
}

const selectBG = (val: number) => {
  switch (true) {
    case val < 0.2:
      return '#75e8e7'
    case val < 0.4:
      return '#ddacf5'
    case val < 0.6:
      return '#9854cb'
    case val < 0.8:
      return '#64379f'
    default:
      return '#ff0000'
  }
}

export const BudgetSummary: React.FC<BudgetSummaryProps> = ({
  sectionTitle = 'Budget',
  month = 'january',
  maxValue = 1,
  currentValue = 0,
}) => {
  const value = currentValue / maxValue

  return (
    <StyledContainer value={value}>
      <div>
        <h4>{sectionTitle}</h4>
        <p>{month}</p>
      </div>
      <div className='meter'>
        <span></span>
      </div>
    </StyledContainer>
  )
}

interface StyledProps {
  value: number
  selectBG: () => number
}

const StyledContainer = styled.div<StyledProps>`
  padding-bottom: 15px;
  border-bottom: 2px solid ${props => props.theme.grey100}66;
  div {
    display: flex;
    align-items: center;
  }

  h4 {
    color: ${props => props.theme.grey900};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 15px;
  }

  p {
    margin-left: 8px;
    text-transform: capitalize;
    font-size: 14px;
    color: ${props => props.theme.grey300};
  }

  .meter {
    height: 20px; /* Can be anything */
    position: relative;
    background: ${props => props.theme.offWhite};
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    border-radius: 15px;
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
    margin-top: 8px;
  }

  .meter > span {
    display: block;
    height: 100%;
    width: ${props => props.value * 100}%;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: ${props => selectBG(props.value)};
    background-image: linear-gradient(
      center bottom,
      rgb(43, 194, 83) 37%,
      rgb(84, 240, 84) 69%
    );
    box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
      inset 0 -2px 6px rgba(0, 0, 0, 0.4);
    position: relative;
    overflow: hidden;
  }
`
