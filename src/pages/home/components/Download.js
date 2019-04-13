import React, { Component, PureComponent } from "react";
import { DownloadWrapper } from '../style'

export default class Download extends PureComponent {
  render () {
    return <DownloadWrapper>
      <div className="img">
        <img alt="qr" src="https://i.loli.net/2019/04/13/5cb197671a716.png" /></div>
      <div className="info">
        <div className="title">下载简书手机App ></div>
        <div className="description">随时随地发现和创作内容</div>
      </div>
    </DownloadWrapper>;
  }
}
