import { cn } from '@/utils'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Dropdown } from 'antd'
import React, { useRef } from 'react'

export const DropdownSelect = ({ value = [], onChange, options, renderSelected, ...props }) => {
  const buttonRef = useRef()
  console.log(props)
  return (
    <div className="flex gap-2">
      <Dropdown
        trigger={['click']}
        getPopupContainer={(target) => buttonRef.current}
        menu={{
          className: '[&_.ant-dropdown-menu-item]:!p-2',
          items: options
            .filter((e) => !value.includes(e.value))
            .map((e) => ({
              ...e,
              key: e.value,
              onClick: () => onChange?.([...value, e.value]),
            })),
        }}
      >
        <Button
          className={cn({ 'border-red-500 text-red-500': props['aria-invalid'] === 'true' })}
          ref={buttonRef}
          icon={<PlusOutlined />}
        />
      </Dropdown>
      {value.map((e, i) => (
        <React.Fragment key={e}>
          {renderSelected({
            option: options.find((o) => o.value === e),
            remove: () => {
              value.splice(i, 1)
              onChange?.([...value])
            },
          })}
        </React.Fragment>
      ))}
    </div>
  )
}
