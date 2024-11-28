import React from "react";

const PrevButton = () => {
  // logic
  const hadlePrev = () => {
    console.log("이전 페이지로 이동");
  };

  // view
  return (
    <button
      type="button"
      className="text-none absolute top-6 left-4 px-4 py-2"
      onClick={hadlePrev}
    >
      <img src="./images/arrow-prev.svg" alt="뒤로가기" className="block" />
      뒤로가기
    </button>
  );
};

export default PrevButton;
