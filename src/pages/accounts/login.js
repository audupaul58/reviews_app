import React from 'react'
import styles from './login.module.scss';
import { useRouter } from 'next/router';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import Link from 'next/link';
const Login = () => {

  const {register, handleSubmit} = useForm();

  const submitForm = async (data)=>{
    console.log(data);
   const payload = {
        username: data.username,
        password: data.password,   
   }

   console.log('payload', payload)
    await axios.post(baseUrl, payload)
    .then(res =>{
        console.log(res.data)
        router.push('/')
      })
      .catch(err =>{
        console.log(err.message)
      })
}

  return (
    <section className={styles.LogCont}>
     <h3>Login</h3>
     <div className={styles.innerCon}>
     <form className={styles.formInput} onClick={handleSubmit(submitForm)}>
          <input type="text" name="username" {...register('username')} placeholder="Username" required className={styles.items}/>
          <input type="password" name="password" {...register('password')} placeholder="Password" required className={styles.items}/>
          <button ><strong>Login</strong></button >

          <small>Dont have an Account? <Link href={'/accounts/register/'} >SignUp</Link></small>
      </form>
      </div>
      </section>
  )
}

export default Login