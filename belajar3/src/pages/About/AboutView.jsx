import React, { memo } from 'react'

const AboutView = ({todos}) => {
    console.log(todos);

  return (
    <div>
        <div className="">
            {todos?.data?.map((item) => {
                return(
                    <div className="">
                        <div className="">{item.title}</div>
                    </div>
                    
                )
            })}
        </div>
    </div>
  )
}

export default memo(AboutView);