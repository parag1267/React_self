import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-11 w-11 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod suscipit, nihil eligendi sunt voluptas nobis id corporis! Asperiores, debitis unde?</p>
                <div className="flex justify-between">
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium px-7 py-2 rounded-full'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium px-4 py-2 rounded-full'><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
