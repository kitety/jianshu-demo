import { fromJS } from "immutable";

const nameInitialState = fromJS({
  listItem: [
    {
      id: 1,
      title: "国内文章",
      imgUrl:
        "https://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    },
    {
      id: 2,
      title: "国内文章",
      imgUrl:
        "https://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    },
    {
      id: 3,
      title: "国内文章",
      imgUrl:
        "https://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    },
    {
      id: 4,
      title: "国内文章",
      imgUrl:
        "https://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    }
  ]
});
export default (state = nameInitialState, action) => {
  return state
};
