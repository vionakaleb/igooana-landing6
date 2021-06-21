import component from "./index";

import less from "!raw-loader!./index.less";
import templateStr from "!raw-loader!./index";

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: "home-page-wrapper content0-wrapper",
    },
    page: {
      className: "home-page content0",
    },
    OverPack: {
      playScale: 0.3,
      className: "",
    },
    titleWrapper: {
      className: "title-wrapper",
      children: [
        {
          name: "title",
          children: "INTEGRATED",
        },
      ],
    },
    childWrapper: {
      className: "content0-block-wrapper",
      children: [
        {
          name: "block0",
          className: "content0-block",
          md: 6,
          xs: 24,
          children: {
            className: "content0-block-item",
            children: [
              {
                name: "image",
                className: "content0-block-icon",
                children:
                  "https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png",
              },
              {
                name: "title",
                className: "content0-block-title",
                children: "MARKET BISNIS ANALISIS",
              },
              {
                name: "content",
                children:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
            ],
          },
        },
        {
          name: "block1",
          className: "content0-block",
          md: 6,
          xs: 24,
          children: {
            className: "content0-block-item",
            children: [
              {
                name: "image",
                className: "content0-block-icon",
                children:
                  "https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png",
              },
              {
                name: "title",
                className: "content0-block-title",
                children: "DISTRIBUTOR SYSTEM",
              },
              {
                name: "content",
                children:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
            ],
          },
        },
        {
          name: "block2",
          className: "content0-block",
          md: 6,
          xs: 24,
          children: {
            className: "content0-block-item",
            children: [
              {
                name: "image",
                className: "content0-block-icon",
                children:
                  "https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png",
              },
              {
                name: "title",
                className: "content0-block-title",
                children: "HR MANAGEMENT",
              },
              {
                name: "content",
                children:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
            ],
          },
        },
        {
          name: "block3",
          className: "content0-block",
          md: 6,
          xs: 24,
          children: {
            className: "content0-block-item",
            children: [
              {
                name: "image",
                className: "content0-block-icon",
                children:
                  "https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png",
              },
              {
                name: "title",
                className: "content0-block-title",
                children: "WAREHOUSE MANAGEMENT",
              },
              {
                name: "content",
                children:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
            ],
          },
        },
      ],
    },
  },
};
