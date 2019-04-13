import { fromJS } from "immutable";
import { constants } from './index'


const defaultState = fromJS({
  title: '内心足够强大是怎么样的感觉',
  content: "<img alt='img' src='https://upload-images.jianshu.io/upload_images/1439852-34b485f26015b797?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp'/><p> 今年四月的时候，母亲给我打电话说，她不在镇上我姐家里住，她回家了。</p>    <p> 其实姐姐也是心疼母亲，才接她去镇上，名义上是照看外孙女，其实并没有太多的事。在家里，母亲忙里忙外，总有干不完的活，但是到镇上照顾外孙女就会轻松很多，早上把外孙女送到学校，她就有了大把属于自己的时间，去见好多年不见的同学，回家看看电视，或者跟我姐一起去逛逛街。自从来到镇上之后，母亲明显变得精神了很多。</p> "
});

const getDetail = (state, action) => {
  const {title,content}=action
  return state.merge({
    title,content
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_DETAIL:
      return getDetail(state, action)
    default:
      break;
  }
  return state
}
