import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../Account/Account.scss";
class Account extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      nickname: "",
      isCheckBoxConfirm: false,
      checkId: false,
      checkPassword: false,
      checkNickName: false,
      isSuccessLogin: false,
    };
  }
  postSignUp = () => {
    fetch("http://192.168.219.191:8000/users/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        nickname: this.state.nickname,
      }),
    })
      .then((res) => {
        if (res.ok) {
          this.onSignupSuccess();
        } else {
          alert("중복된 정보입니다. 확인해 주세요.");
        }
      })
      .catch((error) => {
        alert("통신불가");
      });
  };

  onSignupSuccess = () => {
    alert("회원가입 완료");
    this.setState({ isSuccessLogin: true }, () => {
      this.props.closeSign();
    });
  };

  fetchInfo = () => {
    const {
      isCheckBoxConfirm,
      checkId,
      checkNickName,
      checkPassword,
    } = this.state;
    if (isCheckBoxConfirm && checkId && checkPassword && checkNickName) {
      this.postSignUp();
    }
  };

  handleIdPasswordInput = (e) => {
    const { value, name } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => this.isVaildationIdPass()
    );
  };

  isVaildationIdPass = () => {
    const { email, password, nickname } = this.state;
    this.setState({
      checkId: email.includes("@" && ".com"),
      checkPassword: password.length >= 9,
      checkNickName: nickname.length >= 3,
    });
  };

  handlechecked = () => {
    this.setState({ isCheckBoxConfirm: !this.state.isCheckBoxConfirm });
  };

  render() {
    const {
      isCheckBoxConfirm,
      checkId,
      checkPassword,
      checkNickName,
    } = this.state;
    const { closeSign } = this.props;
    return (
      <>
        <div className="Account">
          <div className="container">
            <div className="head-title">
              <span className="title">GITOMP SIGNUP</span>
              <span className="subtitle">
                깃톰프뮤직의 아티스트 소식과 특별한 혜택이 있는 <br />
                공연과 소식을 먼저 받아보실수 있습니다.
              </span>
            </div>
            <form>
              <span>
                이메일 <span className="requried">*</span>
              </span>
              <input
                className="email-input"
                type="text"
                name="email"
                placeholder="이메일을 입력해 주세요."
                onChange={this.handleIdPasswordInput}
                required
              />
              {checkId ? (
                <FontAwesomeIcon className="facheck check1" icon={faCheck} />
              ) : (
                <FontAwesomeIcon className="fatimes times1" icon={faTimes} />
              )}
              <span>
                패스워드 <span className="requried">*</span>
              </span>
              <input
                className="email-password"
                type="password"
                name="password"
                placeholder="비밀번호를 입력해 주세요."
                onChange={this.handleIdPasswordInput}
                required
              />
              {checkPassword ? (
                <FontAwesomeIcon className="facheck check2" icon={faCheck} />
              ) : (
                <FontAwesomeIcon className="fatimes times2" icon={faTimes} />
              )}
              <span>
                닉네임 <span className="requried">*</span>
              </span>
              <input
                className="email-nickname"
                type="text"
                name="nickname"
                placeholder="닉네임을 입력해 주세요. (5자 이상)"
                onChange={this.handleIdPasswordInput}
                required
              />
              {checkNickName ? (
                <FontAwesomeIcon className="facheck check3" icon={faCheck} />
              ) : (
                <FontAwesomeIcon className="fatimes times3" icon={faTimes} />
              )}
            </form>
            <div className="notice-info">
              <p>
                <span className="notice-title">회원정보보호 및 대책 </span>
                <br />
                <span className="notice-subtitle">
                  1. 개인 정보 수집 목적 및 이용
                </span>
                <br />
                “스톰프뮤직”은 이용자들의 개인정보보호를 매우 중요시하며,
                이용자가 회사의 서비스를 이용함과 동시에 온라인상에서 회사에
                제공한 개인정보가 보호 받을 수 있도록 최선을 다하고 있습니다.
                이에 회사는 통신비밀보호법, 전기통신사업법, 정보통신망 이용촉진
                및 정보보호 등에 관한 법률 등 정보통신서비스제공자가 준수하여야
                할 관련 법규상의 개인정보보호 규정 및 정보통신부가 제정한
                개인정보보호지침을 준수하고 있습니다. “스톰프뮤직”은 개인정보
                취급방침을 통하여 이용자들이 제공하는 개인정보가 어떠한 용도와
                방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가
                취해지고 있는지 알려 드립니다. “스톰프뮤직”은 개인정보
                취급방침을 홈페이지 첫 화면에 공개함으로써 이용자들이 언제나
                용이하게 보실 수 있도록 조치하고 있습니다. “스톰프뮤직”의
                개인정보 취급방침은 정부의 법률 및 지침 변경이나 회사의 내부
                방침 변경 등으로 인하여 수시로 변경될 수 있고, 이에 따른
                개인정보 취급방침의 지속적인 개선을 위하여 필요한 절차를 정하고
                있습니다. 그리고 개인정보 취급방침을 개정하는 경우나 개인정보
                취급방침 변경될 경우 쇼핑몰의 첫 페이지의 개인정보취급방침을
                통해 고지하고 있습니다. 이용자들께서는 사이트 방문 시, 수시로
                확인하시기 바랍니다. “스톰프뮤직”의 개인정보 취급방침은 다음과
                같은 내용을 담고 있습니다. 1. 개인정보 수집에 대한 동의 2.
                개인정보의 수집목적 및 이용목적 3. 수집하는 개인정보 항목 및
                수집방법 4. 수집하는 개인정보의 보유 및 이용기간 5. 수집한
                개인정보의 공유 및 제공 6. 이용자 자신의 개인정보 관리(열람,
                정정, 삭제 등)에 관한 사항 7. 쿠키(cookie)의 운영에 관한 사항 8.
                비회원 고객의 개인정보 관리 9. 개인정보의 위탁처리 10.
                개인정보관련 의견수렴 및 불만처리에 관한 사항 11. 개인정보
                관리책임자 및 담당자의 소속-성명 및 연락처 12. 고지의 의무 1.
                개인정보 수집에 대한 동의 “스톰프뮤직”은 이용자들이 회사의
                개인정보 취급방침 또는 이용약관의 내용에 대하여 「동의」버튼
                또는 「취소」버튼을 클릭할 수 있는 절차를 마련하여,
                「동의」버튼을 클릭하면 개인정보 수집에 대해 동의한 것으로
                봅니다.
                <span className="notice-subtitle">
                  2. 개인정보의 수집목적 및 이용목적
                </span>
                <br />
                “개인정보”라 함은 생존하는 개인에 관한 정보로서 당해 정보에
                포함되어 있는 성명, 연락처 등의 사항에 의하여 당해 개인을 식별할
                수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도
                다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를
                말합니다. 대부분의 서비스는 별도의 사용자 등록이 없이 언제든지
                사용할 수 있습니다. “스톰프뮤직”은 회원서비스를 통하여
                이용자들에게 맞춤 식 서비스를 비롯한 보다 더 향상된 양질의
                서비스를 제공하기 위하여 이용자 개인의 정보를 수집하고 있습니다.
                “스톰프뮤직”은 이용자의 사전 동의 없이는 이용자의 개인 정보를
                공개하지 않으며, 수집된 정보는 아래와 같이 이용하고 있습니다.
                “스톰프뮤직”은 이용자의 사전 동의 없이는 이용자의 개인 정보를
                공개하지 않으며, 수집된 정보는 아래와 같이 이용하고 있습니다.
                회사는 신규 서비스개발이나 컨텐츠의 확충 시에 기존 이용자들이
                회사에 제공한 개인정보를 바탕으로 개발해야 할 서비스의 우선
                순위를 보다 더 효율적으로 정하고, 회사는 이용자들이 필요로 할
                컨텐츠를 합리적으로 선택하여 제공할 수 있습니다. 둘째, 수집하는
                개인정보 항목과 수집 및 이용목적은 다음과 같습니다. -성명 :
                회원제 서비스 이용에 따른 본인 확인 절차에 이용 -연락처,
                이메일주소 : 고지사항 전달, 불만처리 등을 위한 원활한 의사소통
                경로의 확보, 새로운 서비스 및 신상품이나 이벤트 정보 등의 안내
                -주소, 연락처 : 청구서, 물품배송시 정확한 배송지의 확보 -기타
                선택항목 : 개인맞춤 서비스를 제공하기 위한 자료 -IP Address, :
                불량회원의 부정 이용 방지와 비인가 사용 방지
                <span className="notice-subtitle">
                  3. 수집하는 개인정보 항목 및 수집방법
                </span>
                <br /> “스톰프뮤직”은 이용자들이 회원서비스를 이용하기 위해
                회원으로 가입하실 때 서비스 제공을 위한 필수적인 정보들을
                온라인상에서 입력 받고 있습니다. 뉴스레터 구독 신청 시에 받는
                필수적인 정보는 이름, 연락처, 이메일 주소 등입니다.
              </p>
            </div>
            <div className="public-info">
              <button type="button" onClick={this.handlechecked}>
                {isCheckBoxConfirm && "X"}
              </button>
              <span>개인정보수집이용에 동의합니다.</span>
            </div>
            <div className="box-area">
              <button className="send" onClick={this.fetchInfo}>
                회원가입
              </button>
              <button className="close" onClick={closeSign} name="isSignUp">
                닫기
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Account;
