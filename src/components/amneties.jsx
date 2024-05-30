import { useEffect, useState } from "react"

export default function Amnetites({icon,title,shouldIUpdate,onChange}){
    console.log("hi im inside amnities: "+ shouldIUpdate);

   
    

    const [checked, setChecked] = useState(false)
    
    useEffect(() => {
        if (shouldIUpdate === 1) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    }, [shouldIUpdate]);


  return (
    <div>
      <input
        onChange={(e) => {
          setChecked(e.target.checked)
          onChange(e.target.checked)
          
        }}
        className='me-2'
        type='checkbox'
        checked={checked}
        
        

      />
      <i className={'me-2 bi ' + icon} style={{ fontSize: 20 }} />
      <span>{title}</span>
    </div>
  )
}