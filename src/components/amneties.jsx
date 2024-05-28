import { useState } from "react"

export default function Amnetites({icon,title,onChange}){

    const [checked, setChecked] = useState(false);

    return (
      <div>
        <input
          onChange={(e) => {
            setChecked(e.target.checked)
            onChange(e.target.checked)
          }}
          className='me-2'
          type='checkbox'
        />
        <i className={'me-2 bi ' + icon} style={{ fontSize: 20 }} />
        <span>{title}</span>
      </div>
    )
}