import React from 'react'
import { createClient } from '@supabase/supabase-js';
// import tick from '../assets/Images/tick.json'
import tick2 from '../assets/Images/tick2.json'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANNON_KEY);

const SupabaseReg = () => {
    const [error, setError] = React.useState(false)
    const [success, setSuccess] = React.useState(false)
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        diet: 'veg',
        prof: 'student',
        github: '',
        approved: false
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = async() => {
        try {
            if(!formData.name || !formData.email || !formData.diet){  
                console.log(formData)
                setError(true)
                return
            }
            console.log(formData)
            const { data, error } = await supabase
                .from('registration')
                .insert(formData)
                .select()
            if(data){
                setSuccess(true)
                setError(false)
            }
        } catch (error) {
            console.log(error)
        }
      }
  return (
    <div id="register" className="bg-white h-full py-10 px-10 md:px-40 ">
        <h1 className='ubuntu text-black md:text-5xl text-3xl text-center font-semibold'>Registration</h1>
        {success ? 
        <div className='flex justify-center'>
            <Player
            autoplay
            keepLastFrame
            src={tick2}
            style={{ height: '300px', width: '300px' }}
            >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
        </div>
        : 
        <div className="flex flex-col m-auto">
            <label htmlFor="" className='text-black ubuntu font-semibold my-5'>Name <span className='text-red-500'>*</span></label>
            <input name="name" onChange={handleInputChange} type="text" className="pl-3 bg-gray-200 py-2 rounded-[5px] text-zinc-900 my-3 w-full" placeholder="Enter your name" />

            <label htmlFor="" className='text-black ubuntu font-semibold my-5'>Email <span className='text-red-500'>*</span></label>
            <input name="email" onChange={handleInputChange} type="email" className="pl-3 bg-gray-200 py-2 rounded-[5px] text-zinc-900 my-3 w-full" placeholder="Enter your email" />

            <label htmlFor="" className='text-black ubuntu font-semibold my-5'>Phone</label>
            <input name="phone" onChange={handleInputChange} type="text" className="pl-3 bg-gray-200 py-2 rounded-[5px] text-zinc-900 my-3 w-full" placeholder="Enter your phone" />

            <label htmlFor="" className='text-black ubuntu font-semibold my-5'>Your Dietary Preference <span className='text-red-500'>*</span></label>
            <select name="diet" onChange={handleInputChange} className="pl-3 bg-gray-200 py-2 rounded-[5px] text-zinc-900 my-3 w-full">
                <option value="veg" selected>Veg</option>
                <option value="non-veg">Non-Veg</option>
            </select>

            <label htmlFor="" className='text-black ubuntu font-semibold my-5'>Profession </label>
            <select name="prof" onChange={handleInputChange} className="pl-3 bg-gray-200 py-2 rounded-[5px] text-zinc-900 my-3 w-full">
                <option value="student" selected>Student</option>
                {/* <option value="open-source-contributor">Open Source Contributor</option> */}
                <option value="working">Working Professional</option>
                {/* <option value="other">Other</option> */}
            </select>

            <label htmlFor="" className='text-black ubuntu font-semibold my-5'>GitHub Profile URL </label>
            <input name="github" onChange={handleInputChange} type="url" className="pl-3 bg-gray-200 py-2 rounded-[5px] text-zinc-900 my-3 w-full" placeholder="https://github.com/<username>" />

            {error && <p className='text-red-500 ubuntu font-semibold text-lg text-center my-5'>Sorry! The registrations have been closed :(</p>}
            <button onClick={() => setError(true)} className='bg-[#a80030] hover:bg-rose-700 px-5 py-3 text-white ubuntu font-bold text-center my-10'>Register</button>
        </div>}
    </div>
  )
}

export default SupabaseReg