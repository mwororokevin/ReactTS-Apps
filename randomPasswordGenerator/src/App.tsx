import { useState } from 'react'

function App() {
  const [uppercase, setUppercase] = useState(false)
  const [passwordLength, setPasswordLength] = useState("8")
  const [number, setNumber] = useState(false)
  const [specialCharacters, setSpecialCharacters] = useState(false)
  const [randomPassword, setRandomPassword] = useState("")

  const generateRandomPassword = () => {
    let password: string = ""

    let passwordStringPool = "abcdefghijklmnopqrstuvwxyz"

    if (uppercase) passwordStringPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (number) passwordStringPool += "0123456789"

    if (specialCharacters) passwordStringPool += "~!@#$%^&*(\">?<.,`)}{[]|':;"

    for (let i: number = 0; i < Number(passwordLength); i++) {
      const randomNumber: number = Math.floor(Math.random() * passwordStringPool.length)
      password += passwordStringPool.charAt(randomNumber)
    }

    setRandomPassword(password)
  }

  const copyRandomPassword = () => {

  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col py-8 w-10/12 md:w-[350px] mx-auto">
        <h1 className="font-bold text-xl text-center mb-4">
          Random Password Generator
        </h1>
        <div className="flex flex-row my-4">
          <input
            type="text"
            name="randomPassword"
            value={randomPassword}
            placeholder='Random Password'
            readOnly
            className="border-2 border-black w-10/12 border-solid p-1 rounded-md"
          />
          <button
            className="w-2/12 border-0 bg-black text-[wheat] cursor-pointer font-bold tracking-[2px] rounded-md"
            onClick={copyRandomPassword}
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col">
          <div className=" mt-2 mb-2">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={() => { setUppercase(!uppercase) }}
              className="h-[18px] w-[18px] text-blue-600 bg-gray-100 border-red-100 rounded-md"
            />
            <label className="mr-4 ml-2 font-bold text-lg">Uppercase</label>
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              checked={number}
              onChange={() => { setNumber(!number) }}
              className="h-[18px] w-[18px] text-blue-600 bg-gray-100 border-red-100 rounded-md"
            />
            <label className="mr-4 ml-2 font-bold text-lg">Number</label>
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              checked={specialCharacters}
              onChange={() => { setSpecialCharacters(!specialCharacters) }}
              className="h-[18px] w-[18px] text-blue-600 bg-gray-100 border-red-100 rounded-md"
            />
            <label className="mr-4 ml-2 font-bold text-lg">Special Characters</label>
          </div>
          <div className="mb-2">
            <input
              type="number"
              min="8"
              max="25"
              value={passwordLength}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPasswordLength(e.target.value) }}
              className="text-blue-600 bg-gray-100 rounded-[5px] border-2 border-solid border-black px-1"
            />
            <label className="mr-4 ml-2 font-bold text-lg">Password Length</label>
          </div>
        </div>
        <div>
          <button
            className="bg-black text-white font-bold cursor-pointer mt-4 px-3 py-4 tracking-[2px] rounded-md"
            onClick={generateRandomPassword}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
