import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'royalblue',
      tag: 'Satisfied'
    },

    {
      img: 'https://plus.unsplash.com/premium_photo-1661284836545-3a6ec65fcffc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fFdvcmt8ZW58MHx8MHx8fDA%3D',
      intro: '',
      color: 'lightseagreen',
      tag: 'Underserved'
    },

    {
      img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro: '',
      color: 'orange',
      tag: 'Underbanked'
    },

    {
      img: 'https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro: '',
      color: 'pink',
      tag: 'Understanding'
    },
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
