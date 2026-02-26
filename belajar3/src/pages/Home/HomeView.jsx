import React, { memo } from 'react'

const HomeView = ({cafe, namaSaya}) => {
    console.log(cafe)
    
  return (
    <div>
        <div className="">{namaSaya}</div>
        <div className="">
            {cafe?.map((item) => {
                return(
                        <div className="">
                            <h1 className="">{item.name}</h1>
                            </div>
                )
            })}
        </div>
    </div>
  )
}

export default memo(HomeView)