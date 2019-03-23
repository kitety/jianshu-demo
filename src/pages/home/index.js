import React from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Writer from "./components/Writer";
import Recommend from "./components/Recommend";

const Home = () => {
  return (
    <HomeWrapper>
      <HomeLeft>
        <img
          src="https://upload.jianshu.io/admin_banners/web_images/4620/8ce28ed4656eaa9d606d92c60ba6a04e419cf39b.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          className="banner-img"
          alt="banner"
        />
        <Topic />
        <List />
      </HomeLeft>
      <HomeRight>
        <Recommend />
        <Writer />
      </HomeRight>
    </HomeWrapper>
  );
};

export default Home;
