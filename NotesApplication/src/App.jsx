import React, { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {
  const [title, setTitle] = useState('');

  const [details, setDetails] = useState('');

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    setTitle('')
    setDetails('')
  }


  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}
        className='flex items-start lg:w-1/2 flex-col gap-4 p-10'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>
        {/* Pehla input for heading */}
        <input
          type="text"
          placeholder='Enter Task An Heading'
          className='px-5 py-2 w-full font-medium border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />


        {/* Detailed vala input */}
        <textarea
          type="text"
          placeholder='Write Details here'
          className='h-34 px-5 py-2 w-full font-medium border-2 outline-none rounded'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className='bg-white w-full text-black active:scale-94 font-medium px-5 py-2 outline-none rounded'>Add Notes</button>
      </form>

      <div className='flex-wrap lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-4 mt-4 h-[90%] overflow-auto '>
          {task.map(function (elem, idx) {
            return <div key={idx} className="flex justify-between flex-col items-start relative h-54 w-40 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover rounded-2xl text-black pt-8 pb-4 px-4">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='leading-tight text-xs mt-2 font-semibold text-gray-800'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full bg-red-700 text-white active:scale-94 py-1 text-xs rounded font-bold'>Delete</button>
            </div>
              ;
          })}
        </div>
      </div>
    </div>
  )
}

export default App
