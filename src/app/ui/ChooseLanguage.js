import Link from 'next/link'
import { CircleFlag } from 'react-circle-flags'

export default function ChooseLanguage() {




    return (
        <div className='flex flex-col w-screen h-[10vh] mt-[30vh] items-center justify-center font-sans'>
            <h1 className='text-white mb-[10vh] font-[700] text-[4vh]'>Which language do you learn?</h1>
            <div className="flex flex-row w-screen justify-center items-center gap-[2vw]">
                <Link href="/es">
                    <CircleFlag alt='Spanish' countryCode='es' className='cursor-pointer hover:scale-110 transition-all active:scale-100' width={120} height={120} />
                </Link>
            </div>
        </div>
    )
}