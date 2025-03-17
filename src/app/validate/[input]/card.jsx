"use client"

import SuccessData from "@/app/components/success-data";
import { useInputContext } from "@/context/input-context"
import { useEffect, useState } from "react";

export default function Card(props) {
    const { state } = useInputContext();
    const [errors, setErrors] = useState([]);
    const [response, setResponse] = useState({
        status: 0,
        data: {}
    });
    const endPoint = process.env.NEXT_PUBLIC_APP_URL + 'api/validate/';

    useEffect(() => {

        // Make the request to get the data.
        fetch(endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Ensure you set this header
                'Accept': 'application/json'
            },
            body: JSON.stringify({ input: state })
        }).then(async (rsp) => {
            const data = await rsp.json();

            setResponse({
                status: 1,
                data,
                success: rsp.status > 400 ? 0 : 1
            })
        })
            .catch((err) => {
                if (err?.message) {
                    setErrors((prev) => [
                        err.message
                    ])
                } else {
                    setErrors("Unable to complete the request please check your input");
                }
            });
    }, []);


    return (
        <div className="mx-auto my-10 max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex">
                Validating

                {!state ? (
                    <div className="mx-2 px-10 bg-slate-700 rounded p-4 py-3"></div>
                ) : (
                    <small className="mx-2">
                        {state}
                    </small>
                )}
            </h5>
            {response.status !== 1 && (
                <div
                    role="status"
                    className="max-w-md space-y-4 divide-gray-200 rounded shadow animate-pulse mt-10 dark:divide-gray-700 dark:border-gray-700"
                >
                    {[0,1,2,3].map((item, index) => {
                        return (
                            <div key={index} className="flex items-center justify-between gap-1">
                                <div className="h-5 w-5 rounded-full bg-gray-300 dark:bg-gray-700" />
                                <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-96" />
                            </div>
                        )
                    })}
                    <span className="sr-only">Loading...</span>
                </div>
            )}

            {response.success == 1 && response.data && (
                <SuccessData data={response.data} />
            )}

            {response.success == 0 && (
                <h1>Sorry! We are unable to parse the data, Please check your inputs</h1>
            )}
        </div>
    )
}
