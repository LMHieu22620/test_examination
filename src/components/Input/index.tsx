import { ChangeEvent } from "react"

interface Props {
  title: string
  placeholder: string
  iconStart: JSX.Element
  iconEnd?: JSX.Element
  onChange: any
  type?: string
}

export default function Input({ iconEnd, iconStart, placeholder, title, onChange, type }: Props) {
  const handleOnchangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }
  return (
    <div>
      <div className='absolute p-2 inset-y-0 top-[12px] '>{iconStart}</div>
      <div className='relative h-11 mt-5 w-full '>
        <input
          placeholder={placeholder}
          type={type}
          onChange={handleOnchangeValue}
          className='peer h-full w-full ps-10 pe-14 border-b-2 border-[#999999] bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#000842] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
        />
        <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-semibold leading-tight text-[#999999] transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0  after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-focus:text-md peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          {title}
        </label>
      </div>
      <div className='absolute p-3 cursor-pointer inset-y-0 right-3 top-[12px] flex items-center '>
        <div className=' hidden md:block  py-2 px-3 rounded-md'>{iconEnd}</div>
      </div>
    </div>
  )
}
