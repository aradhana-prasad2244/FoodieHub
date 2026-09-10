import React from 'react'

const AppDownload = () => {
  return (
    <div className='flex flex-col items-center gap-4 my-20 px-20'>
        <p className='text-4xl font-bold w-4xl text-center'>Enjoy a better food-ordering experience with the FoodieHub App.</p>
        <ul className='flex items-center justify-center gap-5 cursor-pointer'>
            <li>
                <img className='h-30' src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-play-app-icon-vector-png-image_12256664.png" alt="" />
            </li>
            <li>
                <img className='h-14 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="" />
            </li>
        </ul>
    </div>
  )
}

export default AppDownload