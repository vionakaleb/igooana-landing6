import component from "./index";

import less from "!raw-loader!./index.less";
import templateStr from "!raw-loader!./index";

const getBlock = (children) => ({
  name: children.name,
  className: "content3-block",
  md: 8,
  xs: 24,
  children: {
    icon: {
      className: "content3-icon",
      children: children.icon,
    },
    textWrapper: {
      className: "content3-text",
    },
    title: {
      className: "content3-title",
      children: children.title,
    },
    content: {
      className: "content3-content",
      children: children.content,
    },
  },
});

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: "home-page-wrapper content3-wrapper",
    },
    page: {
      className: "home-page content3",
    },
    OverPack: {
      playScale: 0.3,
    },
    titleWrapper: {
      className: "title-wrapper",
      children: [
        {
          name: "title",
          children: "SELLING POINT",
          className: "title-h1",
        },
        {
          name: "content",
          className: "title-content",
          children:
            "Reliable in managing manpower, Big Data retails (GT & MT) with 100k valid retail databases, advance knowledge selling and marketing product, Pasar Jaya acquisition program, supported by the biggest BTL Agency in Indonesia.",
        },
      ],
    },
    block: {
      className: "content3-block-wrapper",
      children: [
        // getBlock({
        //   icon: "https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png",
        //   title: "Multidisciplinary Organization",
        //   content:
        //     "We are a national multidisciplinary organization allowing us to combine marketing and activation capability expertise into ONE team ensuring a full service Supply Chain & Operations offering and enabling a wide perspective on industry benchmarks and innovation.",
        //   name: "block0",
        // }),
        getBlock({
          icon: "https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png",
          title: "Collaborative Work Style",
          content:
            "We are recognised for our collaborative work style. We do not deploy mass produced “one size fits all” methods. Instead we tailor our methodologies and tools precisely to the needs of our clients so that they serve as real accelerators to analysis and implementation.",
          name: "block1",
        }),
        getBlock({
          icon: "https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png",
          title: "Helping Clients",
          content:
            "We differentiate ourselves by our ability to execute on the advice we provide. We typically help our clients to implement until true benefits are realised and are sustainably embedded in the organisation.",
          name: "block2",
        }),
        getBlock({
          icon: "https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png",
          title: "Strategic Partnership",
          content:
            "We have a strategic partnership with the Indolima (one of Indonesian biggest BTL AGENCY) with access to an extensive network of Indonesia nations wide.",
          name: "block3",
        }),
        // getBlock({
        //   icon: 'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
        //   title: '分布式中间件',
        //   content: '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
        //   name: 'block4',
        // }),
        // getBlock({
        //   icon: 'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
        //   title: '大数据',
        //   content: '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
        //   name: 'block5',
        // }),
      ],
    },
  },
};
