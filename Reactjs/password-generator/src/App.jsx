import React, { useCallback, useEffect, useState, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="max-w-md w-full bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-center text-2xl font-semibold text-white mb-4">Password Generator</h2>
        <div className="flex flex-col mb-4">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="password" className="text-lg font-semibold text-white">Your Password:</label>
            <button
              onClick={copyPass}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition duration-300"
            >
              Copy
            </button>
          </div>
          <input
            type="text"
            id="password"
            value={password}
            className="border border-gray-700 rounded-md p-2 text-gray-500"
            readOnly
            ref={passwordRef}
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="length" className="text-lg font-semibold text-white">Length: {length}</label>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-3/4 cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="numberAllowed" className="text-lg font-semibold text-white">Include Numbers</label>
          <input
            type="checkbox"
            id="numberAllowed"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="form-checkbox h-5 w-5 text-blue-600 cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="charAllowed" className="text-lg font-semibold text-white">Include Special Characters</label>
          <input
            type="checkbox"
            id="charAllowed"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className="form-checkbox h-5 w-5 text-blue-600 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
