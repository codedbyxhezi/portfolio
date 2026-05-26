import Image from "next/image";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.logoWrap}>
        <Image
          src="/images/zemax-logo.png"
          alt="Zemax Digital Logo"
          width={92}
          height={92}
          className={styles.logo}
        />
        <span className={styles.ring} />
      </div>

      <p>Lädt...</p>
    </div>
  );
}