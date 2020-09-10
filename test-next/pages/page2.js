import { callApi } from '../src/api';
import Link from 'next/link';
import Router from 'next/router'

class Page2 extends React.Component {
  static async getInitialProps(obj) {
    const text = obj.query.text || 'none';
    const data = await callApi();
    const { sayHello } = await import('../src/sayHello');
    console.log(sayHello());
    return { text, data };
  }
  onClick = () => {
    // Router.push('/')
    // import('../src/sayHello').then(({ sayHello }) => {
    //   console.log(sayHello());
    // })
  }
  render() {
    const { text, data } = this.props;
    return (
      <div>
        {/*<Link href="/">*/}
        {/*  <a>Home</a>*/}
        {/*</Link>*/}
        <p>this is page2</p>
        <p>{`text: ${text}`}</p>
        <p>{`data: ${data}`}</p>
        {/*<button onClick={this.onClick}>say hello</button>*/}
      </div>
    )
  }
}
export default Page2;
