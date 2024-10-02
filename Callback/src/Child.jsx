import { memo } from "react"
import React from 'react'

const Child = ({Propscreate,count,third}) => {

    console.log("child componets")
  return (
    <div>Child</div>
  )
}

export default memo(Child)