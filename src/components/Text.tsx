import React from 'react'

function Text(props: { key: string }) {
  return (
    <div className="kintoneplugin-input-outer">
      <input className="kintoneplugin-input-text" type="text" key={props.key} />
    </div>
  )
}

export default Text
