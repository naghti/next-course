import Link from "next/link";
import styles from '../styles/link.module.css'
export default function ({text,href}){
    return (
        <Link href={href} className={styles.link}>
            <p>
                {text}
            </p>
        </Link>
    )
}