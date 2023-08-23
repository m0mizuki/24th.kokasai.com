import { Pages } from "../../Pages";
import backGround from "../../../img/backGround/space.jpg";
import "../../../css/pageStyle.css";
import "../projectStyle.css";
import projectData from "../../../json/projectData.json";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//firebase
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/compat/auth";
import "firebase/compat/firestore";

function ProjectDetail() {
  //useEffect外で大丈夫？


  //クエリを取得
  const quely = new URLSearchParams(useLocation().search);
  var a = quely.get("a");
  var b = quely.get("b");
  if (a == null) a = 1;
  if (b == null) b = 1;

  //1度だけ実行
  useEffect(() => {
    //2回実行されないよう一時的にindex.jsの<React.StrictMode>を外している
    const groupName = document.getElementById("groupName");
    groupName.innerText = projectData[a][b].groupName;

    const projectName = document.getElementById("projectName");
    projectName.innerText = projectData[a][b].projectName;

    const description = document.getElementById("description");
    description.innerText = projectData[a][b].description;
  }, []);




  //初期設定
  const firebaseConfig = {
    apiKey: "AIzaSyDtOvDLeIPRmBtRRVRTFxvkWS3sZjSlCuo",
    authDomain: "kokasaivotetest-1.firebaseapp.com",
    projectId: "kokasaivotetest-1",
    storageBucket: "kokasaivotetest-1.appspot.com",
    messagingSenderId: "740547025901",
    appId: "1:740547025901:web:1f23829c617c04886c25e4"
  }
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();


  var uid = "";
  var isSignedIn = false;


  //サインイン(匿名)
  firebase.auth().signInAnonymously()
    .then(() => {
      // Signed in..
      console.log("signed in");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorMessage);
    });

  //サインインしたとき(匿名)
  firebase.auth().onAuthStateChanged((user) => {
    isSignedIn = user;
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      uid = user.uid;
      console.log(uid);
    } else {
      // User is signed out
      console.log("signed out");
      // ...
    }
  });


  function setNice(word) {

    let collection = db.collection(word); // コレクション collection 

    // set はドキュメントの名前を指定して追加する
    // すでに同のドキュメントがあると上書きする
    if (isSignedIn) {
      collection.doc(uid).set({
        time: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
    else {
      console.log("send failed");
    }

  }

  function unsetNice(word) {

    db.collection(word).doc(uid).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  function recieveVoteData() {
    var outputText = "";

    for (let i = 1; i < projectData.length; i++) {
      for (let j = 1; j < projectData[i].length; j++) {
        let collection = db.collection(i + "-" + j);
        collection.get().then(querySnapshot => {
          const groupName = projectData[i][j].groupName;
          outputText = groupName + " : " + querySnapshot.docs.length + "票";

          let voteInfo = document.createElement("p");
          let contents = document.getElementById("contents");
          voteInfo.classList.add("voteInfo");

          if (outputText != "") {
            voteInfo.innerText = outputText;
          }
          else {
            voteInfo.innerText = "none";
          }
          contents.appendChild(voteInfo);

          if (i == a && j == b) {
            let isChecked = false;
            querySnapshot.forEach(doc => {
              if (doc.id == uid) {
                isChecked = true;
              }
            });
            if (isChecked) {
              let niceButton = document.getElementById("niceButton");
              niceButton.checked = true;
            }
          }
        });
      }
    }

    console.log(outputText);
    let output = document.getElementById("voteInfo");
    //output.innerText = "outputText";
    /*if(outputText!=""){
      output.innerText = outputText;
    }
    else alert("aaa");*/

  }


  function ClickNice() {
    let niceButton = document.getElementById("niceButton");
    if (niceButton.checked) {
      setNice(a + "-" + b);
    }
    else {
      unsetNice(a + "-" + b);
    }
  }


  //投票データを取得

  recieveVoteData();


  //todo:チェックボックスの状態が確定するまで表示されないようにする

  return (
    <>
      <img src={backGround} className="backGroundImage responsiveWidth" />


      <div id="contents" className="contents">
        <h2 id="groupName"></h2>
        <h2 id="projectName"></h2>
        <p id="description"></p>
        
        <p>↓投票</p>
        <p><input id="niceButton" className="niceButton" type="checkbox" onClick={ClickNice} /></p>
      </div>
    </>
  );
}

export default ProjectDetail;