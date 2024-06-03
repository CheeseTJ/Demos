const e = React.createElement;
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  componentDidMount() {
    console.log("组件挂载");
    console.log(window.iS, 8);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("组件更新");
  }
  componentWillUnmount() {
    console.log("组件卸载");
  }
  componentDidCatch(error, errorInfo) {
    console.log("组件错误捕获");
  }
  render() {
    if (this.state.liked) {
      return "You liked this.";
    }
    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Like",
    );
  }
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
