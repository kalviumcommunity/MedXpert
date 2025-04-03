import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Appointment = () => {

  const {docId} = useParams()
  const [docInfo,setDocInfo] = useState(null)
  

  const fetchDocInfo = async() => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  useEffect(()=>{
    fetchDocInfo()

  },[docId])

  
  return (
    <div>
        
    </div>
  )
}

export default Appointment