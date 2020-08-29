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

export const BudgetSummary: React.FC<BudgetSummaryProps> = ({
  sectionTitle = 'Budget',
  month = '',
  maxValue = 1,
  currentValue = 0,
}) => {
  const value = (currentValue / maxValue) * 100

  return (
    <StyledContainer>
      <div>
        <h4>{sectionTitle}</h4>
        <p>{month}</p>
      </div>
      {/* <progress max='1' value={value} /> */}
      <div className='meter'>
        <span style={{ width: `${value}%` }}></span>
      </div>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
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

  /* progress {
    width: 100%;
    height: 30px;
    background-color: blue;
    border-radius: 10px;
  } */

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
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: ${props => props.theme.primary500};
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
