import React from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userInfo } from "zmp-sdk";
// import { userState } from "../state";

import UserCard from "../components/user-card";

const { version, apiVersion, zaloVersion, platform, language } =
  api.getSystemInfo();

console.log("version=" + zaloVersion);
console.log("apiVersion=" + apiVersion);
console.log("platform=" + platform);
console.log("language=" + language);

import { atom } from "recoil";

// hoặc
const test = async () => {
  try {
    await api.login({});
    let userInfo = await api.getUserInfo({});
    console.log("userInfo=" + userInfo);
  } catch (error) {
    // xử lý khi gọi api thất bại
    console.log(error);
  }
};

import api from "zmp-sdk";
const getPhoneNumberByToken = async (token) => {
  // gọi API Server của bạn để truy xuất thông tin từ token và user access token
};

api.getPhoneNumber({
  success: async (data) => {
    // xử lý khi gọi api thành công
    let { token, number } = data;
    // xử lý cho trường hợp sử dụng phiên bản Zalo mới (phiên bản lớn hơn 23.02.01)
    console.log(number);
    if (token) {
      let number = await getPhoneNumberByToken(token);
      console.log(number);
    }
  },
  fail: (error) => {
    // xử lý khi gọi api thất bại
    console.log(error);
  },
});

/*
TODO:
1. Thông tin User cần lấy (được chủ nhân cho phép), tạo thành 1 xâu json:
  - số điện thoại, 
  - họ tên, 
  - ngày sinh,
  - vị trí của khách hàng
  - Thông tin thanh toán (mỗi lần bấm thanh toán, hay mua hàng nào đó, sẽ lấy thông tin liên quan đến thanh toán)

2. Truyền xâu json này vào thành tham số của iframe PHP.

*/
 

const HomePage: React.FunctionComponent = () => {
  const user = useRecoilValue<userInfo>(test);
  const navigate = useNavigate();
  // const userName = user.name;
  return (
    <Page className="page">
      <div style={{ width: "96vw", height: "100vh" }}>
        <iframe
          src={
            "http://aisolutions.vn/apps/Than-so-hoc-Pythagore/index6_zalominiapp.php?u=" +
            user.id
          }
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </Page>
  );
};

export default HomePage;

{
  /* <div className="section-container" style={{ width: "96vw" }}>
        <UserCard user={user} />
      </div> */
}
{
  /* <div className="section-container">
        <List>
          <List.Item suffix={<Icon icon="zi-arrow-right" />}>
            <div onClick={() => navigate("/about")}>About</div>
          </List.Item>
          <List.Item suffix={<Icon icon="zi-arrow-right" />}>
            <div onClick={() => navigate("/user")}>User</div>
          </List.Item>
        </List>
      </div> */
}
{
  /* <div className="section-container">
        <List>
          <List.Item title="Display name" subTitle={user.name} />
          <List.Item title="ID" subTitle={user.id} />
        </List>
      </div> */
}
