import React, { useState } from 'react'
import PushpinOutlined from '@ant-design/icons/PushpinOutlined'
import { ClockCircleOutlined } from '@ant-design/icons'
import { Avatar, Button } from 'antd'
import { cn } from '@/utils'
import { PopupNewTask } from '@/components/PopupNewTask'

export const Home = () => {
  const [openCreate, setOpenCreate] = useState(false)
  return (
    <div className="max-w-[600px] p-10 mx-auto ">
      <Button onClick={() => setOpenCreate(true)} className="w-full mb-4 bg-accent" type="primary">
        Create new Task
      </Button>
      <div className="flex gap-2 flex-col">
        <ToDoCard className="bg-red-50" />
        <ToDoCard className="bg-blue-50" />
        <ToDoCard className="bg-yellow-50" />
        <ToDoCard className="bg-orange-50" />
      </div>
      <PopupNewTask open={openCreate} onCancel={() => setOpenCreate(false)} />
    </div>
  )
}

const ToDoCard = ({ className }) => {
  return (
    <div className={cn('p-4 rounded-lg', className)}>
      <h3 className="text-lg font-[600] flex items-center justify-between">
        <span>Footbal</span>
        <Avatar size={40} src="https://placehold.co/100x100" />
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas aliquid voluptatibus consequuntur vero expedita
        vitae excepturi eaque explicabo
      </p>
      <div className="text-blue-400 cursor-pointer mt-2 pb-3 border-0 border-solid border-b border-gray-300">
        <PushpinOutlined /> Marlowe
      </div>
      <div className="mt-2 font-[400] flex justify-between items-center">
        <div className="text-sm text-gray-800">
          <ClockCircleOutlined /> 4:30 PM - 5:45 PM
        </div>
        <div>
          <Avatar.Group>
            <Avatar size={35} src="https://placehold.co/100x100" />
            <Avatar size={35} src="https://placehold.co/100x100" />
          </Avatar.Group>
        </div>
      </div>
    </div>
  )
}

export default Home