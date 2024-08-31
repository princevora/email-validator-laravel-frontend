import React from 'react'

export default function SuccessData({ data }) {
    return (
        <>
            <h2 className="text-2xl mt-5 mb-2 font-semibold text-gray-900 dark:text-white">
                Results:
            </h2>
            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">

                {'disposable' in data && (
                    <li className="flex items-center">
                        <svg
                            className={`w-3.5 h-3.5 me-2 flex-shrink-0 ${data.disposable ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400 '}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        The Domain has been Found as {data.disposable ? 'Disposable' : 'Not Disposable'}
                    </li>
                )}

                {'mx_ip' in data && 'ipv4' in data?.mx_ip && (
                    <>
                        <li className="flex items-center">
                            <svg
                                className={`w-3.5 h-3.5 me-2 flex-shrink-0 ${data?.mx_ip?.ipv4.length > 0 ? 'text-green-500 dark:text-green-400 ' : 'text-gray-500 dark:text-gray-400'}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <p>
                                {data?.mx_ip?.ipv4.length > 0 ? 'IPV4 Addresses Found' : 'No Ipv4 Addresses Found '}
                            </p>
                        </li>
                        {data?.mx_ip?.ipv4.length > 0 && (
                            <li>
                                <div className="mt-2">
                                    {data?.mx_ip?.ipv4.map((item, index) => (
                                        <div className="flex mx-14 gap-2" key={index}>
                                            <p className='font-bold'>{index + 1}. </p>
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        )}
                    </>
                )}

                {'mx_ip' in data && 'ipv6' in data?.mx_ip && (
                    <>
                        <li className="flex items-center mt-3">
                            <svg
                                className={`w-3.5 h-3.5 me-2 flex-shrink-0 ${data?.mx_ip?.ipv6.length > 0 ? 'text-green-500 dark:text-green-400 ' : 'text-gray-500 dark:text-gray-400'}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <p>
                                {data?.mx_ip?.ipv6.length > 0 ? 'IPV6 Addresses Found' : 'No Ipv6 Addresses Found '}
                            </p>
                        </li>
                        {data?.mx_ip?.ipv6.length > 0 && (
                            <li>
                                <div className="mt-2">
                                    {data?.mx_ip?.ipv6.map((item, index) => (
                                        <div className="flex mx-14 gap-2" key={index}>
                                            <p className='font-bold'>{index + 1}. </p>
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        )}
                    </>
                )}

                {'mx_hosts' in data && (
                    <>
                        <li className="flex items-center">
                            <svg
                                className={`w-3.5 h-3.5 me-2 flex-shrink-0 ${data.mx_hosts.length <= 0 ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400'}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Mail Hosts {data.mx_hosts.length > 0 ? 'Found' : 'Not Found'}
                        </li>
                        {data?.mx_hosts.length > 0 && (
                            <li>
                                <div className="mt-2">
                                    {data?.mx_hosts.map((item, index) => (
                                        <div className="flex mx-14 gap-2" key={index}>
                                            <p className='font-bold'>{index + 1}. </p>
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        )}
                    </>
                )}
            </ul>
        </>
    )
}
