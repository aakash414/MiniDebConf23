import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCircleDot } from 'react-icons/fa6';

const Timeline = () => {

  const timelineData1 = [
    {
      type: 'work',
      date: '9AM - 9:10AM',
      title: 'Opening/Welcome',
      subtitle: '',
      description: '',
    },
    {
      type: 'work',
      date: '9:15 AM-10:00 AM',
      title: 'Introduction to Free software',
      subtitle: 'Anish Sheela',
      description: '',
    },
    {
      type: 'work',
      date: '10:00 AM-10:15 AM',
      title: 'Morning break',
      subtitle: '',
      description: '',
    },
    {
      type: 'work',
      date: '10:15 AM-11:00 AM',
      title: 'Introduction to Debian',
      subtitle: 'Sruthi Chandran',
      description: '',
    },
    {
      type: 'work',
      date: '11:15 AM-12:00 AM',
      title: 'IBoF on Free Software and Open source software.',
      subtitle: '',
      description: '',
    },
    {
      type: 'work',
      date: '12:15 AM-12:30 AM',
      title: 'Free software alternatives for proprietary tools',
      subtitle: 'Mujeeb Rahman K',
      description: '',
    },
    {
      type: 'work',
      date: '12:40 AM-1:00 AM',
      title: 'Fun and Games',
      subtitle: '',
      description: '',
    },
    {
      type: 'work',
      date: '1:00 PM-2:00 PM',
      title: 'Lunch',
      subtitle: '',
      description: '',
    },
    {
      type: 'work',
      date: '2.00 PM to 2.45 PM',
      title: 'FOSS For Us ',
      subtitle: 'Vishal Arya',
      description: '',
    },
    {
      type: 'work',
      date: '3.00 PM to 3.30',
      title: 'Introduction to Mobian',
      subtitle: 'Pirate Praveen',
      description: '',
    },
    {
      type: 'work',
      date: '3.45 PM to 4.00 PM',
      title: 'Closing ceremony',
      subtitle: '',
      description: '',
    },
  ];

  const timelineData2 = [
    {
      type: 'work',
      date: '2.00 PM to 3.00 PM ',
      title: 'Workshop - Basics of Shell scripting in Linux',
      subtitle: 'Ranjith Siji, Athul RT',
      description: '',
    },
    {
      type: 'work',
      date: '3.00 PM to 3.45 PM',
      title: 'Building a CLI Tool using Python',
      subtitle: 'Athul RT',
      description: '',
    },
    // Add more timeline elements as needed
  ];


  return (
    <div className='flex flex-col justify-center items-center py-16 bgpattern'>
      <h1 className='font-bold text-5xl text-rose-900'>Event timeline</h1>
        <div className='flex flex-col justify-between items-start mt-10 w-full px-38 gap-10 mx-8 md:flex-row'>
          <div className='bg-white w-full flex justify-center items-center rounded-xl shadow-xl border-gray-400 flex-col'>
            <h1 className='font-bold text-3xl pt-10 text-gray-900'>Seminar Hall</h1>
            <VerticalTimeline className='pt-10' layout="1-column-left">
            {timelineData1.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className={`vertical-timeline-element--${item.type}`}
                contentStyle={{ background: 'rgb(128, 11, 58)', color: '#fff', textAlign: 'left' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(128, 11, 58)' }}
                iconStyle={{ background: 'rgb(128, 11, 58)', color: '#FFFFFF' }}
                icon={<FaCircleDot />}
                >
                <p className="vertical-timeline-element-subtitle !mt-0 ">{item.date}</p>
                <h3 className="vertical-timeline-element-title text-2xl font-bold pt-3 ">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle !text-gray-300">{item.subtitle}</h4>
                <p className='!font-normal'>{item.description}</p>
              </VerticalTimelineElement>
            ))}
            </VerticalTimeline>
          </div>
          <div className='w-full bg-white  flex justify-center items-center rounded-xl  shadow-xl flex-col'> {/* Adjust the mx value to increase or decrease the gap */}
            <h1 className='font-bold text-3xl pt-10 text-gray-900'>SDPK Hall</h1>
            <VerticalTimeline className='pt-10' layout="1-column-left" lineColor='black'>
          {timelineData2.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--${item.type}`}
              contentStyle={{ background: 'rgb(128, 11, 58)', color: '#fff', textAlign: 'left' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(128, 11, 58)' }}
              iconStyle={{ background: 'rgb(128, 11, 58)', color: '#ffffff' }}
              icon={<FaCircleDot/>}
              >
              <p className="vertical-timeline-element-subtitle !mt-0">{item.date}</p>
              <h3 className="vertical-timeline-element-title text-2xl font-bold pt-3">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle !text-gray-300">{item.subtitle}</h4>
              <p className='!font-normal'>{item.description}</p>
            </VerticalTimelineElement>
          ))}
          </VerticalTimeline>
          </div>
    </div>
      </div>
  )
}

export default Timeline