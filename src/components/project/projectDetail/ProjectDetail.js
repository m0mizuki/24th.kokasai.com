import { Pages } from "../../Pages";
import backGround from "../../../img/backGround/space.png";
import "../../../css/pageStyle.css";
import "../projectStyle.css";
import projectData from "../../../json/projectData.json";
import heart1 from "../../../img/heart1.png";
import heart2 from "../../../img/heart2.png";
import leftArrow from "../../../img/leftArrow.png";
import rightArrow from "../../../img/rightArrow.png";

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
  var a = parseInt(quely.get("a"));
  var b = parseInt(quely.get("b"));
  if (a == null) a = 1;
  if (b == null) b = 1;

  //1度だけ実行
  useEffect(() => {
    //2回実行されないよう一時的にindex.jsの<React.StrictMode>を外している
    const groupName = document.getElementById("groupName");
    groupName.innerHTML = projectData[a][b].groupName;

    const projectName = document.getElementById("projectName");
    projectName.innerHTML = projectData[a][b].projectName;

    const description = document.getElementById("description");
    description.innerHTML = projectData[a][b].description;

    const projectImage = document.getElementById("projectImage");
    //projectImage.src="../img/circleCut/cc"+a+"-"+b+".png";
    projectImage.src = projectData[a][b].imgPath;

    const titleMark = document.getElementById("titleMark");
    setColor(titleMark,a,b);
  }, []);

  function setColor(target,a,b){
    const markColor=[
      "#0000ff",
      "#ffa500",
      "#ff0000",
      "#ffff00",
      "#008000"
    ];
    if(1<=a&&a<=5){
      target.style.backgroundColor=markColor[b-1]; //学科の色
    }
    else if(6<=a&&a<=8){
      target.style.backgroundColor="#00ffff"; //水色
    }
    else if(9<=a&&a<=10){
      target.style.backgroundColor="#ffc0cb"; //ピンク
    }
    else if(11<=a&&a<=12){
      target.style.backgroundColor="#00ff00"; //ライム
    }
    else if(a==13){
      target.style.backgroundColor="#8a2be2"; //紫色
    }
    else{
      target.style.backgroundColor="#696969"; //灰色
    }
  }


  //右の企画へ飛ぶ
  function changeLeftPage(){
    let newA=1;
    let newB=1;
    if(b==1){
      if(a==1){
        newA=projectData.length-1; //企画の最後の組
        newB=projectData[newA].length-1; //企画の最後の組の最後の要素
      }
      else{
        newA=a-1; //aの1つ前の組
        newB=projectData[newA].length-1; //aの1つ前の組の最後の要素
      }
    }
    else{
      newA=a;
      newB=b-1;
    }
    window.location.assign(Pages.projectDetail.path + "?a=" + newA + "&b=" + newB);
  }

  //左の企画へ飛ぶ
  function changeRightPage(){
    let newA=1;
    let newB=1;
    if(b==projectData[a].length-1){
      if(a==projectData.length-1){
        newA=1;
        newB=1;
      }
      else{
        newA=a+1;
        newB=1;
      }
    }
    else{
      newA=a;
      newB=b+1;
    }
    window.location.assign(Pages.projectDetail.path + "?a=" + newA + "&b=" + newB);
  }


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

    changeHeart(heart2);
  }

  function unsetNice(word) {

    db.collection(word).doc(uid).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });

    changeHeart(heart1);
  }

  function changeHeart(heartImg) {
    let niceImage = document.getElementById("niceImage");
    niceImage.style.animationName = "niceOutAnimation";
    setTimeout(() => {
      niceImage.src = heartImg;
      niceImage.style.animationName = "niceInAnimation";
      recieveVoteData();
    }, 400);
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
          //contents.appendChild(voteInfo);

          if (i == a && j == b) {
            let isChecked = false;
            querySnapshot.forEach(doc => {
              if (doc.id == uid) {
                isChecked = true;
              }
            });

            let niceButton = document.getElementById("niceButton");
            let niceImage = document.getElementById("niceImage");
            if (isChecked) {
              niceButton.checked = true;
              niceImage.src = heart2;
            }
            else {
              niceButton.checked = false;
              niceImage.src = heart1;
            }
            niceButton.classList.remove("invisible");

            let numberOfLikes = document.getElementById("numberOfLikes");
            numberOfLikes.innerText = querySnapshot.docs.length;
          }
        });
      }
    }

    //console.log(outputText);
    //let output = document.getElementById("voteInfo");
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

  function backToProjectPage() {
    let path = Pages.project.path + "?num=" + a;
    window.location.assign(path);
  }

  //todo:チェックボックスの状態が確定するまで表示されないようにする->ok
  //匿名だと,タブ切り替えるとID変わって何回でも投票できてしまう

  return (
    <>
      <img src={backGround} className="backGroundImage responsiveWidth" />


      <div id="contents" className="contents contents_spaceSmoke">
        <div className="contents_innerBlock">
          <br />
          <button className="backButton" onClick={backToProjectPage}>◀back</button>

          <div className="imageTitleArea">
            <div className="titleArea">
              <div id="titleMark" className="titleMark" />
              <p id="groupName" className="groupNameText"></p>
              <p id="projectName" className="projectNameText"></p>
            </div>
            <div className="imageArea">
              <input type="image" className="leftButton" src={leftArrow} onClick={changeLeftPage} />
              <input type="image" className="rightButton" src={rightArrow} onClick={changeRightPage} />
              <img id="projectImage" className="projectImage" />
            </div>
          </div>

          <div className="niceArea">
            <div id="numberOfLikes" className="numberOfLikes"></div>
            <input id="niceButton" className="niceButton invisible" type="checkbox" onClick={ClickNice} />
            <div className="niceImageArea">
              <label for="niceButton">
                <img id="niceImage" className="niceImage" />
              </label>
            </div>

          </div>

          <div className="descriptionArea">
            <p className="heading_comment">comment</p>
            <p id="description" className="description"></p>
            <button className="toMapButton" onClick={() => { alert("未作成"); }}>&gt;&gt;マップで場所を確認</button>
          </div>
          <br />
        </div>

      </div>
    </>
  );
}

export default ProjectDetail;