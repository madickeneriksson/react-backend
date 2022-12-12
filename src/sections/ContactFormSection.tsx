import React, { useState } from 'react'
import AlertNotification from '../components/AlertNotification'
import UserContext, { IUserContext } from '../context/UserContext'
import { validateEmail, validateText } from '../utilities/validation'

interface ContactFormSectionDataType {
  name: string
  email: string
  comments: string
}


const ContactFormSection: React.FC = () => {

  const DEFAULT_VALUES: ContactFormSectionDataType = {name: '', email: '', comments: ''}
  const [formData, setFormData] = useState<ContactFormSectionDataType>(DEFAULT_VALUES)
  const [errors, setErrors] = useState<ContactFormSectionDataType>(DEFAULT_VALUES)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [failedSubmit, setFailedSubmit] = useState<boolean>(false)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target
    setFormData({...formData, [id]: value})

    if (id === 'name')
    setErrors({...errors, [id]: validateText(id, value)})

    if (id === 'email')
    setErrors({...errors, [id]: validateEmail(id, value)})
  }

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {id, value} = e.target

    if (id === 'comments')
    setErrors({...errors, [id]: validateText(id, value)}) 
  }
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(false)
    setFailedSubmit(false)

    if (formData.name !== '' && formData.email !== '' && formData.comments !== '')
    if (errors.name === '' && errors.email === '' && errors.comments === '') {

      const res = await fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
        method: 'post',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (res.status === 200) {
        setSubmitted(true)
        setFormData (DEFAULT_VALUES)
      } else {
        setSubmitted(false)
        setFailedSubmit(true)
      }
    }
  }




  return (
    <section className="contact-form mt-5">
      <div className="container">
        
        { submitted ? (<AlertNotification alertType="sucess" title="Thank you for your comment." text="We will contact you as soon as possible." />) : (<></>)}
        { failedSubmit? (<AlertNotification alertType="danger" title="Something went wrong." text="We couldn't submit your comment right now." />) : (<></>)}
{/*          
         {create} istället för handlesumbit?  */}

        <h2>Come in Contact with Us</h2>
        <form onSubmit={handleSubmit} noValidate> 
          <div>
            <input id="name" className={(errors.name ? 'error': '')} value={formData.name} onChange={(e) => handleChange(e)} type="text" placeholder="Your Name" />
            <div className="errorMessage">{errors.name}</div>
          </div>
          <div>
            <input id="email" className={(errors.email ? 'error': '')} value={formData.email} onChange={(e) => handleChange(e)} type="email" placeholder="Your Mail" />
            <div className="errorMessage">{errors.email}</div>
          </div>
          <div className="textarea">
            <textarea id="comments" className={(errors.comments ? 'error': '')} style={(errors.comments ? {border: '1px solid #FF7373'}: {} )} value={formData.comments} onChange={(e) => handleTextAreaChange(e)} placeholder="Comments"></textarea>
            <div className="errorMessage">{errors.comments}</div>
          </div>
          
          <button type="submit" className="btn-theme">
              <span className="corner-topLeft"></span>
              <span className="corner-bottomRight"></span>
              Post Comments
        </button>  
        </form>    
      </div>
    </section>
  )

  }
export default ContactFormSection