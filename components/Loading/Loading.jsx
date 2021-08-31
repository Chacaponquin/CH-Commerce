import React from "react";

const Loading = () => {
  return (
    <>
      <div id="loadingContainer">
        <div className="loadingio-spinner-ellipsis-4kufd7per3v">
          <div className="ldio-mjgtyuowwq8">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        #loadingContainer {
            display: flex;
            height: 100vh;
            width: 100%;
            align-items: center;
            justify-content: center
        }
@keyframes ldio-mjgtyuowwq8 {
   0% { transform: translate(12px,80px) scale(0); }
  25% { transform: translate(12px,80px) scale(0); }
  50% { transform: translate(12px,80px) scale(1); }
  75% { transform: translate(80px,80px) scale(1); }
 100% { transform: translate(148px,80px) scale(1); }
}
@keyframes ldio-mjgtyuowwq8-r {
   0% { transform: translate(148px,80px) scale(1): }
 100% { transform: translate(148px,80px) scale(0); }
}
@keyframes ldio-mjgtyuowwq8-c {
   0% { background: var(--my-color) }
  25% { background: var(--my-color) }
  50% { background: var(--my-color) }
  75% { background: var(--my-color) }
 100% { background: var(--my-color) }
}
.ldio-mjgtyuowwq8 div {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform: translate(80px,80px) scale(1);
  background: var(--my-color);
  animation: ldio-mjgtyuowwq8 1s infinite cubic-bezier(0,0.5,0.5,1);
}
.ldio-mjgtyuowwq8 div:nth-child(1) {
  background: var(--my-color);
  transform: translate(148px,80px) scale(1);
  animation: ldio-mjgtyuowwq8-r 0.25s infinite cubic-bezier(0,0.5,0.5,1), ldio-mjgtyuowwq8-c 1s infinite step-start;
}.ldio-mjgtyuowwq8 div:nth-child(2) {
  animation-delay: -0.25s;
  background: var(--my-color);
}.ldio-mjgtyuowwq8 div:nth-child(3) {
  animation-delay: -0.5s;
  background: var(--my-color);
}.ldio-mjgtyuowwq8 div:nth-child(4) {
  animation-delay: -0.75s;
  background: var(--my-color);
}.ldio-mjgtyuowwq8 div:nth-child(5) {
  animation-delay: -1s;
  background: var(--my-color);
}
.loadingio-spinner-ellipsis-4kufd7per3v {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
}
.ldio-mjgtyuowwq8 {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-mjgtyuowwq8 div { box-sizing: content-box; }
/* generated by https://loading.io/ */`}
      </style>
    </>
  );
};

export default Loading;