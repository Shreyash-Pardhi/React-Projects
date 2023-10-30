import React from 'react'
import { IconButton, Button } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/x/u/y/s-smpl04-deemoon-original-imagk5mnr9ufeha2.jpeg?q=70"
                        alt="" />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>Men slim mid shirt</p>
                    <p className='opacity-70'>Size: L,Blue</p>
                    <p className='opacity-70 mt-2'>Seller: Denim</p>
                    <div className='flex space-x-5 items-center text-lg text-grey-900 pt-6'>
                        <p className="font-semibold">Rs199</p>
                        <p className="opacity-50 line-through">Rs399</p>
                        <p className="text-green-600 font-semibold">x% off</p>
                    </div>
                </div>

            </div>

            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className='dlex item-center space-x-2'>
                        <IconButton>
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm'>3</span>
                        <IconButton sx={{color:'RGB(145 85 253)'}}>
                            <AddCircleOutlineIcon/>
                        </IconButton>
                        
                    </div>
                    <div>
                        <Button sx={{color:'RGB(145 85 253)'}}>
                            Remove
                        </Button>
                    </div>
                </div>
        </div>
    )
}

export default CartItem