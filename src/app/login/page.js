'use client'
import {useRouter} from "next/navigation";
import styles from '@/styles/Login.module.css';

export default function Login() {
    const router = useRouter();
    return (
        <div className={styles.wrapper}>
            <div className={styles.formContent}>
                <h1 style={{color: "black"}}>Login</h1>
                <form>
                    <input className={styles.input} type="text" id="username" name="username" placeholder="username"/>
                    <input className={styles.input} type="text" id="password" name="login" placeholder="password"/>
                    <button type="button" className={styles.button} onClick={() => router.push('/')}>Log In</button>
                </form>
            </div>
        </div>
    )
}