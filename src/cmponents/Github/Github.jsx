import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/hiteshchoudhary')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
    }, []);
  return (
    <div className='text-center m-0 bg-gray-600 text-white p-3 text-3xl'>User: {data.followers}
    <img src={data.avatar_url} alt="Github avatar"  width={150}/>
    </div>
    
  )
}

export default Github