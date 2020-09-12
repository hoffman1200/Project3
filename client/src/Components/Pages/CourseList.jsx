import React from "react";
import "../../Styles/Pages/CourseList.css";
import { Link } from "react-router-dom";
import rocketBackground from "../../assets/blade.mp4";
import { Table as AntTable } from "antd";

function CourseList() {
  const columns1 = [
    {
      title: "Free Online Game Development Courses",
      dataIndex: "course",
      key: "course",
      render: (text) => <a href={text}>{text}</a>,
    },
    {
      title: "Certificate",
      dataIndex: "certificate",
      key: "certificate",
      align: "center",
    },
  ];
  const data1 = [
    {
      key: "1",
      course: "https://www.udemy.com/course/code-your-first-game/",
      certificate: "✖",
    },
    {
      key: "2",
      course:
        "https://www.udemy.com/course/introduction-to-game-development-with-unity/",
      certificate: "✖",
    },
    {
      key: "3",
      course: "https://www.udemy.com/course/unity-game-developer/",
      certificate: "✖",
    },
    {
      key: "4",
      course: "https://www.udemy.com/course/game-development-crash-course/",
      certificate: "✖",
    },
    {
      key: "5",
      course:
        "https://www.udemy.com/course/free-prep-for-html5-game-development/",
      certificate: "✖",
    },
    {
      key: "6",
      course: "https://alison.com/courses/game-development",
      certificate: "✖",
    },
    {
      key: "7",
      course:
        "https://www.futurelearn.com/subjects/it-and-computer-science-courses/game-development",
      certificate: "✖",
    },
    {
      key: "8",
      course:
        "https://learn.unity.com/course/beginner-design-unity-game-development-course",
      certificate: "✖",
    },
    {
      key: "9",
      course:
        "https://www.unrealengine.com/en-US/blog/learn-game-development-for-free-with-unreal-online-learning",
      certificate: "✖",
    },
  ];
  const columns2 = [
    {
      title: "Paid Online Game Development Courses",
      dataIndex: "course",
      key: "course",
      render: (text) => <a href={text}>{text}</a>,
    },
    {
      title: "Certificate",
      dataIndex: "certificate",
      key: "certificate",
      align: "center",
    },
  ];
  const data2 = [
    {
      key: "1",
      course: "https://www.udemy.com/course/code-your-first-game/",
      certificate: "✔",
    },
    {
      key: "2",
      course:
        "https://www.udemy.com/course/introduction-to-game-development-with-unity/",
      certificate: "✔",
    },
    {
      key: "3",
      course: "https://www.udemy.com/course/unity-game-developer/",
      certificate: "✔",
    },
    {
      key: "4",
      course: "https://www.udemy.com/course/game-development-crash-course/",
      certificate: "✔",
    },
    {
      key: "5",
      course:
        "https://www.udemy.com/course/free-prep-for-html5-game-development/",
      certificate: "✔",
    },
    {
      key: "6",
      course: "https://alison.com/courses/game-development",
      certificate: "✔",
    },
    {
      key: "7",
      course: "https://www.skillshare.com/browse/game-development",
      certificate: "✖",
    },
    {
      key: "8",
      course: "https://www.coursera.org/courses?query=game%20development",
      certificate: "✔",
    },
    {
      key: "9",
      course:
        "https://www.futurelearn.com/subjects/it-and-computer-science-courses/game-development",
      certificate: "✔",
    },
  ];

  return (
    <div id="courses">
      <video
        className="rocketVideo"
        autoPlay
        loop
        muted
        source
        src={rocketBackground}
        type="video/mp4"
      />
      <h1 className="course-title">
        We Scoured the Internet to find you Free and Paid Online Game
        Development Courses
      </h1>
      <div className="course-tables">
        <AntTable
          dataSource={data1}
          columns={columns1}
          size="small"
          pagination={false}
        />
        <br />
        <AntTable
          dataSource={data2}
          columns={columns2}
          size="small"
          pagination={false}
        />
      </div>
    </div>
  );
}

export default CourseList;
