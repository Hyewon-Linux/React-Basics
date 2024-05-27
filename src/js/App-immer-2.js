import React from "react";
import { useState } from "react";

function Course(props) {
  if (props.lecture === "web") {
    const Students = props.members.web.map((student) => (
      <li key={student.id}> {student.studentID} </li>
    ));
    return (
      <>
        <ul>{Students}</ul>
      </>
    );
  } else if (props.lecture === "blk") {
    const Students = props.members.blockchain.map((student) => (
      <li key={student.id}>{student.studentID}</li>
    ));
    return (
      <>
        <ul>{Students}</ul>
      </>
    );
  }
}
function App() {
  const [web, setWeb] = useState([
    { id: 0, studentID: `20201234`, score: 20 },
    { id: 1, studentID: `20214321`, score: 15 },
  ]);
  const [blockchain, setblockchain] = useState([
    { id: 0, studentID: `🐱 20101234`, score: 13 },
    { id: 1, studentID: `🐹 20104321`, score: 12 },
  ]);
  const add = () => {
    // 수정해볼 것
    setWeb([...web, { id: 2, studentID: `20214321`, score: 30 }]);
    setblockchain([...blockchain, { id: 2, studentID: `20214321`, score: 30 }]);
  };

  return (
    <>
      <button onClick={add}> click! </button>
      <h2>Web</h2>
      <Course lecture="web" members={{ web }} />
      <h2>Blockchain</h2>
      <Course lecture="blk" members={{ blockchain }} />
    </>
  );
}

export default App;
