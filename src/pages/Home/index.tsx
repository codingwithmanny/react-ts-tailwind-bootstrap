// Imports
// ========================================================
import React, { useState } from "react";
import OneColumn from "../../layouts/OneColumn";
import useLocalStorage from "../../hooks/useLocalStorage";

// Main Page
// ========================================================
const Home = () => {
  // State / Props
  const [state, setState] = useState<{ [key: string]: any }>({});
  const { data, setData } = useLocalStorage();

  // Functions
  /**
   * 
   * @param key 
   * @returns 
   */
  const onChangeInput = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [key]: event.target.value
    })
  };

  /**
   * 
   * @param event 
   */
  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData(state);
  };

  // Render / UI
  return <OneColumn>
    <main>
      <div className="py-10">
        <h1 className="text-2xl font-medium mb-8">Home Content</h1>
        <pre className="bg-slate-100 p-8 mb-8"><code>{JSON.stringify(data, null, ' ')}</code></pre>
        <form onSubmit={onSubmitForm}>
          <div className="mb-4">
            <label className="text-sm text-slate-500 block mb-2">Name</label>
            <input className="h-12 px-4 border border-slate-100 rounded" onChange={onChangeInput("name")} value={state?.name ?? ''} type="text" name="name" placeholder="Name" />
          </div>
          <div className="mb-4">
            <button className="bg-slate-800 text-white h-12 px-8 rounded-full" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </main>
  </OneColumn>
}

// Exports
// ========================================================
export default Home;