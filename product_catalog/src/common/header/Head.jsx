import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> 12345678</label>
            <i className='fa fa-envelope'></i>
            <label> abc@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>FAQ"s</label>
            <label>Need Help?</label>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
