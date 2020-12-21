import React, { Component } from "react";
import "./AlbumDetail.scss";

class AlbumDetail extends Component {
  state = {
    data: {},
  };
  componentDidMount() {
    fetch(`http://192.168.219.191:8000/albums/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }
  goToMain = () => {
    this.props.history.push(`/albumList/`);
  };
  render() {
    const { id, title, body } = this.state.data;
    console.log(this.state);
    return (
      <div className="AlbumDetail">
        <div className="container">
          <div className="headtitle">
            <img src="/images/gitomp_bg.jpg" alt="bgimg" />
            <h2>AlbumList</h2>
            <span>깃톰프뮤직의 음악에 매료되어보세요.</span>
          </div>
          <article>
            <div className="album_content">
              <img src="/images/logo.png" alt="albumImg" />
              <div className="detail_info">
                <div className="album_title">
                  <h3>{title}</h3>
                </div>
                <dl>
                  <dt>· 아티스트 </dt>
                  <dd>: 적재</dd>
                </dl>
                <dl>
                  <dt>· 앨범명 </dt>
                  <dd>: FINE</dd>
                </dl>
                <dl>
                  <dt>· 발매일 </dt>
                  <dd>: 2017-03-09</dd>
                </dl>
                <dl>
                  <dt>· 형태 </dt>
                  <dd>: EP</dd>
                </dl>
                <div className="album_summary">
                  “지나간 시간들도, 다친 마음도. 결국 다 괜찮아질 거야.“
                </div>
                <div className="album_link">
                  <h4>· 음악감상 바로가기</h4>
                  <ul>
                    <li className="melon">
                      <img src="/images/favi-melon.jpg" alt="melon" />
                    </li>
                    <li className="bugs">
                      <img src="/images/favi-bugs.jpg" alt="bugs" />
                    </li>
                    <li className="genie">
                      <img src="/images/favi-genie.jpg" alt="genie" />
                    </li>
                    <li className="flo">
                      <img src="/images/favi-flo.jpg" alt="flo" />
                    </li>
                    <li className="naverm">
                      <img src="/images/favi-naverm.jpg" alt="naverm" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="album_profile">
              <p>
                수록곡 리스트 01 별 보러 가자 02 FINE 03 톡 04 우연을 믿어요 05
                나를 찾아서 앨범 설명 “지나간 시간들도, 다친 마음도. 결국 다
                괜찮아질 거야.“ 싱어송라이터 적재(JUKJAE) EP [FINE] 발매 “지나간
                시간들도, 다친 마음도. 결국, 다 괜찮아질 거야.” 괜찮지 않았던
                모든 시간들을 넘어, 결국 모두 괜찮아질 거라고 우리를 토닥여주는
                앨범 [FINE/파인]. 2014년 데뷔, 정규1집 발매 이후 두 차례의
                싱글을 발매하며 꾸준히 음악활동을 펼쳐온 그가 ‘적재’로 앨범을
                발표한다. 싱글 ‘나란 놈’ 이후 약 1년 만에 돌아온 이번 EP
                [FINE]은 총 다섯 트랙으로 들을 수록, 소리와 감정에 오롯이 집중한
                음악을 만들었다. EP [FINE]은 내 마음 속 당신에게 질문을 툭
                건넨다. 말하는 듯 툭툭 뱉어내는 보컬은 기본, 극적 반전을 꾀하는
                소설보다는 에세이나 한 줄의 시처럼 일상적이고 담담한 가사에
                편안한 그의 목소리는 ‘그래서 정말 잘 지내고 있어? 괜찮은 거야?’
                하고 물어보는 듯하다. 또한 재즈펑크부터 팝, 락 등 장르를 가리지
                않고 새로운 시도를 거듭하여 온전히 그의 것으로 만들어내
                싱어송라이터 적재만의 스타일을 더욱 강하게 구축해냈다. 다섯 곡을
                듣고 있다 보면 평온했던 감정이 이내 북받쳐 오를 수 있다. 하지만
                앨범을 듣고 있는 순간만큼은 우리에게 울음을 툭 터뜨려도, 심장이
                쿵쿵 두근거려도 괜찮고 또 괜찮게 만든다. 1. 별 보러 가자 밤하늘
                별을 보았을 때 생각하는 그 사람이 있다면. 2. FINE 괜찮지 않아도
                괜찮아. 결국, 정말 괜찮아질 겁니다. 정
              </p>
            </div>
          </article>
          <div className="content_prevnext">
            <dl className="bbottom">
              <dt className="prev" onClick={this.goToBack}>
                이전 글 ▲
              </dt>
              <dd>[티켓오픈] 아디오스 피아졸라 라이브 탱고 </dd>
            </dl>
            <dl>
              <dt className="next" onClick={this.goToNext}>
                다음 글 ▼
              </dt>
              <dd>다음글이 없습니다.</dd>
            </dl>
          </div>
        </div>
        <div className="bottom_btn">
          <button onClick={this.goToMain}>목록보기</button>
        </div>
      </div>
    );
  }
}

export default AlbumDetail;
