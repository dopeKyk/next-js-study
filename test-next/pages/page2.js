import { callApi } from '../src/api';
import Link from 'next/link';
import Router from 'next/router'

class Page2 extends React.Component {
  static async getInitialProps(obj) {
    const text = obj.query.text || 'none';
    const data = await callApi();
    return { text, data };
  }
  onClick = () => {
    Router.push('/')
  }
  render() {
    const { text, data } = this.props;
    return (
      <div>
        <button onClick={this.onClick}>Home으로 이동</button>
        {/*<Link href="/">*/}
        {/*  <a>Home</a>*/}
        {/*</Link>*/}
        <p>this is page2</p>
        <p>{`text: ${text}`}</p>
        <p>{`data: ${data}`}</p>
      </div>
    )
  }
}
export default Page2;
