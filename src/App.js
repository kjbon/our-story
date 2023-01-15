import "./App.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CiCalendarDate } from "react-icons/ci";
import { GiCookingPot, GiShakingHands, GiCookie, GiSeatedMouse } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import { SiHappycow } from "react-icons/si";
import { GiFat } from "react-icons/gi";
import { FaPeopleCarry, FaSlideshare, FaRunning } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { TbFaceMask } from "react-icons/tb";
import { MdFamilyRestroom } from "react-icons/md";
import meet from './images/IMG_5902.jpg';
import wedding from './images/FAA00152.jpg';
import cooking from './images/2016.jpg';
import dating from './images/IMG_3066.jpg';
import backtotaiwan from './images/IMG_2098.jpg';
import lucky from './images/IMG_4741.jpg';
import we from './images/IMG_5784.jpg';
import we2 from './images/IMG_6192.jpg';
import we3 from './images/IMG_4916.jpg';
import i1 from './images/1.jpg';
import i2 from './images/2.jpg';
import i3 from './images/3.jpg';
import i5 from './images/5.jpg';
import i6 from './images/6.jpg';
import i8 from './images/8.jpg';
import i9 from './images/9.jpg';


import covid from './images/IMG_9121.jpg';
import ring from './images/IMG_6065.jpg';
import parent from './images/IMG_7820.jpg';
import ccc from './images/ffff.jpg';
import cold from './images/cold.jpg';
import "react-vertical-timeline-component/style.min.css";


function App() {
  const cardColor = '#FFE4E1'
  const iconColor = '#AB382A'
  const lineColor = '#804f42'
  return (
    <div className="Container">
    <div>
      <div id="section01" class="demo">
        <div className="openingTxt">Let's do it!</div>
        <div className="arrow"><IoIosArrowDropdown /></div>
      </div>
    </div>
      
      <VerticalTimeline animate={true} lineColor={lineColor}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: cardColor, color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="September, 2016"
          iconStyle={{ background: iconColor, color: "#fff"}}
          icon={<CiCalendarDate />}
        >
          <h3 className="vertical-timeline-element-title">我們相遇</h3>
            <p className="content">
              Glücklich ist da, wo Du bist Liebling!
            </p>
          <div>
          <img
            className="image"
            src={meet }
          />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: cardColor, color: "black" }}
        // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
        date="October, 2016"
        iconStyle={{ background: iconColor, color: "#fff"}}
        icon={<GiCookingPot />}
      >
        <h3 className="vertical-timeline-element-title">第一次下廚：醬油滷雞腿</h3>
        <p className="content">
            食譜：用電鍋滷雞腿，把雞腿洗淨，把整整兩罐醬油到倒電鍋，另外還加了冰糖跟水、少許鹽巴提味。
        </p>
        <div>
        <img
        className="image"
        src={cooking}
      />
        </div>
      </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: cardColor, color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="November, 2016"
          iconStyle={{ background: iconColor, color: "#fff"}}
          icon={<GiShakingHands />}
        >
          <h3 className="vertical-timeline-element-title">開始交往</h3>
          <div>
            <img
              className="image"
              src={dating}
            />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: cardColor, color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="September, 2017"
          iconStyle={{ background: iconColor, color: "#fff"}}
          icon={<ImAirplane />}
        >
          <h3 className="vertical-timeline-element-title">回台灣</h3>
          <p>行李超重？簽證過期？</p>
          <div>
          <img
            className="image"
            src={backtotaiwan}
          />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: cardColor, color: "black" }}
          date="July, 2018"
          iconStyle={{ background: iconColor, color: "#fff"}}
          icon={<SiHappycow />}
        >
          <h3 className="vertical-timeline-element-title">故宮南院吉祥物4ni?</h3>
          <div>
            <img
              className="image"
              src={lucky}
            />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: cardColor, color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          iconStyle={{ background: iconColor, color: "#fff"}}
          icon={<GiFat />}
        >
          <h3 className="vertical-timeline-element-title">
            在台北打拼的日子
          </h3>
          <p className="content">
            台北好冷
          </p>
          <div>
          <img
          className="image"
          src={cold}
        />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: cardColor, color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          // date="December, 2019"
          iconStyle={{ background: iconColor, color: "#fff"}}
          icon={<TbFaceMask />}
        >
          <h3 className="vertical-timeline-element-title">疫情大爆發</h3>
          <div>
          <img
          className="image"
          src={covid}
        />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: cardColor, color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="25, December, 2020"
          iconStyle={{ background: iconColor, color: "#fff"}}
          icon={<FaSlideshare />}
        >
          <h3 className="vertical-timeline-element-title">求婚 v.s. 被求婚</h3>
          <p className="content">
              結果定情曲播錯首!?
          </p>
          <div>
          <img
            className="image"
            src={we2}
          />
          <img
          className="image"
          src={we}
        />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: cardColor, color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="30, November, 2021"
          iconStyle={{ background: iconColor, color: "#fff"}}
          icon={<FaRunning />}
        >
          <h3 className="vertical-timeline-element-title">鮑郁瑾生日當天跑去登記結婚</h3>
          <p className="content">
          </p>
          <div>
          <img className="image" src={ring} alt=""/>
          <img className="image" src={we3} alt=""/>
          </div>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: cardColor, color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          date="January, 2022"
          iconStyle={{ background: iconColor, color: "#fff"}}
          icon={<MdFamilyRestroom />}
        >
          <h3 className="vertical-timeline-element-title">雙方家長此生首度相見</h3>
          <p className="content">
            感謝爸爸媽媽 * 2 與哥哥姊姊的支持
          </p>
          <div>
          <img
          className="image"
          src={parent}
        />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: cardColor, color: "black" }}
          // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
          // date="Now"
          iconStyle={{ background: iconColor, color: "#fff"}}
          icon={<GiCookie />}
        >
          <h3 className="vertical-timeline-element-title">我們結婚一週年，請大家吃喜餅 </h3>
          <div>
          <p></p>
            <img
            className="image"
            src={ccc}
          />
          </div>
          <div>
          <p></p>
          <img
            className="image"
            src={i1}
            />
          </div>
          <div>
          <p></p>
          <img
              className="image"
              src={i3}
            />
          </div>
          <div>
          <p></p>
          <img
              className="image"
              src={i2}
            />
          </div>
            <div>
          <p></p>
          <img
              className="image"
              src={i5}
            />
          </div>
          <div>
          <p></p>
          <img
              className="image"
              src={i6}
            />
          </div>
          <div>
          <p></p>
            <img
              className="image"
              src={i8}
            />
          </div>
          <div>
            <p></p>
            <img
              className="image"
              src={i9}
            />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: cardColor, color: "black" }}
        // contentArrowStyle={{ borderRight: "7px solid #F8EDE3" }}
        date="2023"
        iconStyle={{ background: iconColor, color: "#fff"}}
        icon={<FaQuestion />}
      >
        <h3 className="vertical-timeline-element-title">And then ...?</h3>
        
      </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default App;
