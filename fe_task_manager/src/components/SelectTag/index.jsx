import { cn } from '@/utils'
import { Tag } from 'antd'
import React from 'react'

export const SelectTag = ({ options, value, onChange, ...props }) => {
  const activeClass = 'border border-solid border-blue-500'
  return (
    <div>
      {options.map((e) => (
        <Tag
          key={e.value}
          value={e.value}
          onClick={() => onChange?.(e.value)}
          className={cn('cursor-pointer leading-8 px-3', { [activeClass]: value === e.value })}
          color={e.color}
        >
          {e.label}
        </Tag>
      ))}
    </div>
  )
}
