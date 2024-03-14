'use client'
import { useEffect, useState } from "react"
import { useAppContext } from "./AppProvider"

export default function Home() {
    const [data, setData] = useState([])
    const { setSessionToken, sessionToken } = useAppContext()
    console.log(sessionToken, 'sessionToken');

    useEffect(() => {
        try {
            fetch(
                'https://frontend-exam.digitalfortress.dev/projects',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionToken}`
                    },
                    method: 'GET'
                }
            ).then(async (res) => {
                const payload = await res.json()

                if (res.ok) {
                    setData(payload.results)
                }
                return data

            })
        } catch (error: any) {
            console.log(error, 'eerrr');
        }
    }, [sessionToken])
    console.log(data, 'datadata');


    return (
        <main>
            <div>
                <div className='relative mt-6 overflow-x-auto shadow-md sm:rounded-lg'>
                    <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
                        <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope='col' className='py-3 px-6'>
                                    #
                                </th>
                                <th scope='col' className='py-3 px-6'>
                                    Name
                                </th>
                                <th scope='col' className='py-3 px-6'>
                                    Domain
                                </th>
                                <th scope='col' className='py-3 px-6'>
                                    license use
                                </th>
                                <th scope='col' className='py-3 px-6'>
                                    #
                                </th>
                                <th scope='col' className='py-3 px-6'>
                                    #
                                </th>
                                <th scope='col' className='py-3 px-6'>
                                    #
                                </th>
                                <th scope='col' className='py-3 px-6'>
                                    #
                                </th>
                                <th scope='col' className='py-3 px-6'>
                                    #
                                </th>

                            </tr>
                        </thead>
                        {data.map((item: any, index: number) => {
                            return (
                                <tbody key={item.id}>
                                    <tr className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
                                        <td className='py-4 px-6'>{index + 1}</td>
                                        <th scope='row' className='whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white'>
                                            {item.project_name}
                                        </th>
                                        <td className='py-4 px-6'>
                                            {item.project_domain}

                                        </td>
                                        <td className='py-4 px-6'>
                                            {/* {item.license_use.map((item) => {
                                            return <p>

                                            </p>
                                        })} */}

                                        </td>

                                    </tr>
                                </tbody>
                            )
                        })}

                    </table>
                </div>
            </div>
        </main>
    )
}
