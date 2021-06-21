import component from "./index";

import less from "!raw-loader!./index.less";
import templateStr from "!raw-loader!./index";

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: "header0 home-page-wrapper",
    },
    page: {
      className: "home-page",
    },
    logo: {
      className: "header0-logo",
      children:
        "http://igooana.id:8080/images/igooana_logo.png?cb832e7f606853289c1ccb00af3b4a4a",
    },
    Menu: {
      className: "header0-menu",
      children: [
        // {
        //   name: "item0",
        //   className: "header0-item",
        //   children: {
        //     href: "#",
        //     children: [
        //       {
        //         children: "Dropdown",
        //         name: "text",
        //       },
        //     ],
        //   },
        //   subItem: [
        //     {
        //       name: "sub0",
        //       className: "item-sub",
        //       children: {
        //         className: "item-sub-item",
        //         children: [
        //           {
        //             name: "image0",
        //             className: "item-image",
        //             children:
        //               "https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg",
        //           },
        //           {
        //             name: "title",
        //             className: "item-title",
        //             children: "IGOOANA",
        //           },
        //           {
        //             name: "content",
        //             className: "item-content",
        //             children: "Website",
        //           },
        //         ],
        //       },
        //     },
        //     {
        //       name: "sub1",
        //       className: "item-sub",
        //       children: {
        //         className: "item-sub-item",
        //         children: [
        //           {
        //             name: "image0",
        //             className: "item-image",
        //             children:
        //               "https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg",
        //           },
        //           {
        //             name: "title",
        //             className: "item-title",
        //             children: "IGOOANA",
        //           },
        //           {
        //             name: "content",
        //             className: "item-content",
        //             children: "企业级 UI 设计体系",
        //           },
        //         ],
        //       },
        //     },
        //   ],
        // },
        {
          name: "item1",
          className: "header0-item",
          children: {
            href: "http://igooana.id:8080/login",
            children: [
              {
                children: "IGOOANA Website",
                name: "text",
              },
            ],
          },
        },
        // {
        //   name: "item2",
        //   className: "header0-item",
        //   children: {
        //     href: "#",
        //     children: [
        //       {
        //         children: "Menu2",
        //         name: "text",
        //       },
        //     ],
        //   },
        // },
        // {
        //   name: "item3",
        //   className: "header0-item",
        //   children: {
        //     href: "#",
        //     children: [
        //       {
        //         children: "Menu3",
        //         name: "text",
        //       },
        //     ],
        //   },
        // },
      ],
    },
    mobileMenu: {
      className: "header0-mobile-menu",
    },
  },
};
