import { Button, Card } from '@mui/material';
import React from 'react'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className="flex items-center space-x-5">
            <img className="h-16 w-16" src="https://images.pexels.com/photos/31596394/pexels-photo-31596394.jpeg"/>
            <div>
                <p>Pizza</p>
                <p>€9.99</p>
            </div>

        </div>
        <div>
            <Button  className="cursor-not-allowed">completed</Button>
        </div>

    </Card>
  )
}

export default OrderCard