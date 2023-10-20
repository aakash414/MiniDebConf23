import React from 'react'
import { createClient } from '@supabase/supabase-js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import tick2 from '../assets/Images/tick2.json'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANNON_KEY);

const Confirmation = () => {
    const [error, setError] = React.useState(false)
    const [success, setSuccess] = React.useState(false)
    const [formData, setFormData] = React.useState({
        email: '',
        confirmation: true
      });
    React.useEffect(() => {
        // const fetchEmails = async() => {
        //     try {
        //         const { data } = await supabase.from("registration").select().limit(75);
        //         const emailData = data.map((item) => item.email)
        //         console.log(emailData)
        //         setEmails(emailData)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
        // fetchEmails()
    }, [])
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    const handleSubmit = async() => {
        try {
            if(!formData.email){  
                console.log(formData)
                setError(true)
                return
            }
            console.log(formData)
            const { data, error } = await supabase
                .from('confirmations')
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
    <>
    <Navbar />
        <div id="confirm" className="bg-white h-full py-10 px-10 md:px-40 ">
            <h1 className='ubuntu text-black md:text-5xl text-3xl text-center font-semibold'>Confirm your seat!</h1>
            {success ? 
            <div className='flex flex-col justify-center'>
                <Player
                autoplay
                keepLastFrame
                src={tick2}
                style={{ height: '300px', width: '300px' }}
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
                <div className='flex flex-col justify-center'>
                    <h1 className='ubuntu text-black md:text-5xl text-3xl text-center font-semibold'>Thank you for confirming your seat!</h1>
                    <h1 className='ubuntu text-black md:text-3xl text-xl text-center font-light my-10'>Make sure to bring your laptops for the event :D</h1>
                    <p className='ubuntu text-black md:text-2xl text-xl text-center font-light my-5'>Venue: NLB Block, School Of Engineering, CUSAT</p>
                    <p className='ubuntu text-black md:text-2xl text-xl text-center font-light my-5'>Date: 21st October 2023</p>
                    <p className='ubuntu text-black md:text-2xl text-xl text-center font-light my-5'>Time: 09:00 AM - 16:00 PM</p>
                </div>
            </div>
            : 
            <div className="flex flex-col m-auto">
                <label htmlFor="" className='text-black ubuntu font-semibold my-5'>Email <span className='font-light'>(use the same mail with which you registered)</span> <span className='text-red-500'>*</span></label>
                <input name="email" onChange={handleInputChange} type="text" className="pl-3 bg-gray-200 py-2 rounded-[5px] text-zinc-900 my-3 w-full" placeholder="Enter your email" />

                <label htmlFor="" className='text-black ubuntu font-semibold my-5'>Will you be attending MiniDebConf? </label>
                <select name="confirmation" onChange={handleInputChange} className="pl-3 bg-gray-200 py-2 rounded-[5px] text-zinc-900 my-3 w-full">
                    <option value={true} selected>Yes</option>
                    <option value={false}>No</option>
                </select>

                {error && <p className='text-red-500 ubuntu font-semibold text-lg text-center my-5'>Sorry! Your email is not present in the list.</p>}
                <button onClick={handleSubmit} className='bg-[#a80030] hover:bg-rose-700 px-5 py-3 text-white ubuntu font-bold text-center my-10'>Submit</button>
            </div>}
        </div>
        <Footer />
    </>
  )
}

export default Confirmation
