'use client'
import { DarkModeIcon, LightModeIcon } from '@/public/svg'
import { useEffect, useState } from 'react'
// import { useTheme } from '../themes/theme-provider'

export const SwitchMode = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const getThemeBtnCls = (isActive: boolean) => {
        return isActive
            ? 'flex h-8 w-[50%] cursor-pointer items-center justify-center rounded-[32px] border-0 bg-[#FCFCFC] dark:text-white dark:bg-[#272B30] px-2 py-1 text-black'
            : 'h-8 w-[50%] cursor-pointer border-0 bg-transparent p-0 text-gray flex items-center justify-center'
    }

    return (
        <div className='flex h-10 items-center gap-1 rounded-[40px] bg-[#F4F4F4] p-1 dark:bg-[#111315]'>
            <button className={getThemeBtnCls(theme === 'light')} onClick={() => setTheme('light')}>
                <LightModeIcon />
                {/* Light */}
            </button>
            <button className={getThemeBtnCls(theme === 'dark')} onClick={() => setTheme('dark')}>
                <DarkModeIcon />
                {/* Dark */}
            </button>
        </div>
    )
}
