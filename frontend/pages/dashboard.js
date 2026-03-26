import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  HiIdentification,
  HiGlobeAlt,
  HiPuzzle,
  HiClock,
  HiColorSwatch,
  HiChartBar,
  HiUserGroup,
  HiAcademicCap,
  HiCog,
  HiChevronRight,
  HiChevronDown,
  HiOutlineSparkles,
} from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

export default function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo">
          {" "}
          <Image src="/U.png" alt="U" width={25} height={30} />
          DYAMIQ
        </div>
        <ul className="menu">
          <li className="active">
            <Image src="/home.png" alt="Home" width={18} height={18} />
            <span>Dashboard</span>
          </li>
          <li onClick={() => router.push("/my-digital-id")}>
            <HiIdentification /> My Digital Id
          </li>
          <li>
            <HiGlobeAlt /> Digital Presence
          </li>
          <li>
            <HiPuzzle /> Integrations
          </li>
          <li>
            <HiColorSwatch /> Branding
          </li>
          <li>
            <HiChartBar /> Analytics & Insights
          </li>
          <li>
            <HiUserGroup /> Leads & Enquires
          </li>
          <li>
            <HiAcademicCap /> Learning & Support
          </li>
          <li>
            <HiCog /> Settings
          </li>
        </ul>

        <div className="upgradeCard">
          <HiOutlineSparkles className="upgradeIcon" />
          <div>
            <div className="upgradeTitle">Upgrade plan</div>
            <div className="upgradeSubtitle">Get extra benefits</div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="topbar">
          <div></div>

          <div className="topRight">
            {" "}
            <span className="help">Help</span>
            <div className="profile" onClick={() => setShowMenu(!showMenu)}>
              <FaUserCircle size={26} />
            </div>
            {showMenu && (
              <div className="dropdown">
                <div className="dropdownPurple">
                  {" "}
                  <img src="/home.png" alt="icon" width="25" />
                  Business selector
                </div>
                <div className="dropdownItem">
                  {" "}
                  <img src="/home.png" alt="icon" width="25" />
                  Subscription
                </div>
                <div className="dropdownItem">
                  <img src="/home.png" alt="icon" width="25" />
                  Billing & invoices
                </div>
                <div className="dropdownItem">
                  <img src="/home.png" alt="icon" width="25" />
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>

        <h1 className="title">Welcome Back!</h1>
        <p className="subtitle">
          Here's what's happening with your business today.
        </p>

        <div className="cards">
          {[
            { title: "Digital ID", badge: "Created" },
            { title: "Website", badge: "Draft" },
            { title: "Integrations", badge: "3 Connected" },
            { title: "Leads", badge: "24 Enquiries" },
          ].map((item, index) => (
            <div key={index} className="cardNew">
              <div className="cardHeader">
                <img src="/home.png" alt="icon" width="40" />
                <h3>{item.title}</h3>
              </div>

              <span className="badge">{item.badge}</span>
            </div>
          ))}
        </div>

        <h2 className="sectionTitle">Quick Actions</h2>

        <div className="actions">
          {[
            "Create / Edit Digital ID",
            "Build Website",
            "Share Digital ID",
            "Connect Integrations",
          ].map((action, index) => (
            <div key={index} className="actionCard">
              <img src="/home.png" alt="icon" width="22" />

              <div>
                {" "}
                <h4>{action}</h4>
                <p>Manage your business activity</p>
              </div>
              <HiChevronRight />
            </div>
          ))}
        </div>

        <div className="insightHeader">
          <div>
            <h2>Quick Insights</h2>
            <p className="insightSub">Last 7 days performance</p>
          </div>

          <button className="analyticsBtn">VIEW FULL ANALYTICS</button>
        </div>

        <div className="insightsWrapper">
          {[
            { number: "1234", label: "Profile Views" },
            { number: "89", label: "Whatsapp Clicks" },
            { number: "23", label: "Total Enquires" },
          ].map((item, index) => (
            <div key={index} className="insightCardNew">
              <div className="insightTop">
                <img src="/home.png" alt="icon" width="22" />
                <span className="growth">+10%</span>
              </div>

              <h3>{item.number}</h3>
              <p>{item.label}</p>

              <div className="miniChart">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ))}
        </div>
        <div className="recentActivity">
          <h2 className="sectionTitle">Recent Activity</h2>

          <div className="activityCard">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="activityItem">
                <div className="activityIcon">
                  <HiClock />
                </div>

                <div className="activityContent">
                  <p className="activityTitle">
                    New lead received from website
                  </p>
                  <span className="activityTime">2 hours ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
