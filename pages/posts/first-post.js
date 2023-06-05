import Link from 'next/link';
import Image from 'next/image';


export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <Image
        src="/images/profile.jpg"
        alt="profile picture"
        width={400}
        height={400}
      />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}