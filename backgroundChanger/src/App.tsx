import { useState } from 'react'
import { colorConstants } from './colorConstants'

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white")

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBackgroundColor(e.target.value)
  }

  return (
    <div className="w-screen h-screen flex items-end" style={{ background: backgroundColor }}>
      <div className="w-screen h-20 flex justify-center items-center">
        <label className="w-44 capitalize font-bold text-silver mb-12 border-2 border-solid border-[#ffffff00] focus:border-2 focus:border-white focus:border-solid">
          <select
            className="bg-[#ffffff00] capitalize w-[100%] border-2 border-solid border-white focus:border-2 focus:border-white focus:border-solid"
            name={backgroundColor}
            onChange={onChange}
          >
            {colorConstants.map((option) => (
              <option
                key={option.id}
                value={option.value}
                className="bg-white text-[#333] tracking-[4px] border-2 boder-solid border-[#ffffff00] h-max w-max font-bold cursor py-4 px-6"
                style={{ background: option.value }}
              >
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  )
}

export default App
