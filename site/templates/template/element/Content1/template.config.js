import component from "./index";

import less from "!raw-loader!./index.less";
import templateStr from "!raw-loader!./index";

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: "home-page-wrapper content1-wrapper",
    },
    OverPack: {
      className: "home-page content1",
      playScale: 0.3,
    },
    imgWrapper: {
      className: "content1-img",
      md: 10,
      xs: 24,
    },
    img: {
      children: "https://image.flaticon.com/icons/png/512/3659/3659651.png",
    },
    textWrapper: {
      className: "content1-text",
      md: 14,
      xs: 24,
    },
    title: {
      className: "content1-title",
      children: "SIMPLY AND SIMPLIFY",
    },
    content: {
      className: "content1-content",
      children:
        "IGOOANA dirancang sebagai solusi yang dapat memberikan manfaat bagi mitra kerja untuk mempermudah serta mempercepat proses monitoring dan control project di lapangan.",
    },
  },
};
