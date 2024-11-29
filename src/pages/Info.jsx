import React, { useEffect, useState } from "react";
import PrevButton from "../components/PrevButton";
import InfoInput from "../components/InfoInput";
import AddButton from "../components/AddButton";
import Button from "../components/Button";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const Info = ({sendIngredientList }) => {
  // logic

  // TODO: set함수 추가하기
  const [ingredientList, setIngredientList] = useState([]); // 사용자가 입력할 재료 목록
  const history = useNavigate();

  const addIngredient = () => {
    console.log("재료 추가하기");
    const id = Date.now();

    const newItem = {
      id,
      label: `ingredient${id}`,
      text: '재료명',
      value: ''

    }
    setIngredientList([...ingredientList, newItem])
   // console.log("ingredientList 출력", ingredientList)  
  };

  const handleNext = () => {    
    //todo 최소 재료 한개이상 유효성 체크 
    //입력값이 있는 배열
    const filterdatalist = ingredientList.filter((item) =>item.value.trim() !== '');
    console.log("filterdatalist 출력", filterdatalist);
    // if(filterdatalist.length>0)
    if(filterdatalist.length)
    {
      //재료입력값이 있는 경우

      //데이터를 부모에게 전송
      sendIngredientList(ingredientList.map((item) => ({...item, value:item.value.trim()})))



      history('/chat');
      return
    }
    //재료값이 없는 경우
     alert('재료를 최소한개이상 입력해주세요');
     return false;

    


    
  };
  const handleChange = (selecteditem) => {
    console.log("handle change===>");
    setIngredientList((prev) => prev.map((item)=>item.id === selecteditem.id?selecteditem:item));
    
  };
  // const animalList =[
  //   {
  //     id:1,
  //     name:'dog',
  //   },
  //   {
  //     id:2,
  //     name:'cat'
  //   },
  //   {
  //     id:3,
  //     name:'fish'
  //   }
  // ]
const handleRemove = (id) => {
  console.log("id값 가져오는 지", id);
  setIngredientList((prev) => prev.filter((item)=> item.id !== id))
}

useEffect(()=>{
  //실행로직 작성   즉각적 실행 내용 알고 싶을때 
  console.log("ingredientList 변경시", ingredientList)  
},[ingredientList])


  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-chef-green-500 fixed -z-10 -left-60 -top-104"></i>
      {/* START:뒤로가기 버튼 */}
      <PrevButton />
      {/* END:뒤로가기 버튼 */}
      <div className="h-full flex flex-col">        
        <Title mainTitle="당신의 냉장고를 알려주세요"/>

        {/* // TODO:Title 컴포넌트 */}
        {/* START:form 영역 */}
        <div className="mt-20 overflow-auto">


          <form>
            {/* START:input 영역 */}
            <div>
              {ingredientList.map((item) => (
                <InfoInput key={item.id} content={item} onRemove={handleRemove} onChange={handleChange} />
              ))}
              {/* <ul>{animalList.map((animal, index) => <li key={`animal${index}`}>{animal.name}</li>)}</ul> */}
            </div>
            {/* END:input 영역 */}
          </form>


        </div>
        {/* END:form 영역 */}
        {/* START:Add button 영역 */}
        <AddButton onClick={addIngredient} />
        {/* END:Add button 영역 */}
        {/* START:Button 영역 */}
        <Button text="Next" color="bg-chef-green-500" onClick={handleNext} />
        {/* END:Button 영역 */}
      </div>
    </div>
  );
};

export default Info;
