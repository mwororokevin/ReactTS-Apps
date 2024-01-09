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
        <label className="w-[130px] capitalize font-bold text-silver border-0 mb-12">
          <select
            className="bg-[#ffffff00] capitalize w-[100%]"
            name={backgroundColor}
            onChange={onChange}
          >
            {colorConstants.map((option) => (
              <option
                key={option.id}
                value={option.value}
                className="bg-white text-[#333] h-max w-max font-bold cursor py-4 px-6 border-0"
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
