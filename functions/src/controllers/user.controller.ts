// import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default {
  login: async (params: { email: any; password: any }) => {
    const { email, password } = params
    const emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const passwordRegex = /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/

    if (!email) {
      throw Error('Please enter an email!')
    }
    if(!emailRegex.test(email)){
        throw Error('Please enter a valid email!') 
    }
    if (!password) {
      throw Error('Please enter a password!')
    }
    if(!passwordRegex.test(password)){
        throw Error('Password must be 8 characters long and must contain an upper-case letter, number and a character!')
    }

    //Check if email exists on database(FIRESTORE)
    //Compare passwords with bcrypt
    //If email exists we assign token with user id not with email in this case it's just done for demonstration

    const token = jwt.sign(email, 'notmyaccount')
    return {
      token,
    }
  },
}
