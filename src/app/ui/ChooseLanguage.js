"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CircleFlag } from 'react-circle-flags'

export default function ChooseLanguage() {
    const [languages, setLanguages] = useState([])

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => setLanguages(data.languages))
    }, [])

    return (
        <div className='flex flex-col w-screen h-[10vh] mt-[30vh] items-center justify-center font-sans'>
            <h1 className='text-white mb-[10vh] font-[700] text-[4vh]'>Which language do you learn?</h1>
            <div className="flex flex-row w-screen justify-center items-center gap-[2vw]">
                {
                    languages.map((language) => (
                        <Link href={`/${language.code}`} key={language.code}>
                            <CircleFlag alt={language.name} countryCode={language.code} className='cursor-pointer hover:scale-110 transition-all active:scale-100' width={120} height={120} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}