import component from "./index";

import less from "!raw-loader!./index.less";
import templateStr from "!raw-loader!./index";

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: "banner2",
    },
    BannerAnim: {
      children: [
        {
          name: "elem0",
          BannerElement: {
            className: "banner-user-elem",
          },
          page: {
            className: "home-page banner2-page",
          },
          textWrapper: {
            className: "banner2-text-wrapper",
          },
          bg: {
            className: "bg bg0",
          },
          title: {
            className: "banner2-title",
            children: "IGOOANA",
          },
          content: {
            className: "banner2-content",
            children: "一Integrated Tools for Data Analysis",
          },
          button: {
            className: "banner2-button",
            children: "Learn More",
          },
        },
      ],
    },
  },
};
