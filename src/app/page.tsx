import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
       <h1>This is my home page</h1>
       <Image src={'/image.jpg'} alt='sample image' width={300} height={300}/>
    </div>
  );
}
