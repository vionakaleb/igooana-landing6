import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
/* replace-start */
import './index.less';
/* replace-end */

function Content1(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const animType = {
    queue: isMobile ? 'bottom' : 'right',
    one: isMobile ? {
      scaleY: '+=0.3', opacity: 0, type: 'from', ease: 'easeOutQuad',
    }
      : {
        x: '-=30', opacity: 0, type: 'from', ease: 'easeOutQuad',
      },
  };
  return (
    <div
      {...tagProps}
      {...dataSource.wrapper}
      style={{backgroundColor: '#5FC19F'}}
    >
      <OverPack
        {...dataSource.OverPack}
        component={Row}
        /* replace-start */
        data-edit="Row,OverPack"
      /* replace-end */
      >
        <TweenOne
          key="img"
          animation={animType.one}
          resetStyle
          {...dataSource.imgWrapper}
          component={Col}
          componentProps={{ md: dataSource.imgWrapper.md, xs: dataSource.imgWrapper.xs }}
          /* replace-start */
          data-edit="Col"
        /* replace-end */
        >
          <span
            {...dataSource.img}
          >
            <img src={dataSource.img.children} width="100%" alt="img" />
          </span>
        </TweenOne>
        <QueueAnim
          key="text"
          type={animType.queue}
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          {...dataSource.textWrapper}
          component={Col}
          componentProps={{ md: dataSource.textWrapper.md, xs: dataSource.textWrapper.xs }}
          /* replace-start */
          data-edit="Col"
        /* replace-end */
        >
          <h2 key="h1" {...dataSource.title}>
            {
              /* replace-start-value = dataSource.title.children */
              React.createElement('span', { dangerouslySetInnerHTML: { __html: dataSource.title.children } })
              /* replace-end-value */
            }
          </h2>
          <div key="p" {...dataSource.content}>
            {
              /* replace-start-value = dataSource.content.children */
              React.createElement('span', { dangerouslySetInnerHTML: { __html: dataSource.content.children } })
              /* replace-end-value */
            }
          </div>
        </QueueAnim>
      </OverPack>
    </div>
  );
}

export default Content1;
