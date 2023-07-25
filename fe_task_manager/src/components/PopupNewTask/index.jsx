import { CloseOutlined, PlusOutlined, PushpinOutlined } from '@ant-design/icons'
import { Avatar, Button, DatePicker, Form, Input, Modal } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { SelectTag } from '../SelectTag'
import { DropdownSelect } from '../SelectUser'

export const PopupNewTask = ({ open, onCancel }) => {
  return (
    <Modal
      maskClosable={false}
      open={open}
      onCancel={onCancel}
      width={520}
      title={<div className="text-xl text-center border-0 border-b border-solid border-gray-200 pb-4">Create task</div>}
      footer={null}
    >
      <Form layout="vertical py-4">
        <Form.Item name="title" rules={[{ required: true }]} label="Task title" className="">
          <Input />
        </Form.Item>
        <Form.Item rules={[{ required: true }]} name="category" label="Category">
          <SelectTag
            options={[
              { label: 'All', value: 'all' },
              { label: 'Education', value: 'education', color: 'green' },
              { label: 'Sports', value: 'sports', color: 'orange' },
              { label: 'Meetings', value: 'meetings', color: 'yellow' },
              { label: 'Friends', value: 'friends', color: 'blue' },
            ]}
          />
        </Form.Item>
        <div className="flex w-full gap-2 mt-2">
          <Form.Item name="startDate" rules={[{ required: true }]} label="Starts" className="flex-1">
            <DatePicker showTime className="w-full" />
          </Form.Item>
          <Form.Item name="endDate" rules={[{ required: true }]} label="Ends" className="flex-1">
            <DatePicker showTime className="w-full" />
          </Form.Item>
        </div>
        <Form.Item name="user" rules={[{ required: true }]} label="Participants">
          <DropdownSelect
            options={[
              {
                value: 1,
                avatar: 'https://placehold.co/100x100',
                name: 'Emma',
                label: (
                  <Button size="small" className="flex items-center w-full">
                    <Avatar className="mr-2" size={28} src="https://placehold.co/100x100" /> Emma <PlusOutlined />
                  </Button>
                ),
              },
              {
                value: 2,
                avatar: 'https://placehold.co/100x100',
                name: 'Liam',
                label: (
                  <Button size="small" className="flex items-center w-full">
                    <Avatar className="mr-2" size={28} src="https://placehold.co/100x100" /> Liam <PlusOutlined />
                  </Button>
                ),
              },
            ]}
            renderSelected={({ option: user, remove }) => (
              <Button onClick={remove} className="flex items-center p-2">
                <Avatar className="mr-2" size={28} src={user.avatar} /> {user.name} <CloseOutlined />
              </Button>
            )}
          />
        </Form.Item>
        <Form.Item label="Location">
          <Input prefix={<PushpinOutlined />} />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea />
        </Form.Item>
        <Button htmlType="submit" type="primary" className="w-full bg-accent">
          Create task
        </Button>
      </Form>
    </Modal>
  )
}
