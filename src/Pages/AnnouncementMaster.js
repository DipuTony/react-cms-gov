import React, {useState} from 'react'
import SideDrawer from '../Components/SideDrawer'
import Tab from '../Components/Tabs'

export default function EventMaster() {

  const [ulbinfo, setUlbinfo] = useState(1)

  const getUlbID = (e) => {
   console.log('EventMaster ',e.value, e.label)
   setUlbinfo(e)
  }

  return (
    <div>
      <SideDrawer fun={getUlbID} header="Announcement" />
      <Tab ulbinfo={ulbinfo} title="Announcement" />
    </div>
    
  )
}
