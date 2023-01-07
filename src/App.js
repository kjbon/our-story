import "./App.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { CiCalendarDate } from "react-icons/ci";
import { GiCookingPot, GiShakingHands, GiGlassCelebration, GiCookie, GiSeatedMouse } from "react-icons/gi";
import { ImAirplane } from "react-icons/im";
import { SiHappycow } from "react-icons/si";
import { GiFat } from "react-icons/gi";
import { FaPeopleCarry, FaSlideshare, FaRunning } from "react-icons/fa";
import { TbFaceMask } from "react-icons/tb";
import { MdFamilyRestroom } from "react-icons/md";






import "react-vertical-timeline-component/style.min.css";

function App() {
  return (
    <div className="Container">
      <VerticalTimeline animate={true} lineColor="#8CC0DE">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="2016/9/10"
          iconStyle={{ background: "#EAC7C7", color: "#fff"}}
          icon={<CiCalendarDate />}
        >
          <h3 className="vertical-timeline-element-title">我們相遇</h3>
            <p className="content">
              放一句浪漫的德文
            </p>
          <img
            className="image"
            src="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#F8EDE3", color: "black" }}
        // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
        date="2016/9/10"
        iconStyle={{ background: "#EAC7C7", color: "#fff"}}
        icon={<GiCookingPot />}
      >
        <h3 className="vertical-timeline-element-title">第一次下廚：醬油滷雞腿</h3>
        <p className="content">
            食譜：用電鍋滷雞腿，把雞腿洗淨，把整整兩罐醬油到倒電鍋，另外還加了冰糖跟水、少許鹽巴提味。
        </p>
      </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="2016/9/10"
          iconStyle={{ background: "#EAC7C7", color: "#fff"}}
          icon={<GiShakingHands />}
        >
          <h3 className="vertical-timeline-element-title">開始交往</h3>
          <p className="content">
          <img
            className="image"
            src="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
          />
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="2016/9/10"
          iconStyle={{ background: "#EAC7C7", color: "#fff"}}
          icon={<ImAirplane />}
        >
          <h3 className="vertical-timeline-element-title">回台灣</h3>
          <p>行李超重？簽證過期？</p>
          <img
            className="image"
            src="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="2016/9/10"
          iconStyle={{ background: "#EAC7C7", color: "#fff"}}
          icon={<SiHappycow />}
        >
          <h3 className="vertical-timeline-element-title">故宮南院吉祥物4ni?</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="2016/9/10"
          iconStyle={{ background: "#EAC7C7", color: "#fff"}}
          icon={<GiFat />}
        >
          <h3 className="vertical-timeline-element-title">
            4坪住兩個胖子？
          </h3>
          <p className="content">
              猜猜在西門町住這樣多少錢？
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="2016/9/10"
          iconStyle={{ background: "#EAC7C7", color: "#fff"}}
          icon={<FaPeopleCarry />}
        >
          <h3 className="vertical-timeline-element-title">改住內湖了啦！</h3>
          <p className="content">
            終於有地方走路了
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="2016/9/10"
          iconStyle={{ background: "#EAC7C7", color: "#fff"}}
          icon={<GiSeatedMouse />}
        >
          <h3 className="vertical-timeline-element-title">2020 HAPPY NEW YEAR!!!</h3>
          <p className="content">
            鼠年行大運！鼠錢鼠不完！
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="2016/9/10"
          iconStyle={{ background: "#EAC7C7", color: "#fff"}}
          icon={<TbFaceMask />}
        >
          <h3 className="vertical-timeline-element-title">疫情大爆發</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="2016/9/10"
          iconStyle={{ background: "#EAC7C7", color: "#fff"}}
          icon={<FaSlideshare />}
        >
          <h3 className="vertical-timeline-element-title">求婚 v.s. 被求婚</h3>
          <p className="content">
              結果定情曲播錯首!?
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="2016/9/10"
          iconStyle={{ background: "#EAC7C7", color: "#fff"}}
          icon={<FaRunning />}
        >
          <h3 className="vertical-timeline-element-title">鮑郁瑾生日當天跑去登記結婚</h3>
          <p className="content">
              2021/11/30
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="2016/9/10"
          iconStyle={{ background: "#EAC7C7", color: "#fff"}}
          icon={<MdFamilyRestroom />}
        >
          <h3 className="vertical-timeline-element-title">雙方家長此生首度相見</h3>
          <p className="content">
            感謝爸爸媽媽 * 2 與哥哥姊姊的支持
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F8EDE3", color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="2016/9/10"
          iconStyle={{ background: "#EAC7C7", color: "#fff"}}
          icon={<GiCookie />}
        >
          <h3 className="vertical-timeline-element-title">我們結婚一週年，請大家吃喜餅 </h3>
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
