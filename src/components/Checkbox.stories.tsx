import { Meta, StoryObj } from '@storybook/react'
import { Children } from 'react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Large, Small } from './Text.stories'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
       (Story) => {
        return (
            <div className='flex items-center gap-2'>
              {Story()}
              <text className='text-gray-100'>  Lembrar-me de mim por 30 dias</text>
            </div>
        )
       }
    ]

} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}