import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Community/Community.scss";
class Community extends Component {
  render() {
    return (
      <div className="Community">
        <div className="container">
          <div className="headtitle">
            <h2>COMMUNITY</h2>
            <span>스톰프뮤직의 자유게시판 입니다.</span>
          </div>
          <section className="notice-info">
            <form>
              <select name="findType" tabIndex="1">
                <option value="all">전체</option>
                <option value="name">제목</option>
                <option value="content">내용</option>
              </select>
              <input type="text" placeholder="검색어를 입력해 주세요"></input>
              <button>
                <FontAwesomeIcon className="fa-search" icon={faSearch} />
              </button>
            </form>
            <div className="list-table">
              <p className="total">
                총<span>150</span>건
              </p>
              <table>
                <thead>
                  <tr>
                    <th scope="col" className="col1">
                      No.
                    </th>
                    <th scope="col" className="col2">
                      제목
                    </th>
                    <th scope="col" className="col3">
                      작성자
                    </th>
                    <th scope="col" className="col4">
                      등록일
                    </th>
                    <th scope="col" className="col5">
                      조회수
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="table-number">150</td>
                    <td className="table-title">
                      <Link to="/">[티켓 오픈] 쇼팽으로 만나는 겨울왕국</Link>
                    </td>
                    <td className="table-writer">thestomp</td>
                    <td className="table-when">2020-11-24</td>
                    <td className="table-howmany">22</td>
                  </tr>
                  <tr>
                    <td className="mob-none">149</td>
                    <td className="title">
                      <Link to="/">
                        [티켓오픈] 아디오스 피아졸라 라이브 탱고{" "}
                      </Link>
                    </td>
                    <td className="mob-none">thestomp</td>
                    <td>2020-11-10</td>
                    <td className="mob-none">21</td>
                  </tr>
                  <tr>
                    <td className="mob-none">148</td>
                    <td className="title">
                      <Link to="/">
                        [티켓오픈] 북유럽 휘바클래식 - 시벨리우스 VS 그리그
                      </Link>
                    </td>
                    <td className="mob-none">thestomp</td>
                    <td>2020-10-23</td>
                    <td className="mob-none">39</td>
                  </tr>
                  <tr>
                    <td className="mob-none">147</td>
                    <td className="title">
                      <Link to="/">
                        [티켓오픈] 원피스 뮤직 심포니 필름 콘서트
                      </Link>
                    </td>
                    <td className="mob-none">thestomp</td>
                    <td>2020-10-16</td>
                    <td className="mob-none">81</td>
                  </tr>
                  <tr>
                    <td className="mob-none">146</td>
                    <td className="title">
                      <Link to="/">
                        [티켓오픈] &lt;쇼팽 탄생 210주년&gt; 오마주 투 쇼팽
                      </Link>
                    </td>
                    <td className="mob-none">thestomp</td>
                    <td>2020-09-29</td>
                    <td className="mob-none">96</td>
                  </tr>
                  <tr>
                    <td className="mob-none">145</td>
                    <td className="title">
                      <Link to="/">
                        [공연취소] &lt;신창용 &amp; 양인모 듀오 콘서트&gt; 공연
                        취소 안내
                      </Link>
                    </td>
                    <td className="mob-none">thestomp</td>
                    <td>2020-08-20</td>
                    <td className="mob-none">218</td>
                  </tr>
                  <tr>
                    <td className="mob-none">144</td>
                    <td className="title">
                      <Link to="/">
                        [공연취소] &lt;피아졸라, 바흐를 만나다&gt; 공연 취소
                        안내
                      </Link>
                    </td>
                    <td className="mob-none">thestomp</td>
                    <td>2020-08-20</td>
                    <td className="mob-none">136</td>
                  </tr>
                  <tr>
                    <td className="mob-none">143</td>
                    <td className="title">
                      <Link to="/">
                        [공연취소] '&lt;쇼팽 탄생 210주년&gt; 쇼팽 VS 리스트'
                        공연 취소 안내
                      </Link>
                    </td>
                    <td className="mob-none">thestomp</td>
                    <td>2020-08-20</td>
                    <td className="mob-none">149</td>
                  </tr>
                  <tr>
                    <td className="mob-none">142</td>
                    <td className="title">
                      <Link to="/">
                        피아니스트 윤한과 '마세라티'의 콜라보레이션!
                      </Link>
                    </td>
                    <td className="mob-none">thestomp</td>
                    <td>2020-07-24</td>
                    <td className="mob-none">275</td>
                  </tr>
                  <tr>
                    <td className="mob-none">141</td>
                    <td className="title">
                      <Link to="/">
                        [티켓오픈] 쇼팽으로 만나는 지브리 오케스트라
                      </Link>
                    </td>
                    <td className="mob-none">thestomp</td>
                    <td>2020-07-16</td>
                    <td className="mob-none">235</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pages">
              <div className="pages-num">
                <Link className="on">1</Link>
                <Link to="/">2</Link>
                <Link to="/">3</Link>
                <Link to="/">4</Link>
                <Link to="/">5</Link>
                <Link to="/">6</Link>
                <Link to="/">7</Link>
                <Link to="/">8</Link>
                <Link to="/">9</Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Community;
