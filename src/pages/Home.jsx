import React from "react";
import Button from "../components/Button";
import Title from "../components/Title";


const Home = () => {
  // logic

  const handleStart = () => {
    console.log("info페이지로 이동");
  };

  
  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-chef-green-500 fixed -z-10 -left-60 -top-96"></i>
      <div className="fixed left-0 top-1/2 transform -translate-y-1/3 -z-10">
        <img src="./images/hero.svg" alt="hero" />
      </div>
      <div className="h-full flex flex-col">

        {/* // TODO:Title 컴포넌트 */}
        <Title mainTitle="맛있는 쉐프" subTitle="냉장고에 있는 재료로 뭐 해먹을지 고민되시나요? 남은 재료만 넣으면
        맛있는 레시피가 나옵니다!"/>      
        {/* // TODO:Title 컴포넌트 */}
        {/* START:Button 영역 */}
        <Button
          text="Get started"
          color="bg-chef-green-500"
          onClick={handleStart}
        />
        {/* END:Button 영역 */}
      </div>
    </div>
  );
};

export default Home;
