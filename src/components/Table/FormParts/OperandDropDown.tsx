function OperandDropDown() {
  return (
    <div className="kintoneplugin-select-outer">
      <div className="kintoneplugin-select">
        <select>
          <option value="">-----</option>
          <option value="等しい">等しい</option>
          <option value="等しくない">等しくない</option>
          <option value="以上">以上</option>
          <option value="以下">以下</option>
          <option value="含む">含む</option>
          <option value="含まない">含まない</option>
        </select>
      </div>
    </div>
  )
}

export default OperandDropDown
