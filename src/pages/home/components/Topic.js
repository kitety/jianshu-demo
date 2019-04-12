import React from "react";
import { TopicWrapper } from "../style";
import { connect } from "react-redux";
class Topic extends React.PureComponent {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {list.map(item => {
          return (
            <div className="topic-item" key={item.get("id")}>
              <img src={item.get("imgUrl")} alt={item.get("title")} />
              <span>{item.get("title")}</span>
            </div>
          );
        })}
      </TopicWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    list: state.getIn(["homeReducer", "listItem"])
  };
};
export default connect(
  mapStateToProps,
  null
)(Topic);
