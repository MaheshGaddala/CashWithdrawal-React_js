// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balanceAmount: 2000,
  }

  onAddAmount = value => {
    this.setState(prevState => ({
      balanceAmount: prevState.balanceAmount - value,
    }))
  }

  render() {
    const {balanceAmount} = this.state

    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="container">
          <div className="heading-container">
            <h1 className="user-name">
              <span className="user-logo">S</span>Sarah Williams
            </h1>
          </div>
          <div className="sub-container">
            <p className="description">Your Balance</p>
            <div className="money-container">
              <p className="heading">{balanceAmount}</p>
              <p className="tag-line">In Rupees</p>
            </div>
          </div>

          <p className="heading">Withdraw</p>
          <p className="description">CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(eachValue => (
              <DenominationItem
                eachDenomination={eachValue}
                key={eachValue.id}
                addAmount={this.onAddAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
