// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-btn active' : 'tab-btn'

  return (
    <li className="tab_item">
      <button className={tabBtnClassName} type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
