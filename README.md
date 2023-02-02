npm update
npm start

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

style={{ }}

""가 아니다..

<br/>

### 리액트에서의 라우트

routes 태그 안에 선언하고

    <Routes>
      <Route path="/page1" element={<PageComponent1 />} />
      <Route path="/page2" element={<PageComponent2 />} />
      <Route path="/page3/:id" element={<PageComponent3 />} />
    </Routes>

다른 [js파일](/src/routes/index.js)에 컴포넌트 리스트들 작성

파라미터는 :id로

받는 페이지에서는 useParams로 받음
