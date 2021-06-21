import component from "./index";

import less from "!raw-loader!./index.less";
import templateStr from "!raw-loader!./index";

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: "banner0",
    },
    textWrapper: {
      className: "banner0-text-wrapper",
    },
    title: {
      className: "banner0-title",
      children:
        "http://igooana.id:8080/images/igooana_logo.png?cb832e7f606853289c1ccb00af3b4a4a",
    },
    content: {
      className: "banner0-content",
      children: "一Integrated Tools for Data Analysis",
    },
    button: {
      className: "banner0-button",
      children: "Learn More",
    },
  },
};
