import React, { useEffect, useState } from 'react';

const UserDetails = ({ customerData, firstName, lastName }) => {
  const [email,setEmail] = useState("user email");
  useEffect(()=>{
    if(customerData.email) {
      setEmail(customerData.email)
    }
    else {
      setEmail("Not Available");
    }
  },[customerData])
  return (
    <div className="user-details">
      <div className='CustomerDetailsHead'>Customer Details</div>
      <div className='detail'>
        <span className='detailHead'>Email:</span> <span className={`${email=="Not Available"? "not-available" : "available"} detailContent`}>{email}</span>
      </div>
      <div className='detail'>
        <span className='detailHead' >First Name:</span> <span className='detailContent'> {firstName!=="user" && firstName} </span>
      </div>
      <div className='detail'>
        <span className='detailHead'>Last Name:</span> <span className='detailContent'>{lastName} </span>
      </div>
      <a className='moreDetailsLink' href="moreDetailsLink">View more details</a>
    </div>
  );
};

export default UserDetails;
