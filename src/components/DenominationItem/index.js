// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachDenomination, addAmount} = props
  const {value, id} = eachDenomination

  const onAddBalance = () => {
    console.log('clicked')
    addAmount(value)
  }

  return (
    <li>
      <div className="button-container">
        <button type="button" className="button" onClick={onAddBalance}>
          {value}
        </button>
      </div>
    </li>
  )
}

export default DenominationItem
