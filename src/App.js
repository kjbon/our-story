import "./App.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import Flag from 'react-world-flags'

const a = <Flag code="DE" />

function App() {
  return (
    <div className="Container">
      <VerticalTimeline animate={false} lineColor="#8CC0DE">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016/9/10"
          // iconStyle={{ background: "#BAD7E9", color: "#fff" }}
          icon={<Flag code="DE" />}
        >
          <h3 className="vertical-timeline-element-title">在德國相遇</h3>
            <p className="content">
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          <img
            className="image"
            src="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016/9/10"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">決定再一起</h3>
          <p className="content">
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016/9/10"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">第一次下廚</h3>
          <p className="content">
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016/9/10"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">回台灣生活</h3>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016/9/10"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">
            高雄與台北的遠距離
          </h3>
            <p className="content">
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016/9/10"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">故宮博物院當打雜</h3>
          <p className="content">
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016/9/10"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">
            同居在3坪大的西門套房
          </h3>
          <p className="content">
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016/9/10"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">
            同居在3坪大的西門套房
          </h3>
          <p className="content">
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016/9/10"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">搬到內湖</h3>
          <p className="content">
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016/9/10"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">疫情爆發</h3>
          <p className="content">
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016/9/10"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">求婚</h3>
          <p className="content">
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016/9/10"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">拍婚照</h3>
          <p className="content">
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016/9/10"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">雙方家長相見歡</h3>
          <p className="content">
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016/9/10"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">決定辦婚禮</h3>
          <p className="content">
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016/9/10"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">
            最後還是決定不辦婚禮了
          </h3>
          <p className="content">
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016/9/10"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">吃喜餅就好＾＾</h3>
          <p className="content">
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default App;
