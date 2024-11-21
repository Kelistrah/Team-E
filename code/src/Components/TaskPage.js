import React, {useEffect, useState } from "react";
import logo from "./../logo.svg";
import logo2 from "./../logo2.svg";
import Award from "./../Award.svg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './firebase';
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { editTask } from './TaskLogic'
import Calendar from 'react-calendar'
import "./../App.css";

function TaskPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [type, setType] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [dueTime, setDueTime] = useState(Date);
  const [isRepeat, setIsRepeat] = useState(false);
  const [repeatType, setRepeatType] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const TASKTYPE = ["Healthy Eating", "Rest", "Knowledge", "Social", "Tidyness", "Mental"]
  const REPEATTYPE = ["Daily", "Weekly", "Bi-Weekly", "Monthly"]

  function updateType(event) {
    setType(event.target.value);
  }

  function updateRepeat(event) {
    setIsRepeat(event.target.checked);
  }

  function updateRepeatType(event) {
    setRepeatType(event.target.checked);
  }


  
  // Function to open the modal
  const openEditTask = () => {
    const modal = document.getElementById("editTask");
    if (modal) {
      modal.style.display = "block";
    }
  };

  // Function to close the modal
  const closeEditTask = () => {
    const modal = document.getElementById("editTask");
    if (modal) {
      modal.style.display = "none";
    }
  };

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          const email = user.email;
          // ...
          console.log("uid", uid)
          console.log("email", email)


        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
          navigate("/");
          
        }
      });

},)

  const handleLogout = () => {               
    signOut(auth).then(() => {
    // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully")
    }).catch((error) => {
    // An error happened.
    });
  }

  return (
    <>
      <div className="App">
        <header className="App-header2"></header>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo2} className="App-logo2" alt="logo" />
          <div className="App-buttons">
            <Button
              onClick={() => {
                navigate("/home");
              }}
              variant="neutral"
              size="small"
            >
              Home
            </Button>
            <Button
              onClick={handleLogout}
              variant="neutral"
              size="small"
            >
              Sign Out
            </Button>
          </div>
        </header>
      </div>
      <div>
        <Col
          className="Col1"
          style={{
            position: "fixed",
            display: "flex",
            top: "12%",
            left: "8%",
            width: "60%",
            height: "74%",
            backgroundColor: "white",
          }}
        >
          <div
            className="InnerContent"
            style={{
              paddingLeft: "5%",
              width: "95%",
            }}
          >
            <p
              style={{
                fontSize: "110%",
                fontWeight: "600",
                textDecorationLine: "underline",
              }}
            >
              Tasks
            </p>
            <p
              style={{
                color: "gray",
                fontSize: "90%",
                fontWeight: "400",
                lineHeight: "20%",
                paddingBottom: "5%",
              }}
            >
              Date (today)
            </p>
            <div className="App-bordered">
              <Col
                className="Col2"
                style={{ width: "11%", position: "fixed", display: "flex" }}
              >
                <img
                  src={logo}
                  className="App-logo3"
                  alt="logo"
                  style={{ margin: "2%" }}
                />
              </Col>
              <Col
                className="Col3"
                style={{
                  width: "50%",
                  position: "fixed",
                  display: "flex",
                  left: "25%",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "100%",
                      fontWeight: "600",
                      lineHeight: "50%",
                    }}
                  >
                    Task 1
                  </p>
                  <p
                    style={{
                      color: "gray",
                      fontSize: "90%",
                      fontWeight: "600",
                      lineHeight: "50%",
                    }}
                  >
                    Task Description
                  </p>
                  <p>
                    <Button
                      style={{
                        backgroundColor: "white",
                        border: "none",
                        textDecorationLine: "underline",
                      }}
                    >
                      Edit Task
                    </Button>
                  </p>
                  <Button style={{ top: "20%" }}>Done</Button>
                </div>
              </Col>
            </div>
            <div className="App-bordered">
              <Col
                className="Col2"
                style={{ width: "11%", position: "fixed", display: "flex" }}
              >
                <img
                  src={logo}
                  className="App-logo3"
                  alt="logo"
                  style={{ margin: "2%" }}
                />
              </Col>
              <Col
                className="Col3"
                style={{
                  width: "50%",
                  position: "fixed",
                  display: "flex",
                  left: "25%",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "100%",
                      fontWeight: "600",
                      lineHeight: "50%",
                    }}
                  >
                    Task 2
                  </p>
                  <p
                    style={{
                      color: "gray",
                      fontSize: "90%",
                      fontWeight: "600",
                      lineHeight: "50%",
                    }}
                  >
                    Task Description
                  </p>
                  <p>
                    <Button
                      style={{
                        backgroundColor: "white",
                        border: "none",
                        textDecorationLine: "underline",
                      }}
                    >
                      Edit Task
                    </Button>
                  </p>
                  <Button style={{ top: "20%" }}>Done</Button>
                </div>
              </Col>
            </div>
          </div>
          <Button
            id="newTaskButton"
            onClick={openEditTask}
            style={{
              marginTop: "2%",
              marginRight: "5%",
              width: "12%",
              height: "10%",
              backgroundColor: "#606c38",
              border: "#606c38",
              color: "white",
              fontSize: "90%",
              borderRadius: "10px",
            }}
          >
            New Task
          </Button>
        </Col>
        <Col
          style={{
            position: "fixed",
            display: "flex",
            top: "12%",
            left: "72%",
            width: "20%",
            height: "30%",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              paddingTop: "10%",
              paddingLeft: "39%",
              textAlign: "center",
            }}
          >
            <img src={Award} alt="award" style={{}}></img>
            <p
              style={{
                fontSize: "110%",
                fontWeight: "600",
                lineHeight: "50%",
              }}
            >
              100%
            </p>
            <p style={{ lineHeight: "50%" }}>progress</p>
          </div>
        </Col>
        <Col
          style={{
            position: "fixed",
            display: "flex",
            top: "47%",
            left: "72%",
            width: "20%",
            height: "39%",
            backgroundColor: "white",
          }}
        >
          <div style={{ paddingLeft: "7%" }}>
            <p
              style={{
                fontSize: "100%",
                fontWeight: "600",
                lineHeight: "50%",
                textDecorationLine: "underline",
              }}
            >
              Upcoming Tasks
            </p>
            <p
              style={{
                fontSize: "90%",
                fontWeight: "400",
                lineHeight: "50%",
                color: "gray",
              }}
            >
              Day/Month
            </p>
            <p
              style={{
                fontSize: "90%",
                fontWeight: "600",
                lineHeight: "50%",
                paddingTop: "20%",
              }}
            >
              Task
            </p>
            <p
              style={{
                fontSize: "80%",
                fontWeight: "400",
                lineHeight: "50%",
                color: "gray",
              }}
            >
              Description
            </p>
          </div>
        </Col>
      </div>
      <div className="App-bottom">
        <p>© F2024 - Ethernet, Inc. All rights reserved. Address Address</p>
      </div>
      <div className="App-background">{}</div>

      <div id="editTask" className="modal">
        <div className="modal-content">
          <Button onClick={closeEditTask}>Close</Button>
          <Form.Group controlId="formTitle" as={Row}>
                <Form.Label column sm={2}>
                    Title:
                </Form.Label>
                <Col>
                    <Form.Control
                        value={title}
                        onChange={(
                            event,
                        ) => {
                            setTitle(event.target.value);
                        }}
                    />
                </Col>
            </Form.Group>
            <Form.Group controlId="formDescription" as={Row}>
                <Form.Label column sm={2}>
                    Description:
                </Form.Label>
                <Col>
                    <Form.Control
                        size="lg"
                        as="textarea"
                        rows={5}
                        cols={50}
                        type="text"
                        value={task}
                        onChange={(
                            event,
                        ) => {
                            setTask(event.target.value);
                        }}
                    />
                </Col>
            </Form.Group>
            <Form.Group controlId="tasktype">
                <Form.Label>Task Type:</Form.Label>
                <Form.Select value={type} onChange={updateType}>
                  { TASKTYPE.map((type) =>
                    <option key={type} value={type}>{type}</option>
                  )}
                </Form.Select>
            </Form.Group>
            <Form.Group controlId="formTitle" as={Row}>
                <Form.Label column sm={2}>
                    Date:
                </Form.Label>
                <Col>
                    <Form.Control
                        value={dueDate}
                        placeholder={Date.now()}
                        onChange={(
                            event,
                        ) => {
                            setDueDate(event.target.value);
                        }}
                    />
                </Col>
            </Form.Group>
            <Calendar onChange={setDueDate} value={dueDate}/>
            <Form.Check
                type="checkbox"
                id="is-repeat-check"
                label="Repeat?"
                checked={isRepeat}
                onChange={updateRepeat}
            />
            {isRepeat && (
              <Form.Group controlId="tasktype">
                  <Form.Label>How often?</Form.Label>
                  <Form.Select value={repeatType} onChange={updateRepeatType}>
                    { REPEATTYPE.map((type) =>
                      <option key={type} value={type}>{type}</option>
                    )}
                  </Form.Select>
              </Form.Group>
              )}
        </div>
      </div>
    </>
  );
}

export default TaskPage;
