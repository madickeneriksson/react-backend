export const validateText = (elementName: string, value: string, minLength:number= 2 ) => {
    if (value.length == 0)
        return `${elementName} A name is required`
    else if (value.length < minLength)
        return`${elementName} Must contain at least ${minLength} characters`
    else
        return ''
}

export const validateEmail = (elementName: string, value: string, regEx: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) => {
    if (value.length == 0)
    return `${elementName} A name is required`
    else if (!regEx.test(value))
    return `${elementName} Must be a valid email address` 
    else
        return ''
}

// import { IErrors } from "../sections/ContactFormSection"
// export const submitData = async (url:string, method:string, data:any, contentType= 'application/json' ) => {
    
//     const res = await fetch(url, {
//         method: method,
//         headers: {
//         'Content-Type': contentType
//         },
//         body: data
//     })

//         if (res.status === 200) {
//             return true
//         }
//             return false
//   }
//   export interface Ivalidate {
//     name?: string |null;
//     email?: string |null;
//     comments?: string |null;
//   }

//   interface IForm {
//     name: string
//     email: string
//     comments: string
//   }

// export const validate = (e: any, form: IForm | null) => {
//     let errors : IErrors = { name :null, email: null, comments:null }
    
//     if (e.type === 'submit') {
//      errors.name = validate_name(form!.name)
//      errors.email = validate_email(form!.email)
//      errors.comments = validate_comments(form!.comments)
 
//     } else {
//          const {id, value} = e.target
//          switch(id) {
//              case 'name':
//                  errors = {...errors, [id]:validate_name(value)}
//                  break;
//              case 'email':
//                 errors = {...errors, [id]:validate_email(value)}
//                 break;
//              case 'comments':
//                 errors = {...errors, [id]:validate_comments(value)}
//                 break;
//          }
//     }
//  }
 
//  const validate_name = (value:string) => {
//      if (!value)
//          return 'A name is required'
//      else if (value.length < 2)
//          return 'Must be a valid name'
//      else
//          return null
//  }
 
//  const validate_email = (value:string) => {
//      const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     
//      if (!value)
//          return 'An email address is required'
//      else if (!regex_email.test(value))
//          return 'Must be a valid email address'
//      else
//          return null
//  }
 
//  const validate_comments = (value:string) => {
//      if (!value)
//          return 'A comment is required'
//      else if (value.length < 5)
//          return 'Your comment must be at least 5 characters long'
//      else
//          return null
//  }