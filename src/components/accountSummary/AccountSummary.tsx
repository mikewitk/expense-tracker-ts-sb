import React from 'react'
import styled from 'styled-components'

interface AccountSummaryProps {
  sectionTitle: string
  cashText: string
  debtText: string
  cashNumber: number
  debtNumber: number
}

const AccountSummary = ({
  sectionTitle,
  cashText,
  debtText,
  cashNumber,
  debtNumber,
}: AccountSummaryProps) => {
  return (
    <StyledContainer>
      <h4>{sectionTitle}</h4>
      <div className='summary'>
        <p className='text'>{cashText}</p>
        <p className='positive'>${cashNumber}</p>
      </div>
      <div className='summary'>
        <p className='text'>{debtText}</p>
        <p className='negative'>-${debtNumber}</p>
      </div>
    </StyledContainer>
  )
}

export default AccountSummary

const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 2px solid ${props => props.theme.grey100}66;

  h4 {
    color: ${props => props.theme.grey900};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 8px;
  }
  .summary {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .text {
    font-size: 12px;
    color: ${props => props.theme.grey400};
  }
  .positive {
    font-size: 18px;
    color: ${props => props.theme.primary500};
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
  .negative {
    font-size: 18px;
    color: ${props => props.theme.gray900};
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
`
