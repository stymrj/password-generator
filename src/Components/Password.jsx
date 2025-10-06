import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa6";


const Password = () => {

    const numbers = '0123456789'
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const specialCharacters = "!'^+%&/()=?_#${[]}|;:>÷`<.*-@é"


    const [password, setPassword] = useState('')
    const [passLength, setPassLength] = useState(8)
    const [includeChar, setChar] = useState(false)
    const [includeNum, setNum] = useState(false)
    const [upCase, setUpCase] = useState(false)
    const [lowCase, setLowCase] = useState(false)
    const [copied, setCopied] = useState(false)



    const createPassword = () => {
        let charSet = '' // created a string to ensure kya kya select krke rakha hai 
        let finalPassword = ''
        if (upCase || lowCase || includeChar || includeNum) {//check kiya agar koi ek true hai tbhi nhi to 
            if (upCase) charSet += upperCaseLetters //true h isliye isko add kar diya mene charSet me 
            if (lowCase) charSet += lowerCaseLetters
            if (includeChar) charSet += specialCharacters
            if (includeNum) charSet += numbers

            for (let i = 0; i < passLength; i++) {
                finalPassword += charSet.charAt(Math.floor(Math.random() * charSet.length))
            }
            setPassword(finalPassword)
            console.log(finalPassword)

        } else {//nahi to ye error de do
            toast.error('Kindly select any checkbox to proceed...')
        }

        // console.log(charSet)
    }


    const copyPassword = ()=>{
        if(password){
            setCopied(true)
            navigator.clipboard.writeText(password)
            toast.success("Password Copied..")
        }
        setTimeout(()=>{
            setCopied(false)
            toast.error('Please Copy Again...')
        },4000)
    }

    // console.log('Password Length : ',passLength,
    // 'Password UpperCase Selected : ',upCase,
    // 'Password LowerCase Selected : ',lowCase,
    // 'Password Numbers Selected : ',includeNum,
    // 'Password Special Char Selected : ',includeChar)


    return (
        <div className='flex flex-col bg-gradient-to-tl from-orange-100 to-cyan-200  items-center justify-center min-h-screen px-4'>
                <h1 className='text-3xl text-center font-serif font-bold mb-6'>Welcome to the Password Generation Tool!</h1>
            
            <div className='
        border-2 bg-gradient-to-tr from-cyan-200 to-pink-200
         shadow-green-300 shadow-xl
         border-b-green-500 
         border-l-red-500 
         border-t-blue-500 
         border-r-pink-500 
          rounded-3xl h-auto w-[70vw] md:w-[50vw] p-3 '>
                <h1 className='text-3xl text-center font-serif font-bold mb-6'>Password Generator</h1>
                <div className='flex flex-row justify-between rounded-xl text-center p-2 h-12 mb-10 bg-green-400'>
                    <div className='mx-15 text-s md:text-2xl text-black font-mono '>{password}</div>

                    {password ? <button
                        className='font-bold hover:cursor-pointer'
                        onClick={copyPassword}>
                            {copied ? <FaClipboardCheck size={30} /> : <FaRegClipboard size={30} />}
                    </button> : ""}
                </div>


                <div className='flex flex-col gap-2 font-bold'>


                    <div className='flex justify-between '>
                        <label htmlFor="">Password Length : </label>
                        <input
                            onChange={(e) => (setPassLength(Number(e.target.value)))} value={passLength} max={26} min={8}
                            className='border bg-white rounded-3xl text-center w-15 mx-2' type="number" />
                    </div>


                    <div className='flex justify-between mt-2 mr-4'>
                        <label htmlFor="">Add UpperCase Letters : </label>
                        <input
                            onChange={(e) => (setUpCase(e.target.checked))}
                            className="size-5 hover:cursor-pointer" type="checkbox" name="" id="" />
                    </div>

                    <div className='flex justify-between mt-2 mr-4'>
                        <label htmlFor="">Add lowerCase Letters : </label>
                        <input
                            onChange={(e) => (setLowCase(e.target.checked))}
                            className="size-5 hover:cursor-pointer" type="checkbox" name="" id="" />
                    </div>

                    <div className='flex justify-between mt-2 mr-4'>
                        <label htmlFor="">Includes Number : </label>
                        <input
                            onChange={(e) => (setNum(e.target.checked))}
                            className="size-5 hover:cursor-pointer" type="checkbox" name="" id="" />
                    </div>

                    <div className='flex justify-between mt-2 mr-4'>
                        <label htmlFor="">Includes Symbols : </label>
                        <input
                            onChange={(e) => (setChar(e.target.checked))}
                            className="size-5 hover:cursor-pointer" type="checkbox" name="" id="" />
                    </div>

                    <button
                        onClick={() => (createPassword())}
                        className='border font-serif rounded-3xl mt-5 text-2xl bg-blue-600 hover:bg-blue-800 transition-all hover:cursor-pointer  text-white p-1 mb-4'>Generate Password</button>
                </div>
            </div>
            <div className='mt-8'>Made with ❤️ by <a 
            className='text-blue-600 font-bold'
            target='_blank'
            href="https://www.linkedin.com/in/stymrj">Satyam Raj</a></div>

            <Toaster position='top-center'/>

        </div>
    )
}



export default Password