npm update

**npm start**

<br/>

### app.js

- header
- section
  < Routes >
  - ContMgtList
    - ContMgtSearchArea
    - AgGrid
    - PagingArea
- footer

<br/>

부모 -> 자식 : props로 쉽게

자식 -> 부모 : props로 함수 전달, 자식에서 props 함수 호출

<br/>

### style={{ }}

""가 아니다..

<br/>

### 리액트에서의 라우트

routes 태그 안에 선언하고

    <Routes>
      <Route path="/page1" element={<PageComponent1 />} />
      <Route path="/page2" element={<PageComponent2 />} />
      <Route path="/page3/:id" element={<PageComponent3 />} />
    </Routes>

다른 [js파일](/src/routes/index.js)에 컴포넌트 리스트들 작성 하고 import

<br/>

### 파라미터는 :id로

받는 페이지에서는 useParams로 받음

<br/>

### 부모에서 자식함수를 호출할 때

부모에서 > **useRef** 이용

자식 컴포넌트에 ref={childRef} 설정

자식에서 > **forwardRef, useImperativeHandle** 이용

컴포넌트를 const 타입으로 = forwardRef((props, ref) => {} 선언

    const ContMgtList = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
    부모에서 호출 가능하도록..? 함수 이름..
    }));

<br/>

### onClick에서

    onClick={() => 함수(param)}

변수가 있으면 () => 해줘야 하남

<br/>

### for문 대신에

return문 안에

    arr.map(()=>(

    ))

or

return 밖에서

    const rendering = () => {
      const result=[];
      for(  ; ; ) {
        result.push로 넣고
      }

      return result;
    }

    return문에

    <div> {rendering()} </div>
