import Head from 'next/head';
import Icon from '../static/icon.png';
import Link from 'next/link';

function Page1() {
  return (
    <div>
      {/*<Link href="/">*/}
      {/*  <a>Home</a>*/}
      {/*</Link>*/}
      <p>this is page1</p>
      <img src={Icon} />
      <Head>
        <title>page1</title>
      </Head>
      <Head>
        <meta name="description" content="hello page1" />
      </Head>
      <style jsx>
        {
          `p {
            color: blue;
            font-size: 18pt;
          }`
        }
      </style>
    </div>
  )
}
export default Page1;
