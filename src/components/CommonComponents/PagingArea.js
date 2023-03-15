import React, { useState, useEffect } from 'react';
function PagingArea(props) {
  const [currentMinPage, setCurrentMinPage] = useState(1);// 현재 페이지에서 보이는 최소 페이지
  const [currentMaxPage, setCurrentMaxPage] = useState(props.pageUnit);// 현재 페이지에서 보이는 최대 페이지

  const pageItems = () => {
    const pages = [];
    for (let i = currentMinPage; i < currentMaxPage + 1; i++) {
      pages.push(
        <a className="i == props.pageNum ? 'current' : 'page'"
          key={i}
          onClick={() => clickPage(i)}
        >
          {
            i == props.pageNum ?
              <strong><span>{i}</span></strong>
              : <span>{i}</span>
          }
        </a>
      )
    }
    return pages;
  }

  useEffect(() => {
    // 페이지가 바뀌면 data를 다시 가져온다.
    if (
      (props.pageNum > currentMaxPage && props.pageNum <= props.totalPages) ||
      props.pageNum < currentMinPage
    )
      setPageableData(props.pageNum)
  }, [props.pageNum]);

  //목록 페이징 세팅(현재 최소, 현재 최대)
  function setPageableData(pageNum) {
    let mod = Math.floor((pageNum - 1) / props.pageUnit);
    setCurrentMinPage(props.pageUnit * mod + 1);
    props.pageUnit * (mod + 1) < props.totalPages ?
      setCurrentMaxPage(props.pageUnit * (mod + 1))
      : setCurrentMaxPage(props.totalPages);

    // console.log(currentMinPage, "/", pageNum, "/", currentMaxPage);
  }

  //목록 페이징 초기화
  function resetPageableData() {
    setCurrentMinPage(1);
    setCurrentMaxPage(props.totalPages);
    // console.log("reset", );
  }

  // 다음 페이지 이동
  function moveToNextPage() {
    if (props.pageNum + 1 > props.totalPages) return;

    props.setPage(props.pageNum + 1);
    console.log("next page",);
  }

  // 이전 페이지로 이동
  function moveToBeforePage() {
    if (props.pageNum <= 1) return;

    props.setPage(props.pageNum - 1);
    console.log("prev page",);
  }

  // 첫번째 페이지로 이동
  function moveToFirstPage() {
    if (props.pageNum <= 1) return;
    props.setPage(1);
    console.log("first page",);
  }

  // 마지막 페이지로 이동
  function moveToLastPage() {
    if (props.pageNum >= props.totalPages) return;
    props.setPage(props.totalPages);
    console.log("last page",);
  }

  // 페이지 클릭
  function clickPage(value) {
    props.setPage(value);
  }

  return (
    <div id="paging_area">
      <div className="page_navi">
        <a className="arrow last" onClick={moveToFirstPage}>
          <span className="txt-hidden">첫페이지</span>
        </a>
        <a className="arrow next_link" onClick={moveToBeforePage}>
          <span className="txt-hidden">이전 목록</span>
        </a>

        {pageItems()}

        <a className="arrow prev_link" onClick={moveToNextPage}>
          <span className="txt-hidden">다음 목록</span>
        </a>
        <a className="arrow first" onClick={moveToLastPage}>
          <span className="txt-hidden">마지막페이지</span>
        </a>
      </div>
    </div>
  );
}

PagingArea.defaultProps = {
  totalPages: 0,
  pageUnit: 10
}
export default PagingArea;