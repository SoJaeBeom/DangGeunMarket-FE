import md5 from "md5";
import styled from "styled-components";

export default function DetailContent({ detailProduct }) {
  // console.log(
  //   "DetailContent!!!!!",
  //   detailProduct.id,
  //   detailProduct.nickname,
  //   detailProduct.name,
  //   detailProduct.price,
  //   detailProduct.content,
  //   detailProduct.location,
  //   detailProduct.createdAt
  // );

  const avatarUrl = `https://www.gravatar.com/avatar/${md5(
    detailProduct.nickname
  )}?d=wavatar`;

  const displayedAt = (paramTime) => {
    const parseTime = Date.parse(paramTime);
    const date = new Date(parseTime);
    const returnDate =
      date.getFullYear() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes();
    return returnDate;
  };

  return (
    <DetailContentBox>
      <DetailContentProfile>
        <DetailContentUserInfo>
          <DetailContentUserInfoImg src={avatarUrl} alt="avatar" />
          <DetailContentUserInfoWrapper>
            <DetailContentUserInfoNick>
              {detailProduct.nickname}
            </DetailContentUserInfoNick>
            <DetailContentUserInfoLoc>
              {detailProduct.location}
            </DetailContentUserInfoLoc>
          </DetailContentUserInfoWrapper>
        </DetailContentUserInfo>
        <DetailContentTemp>매너온도</DetailContentTemp>
      </DetailContentProfile>

      <DetailContentDesc>
        <DetailContentDescTitle>{detailProduct.name}</DetailContentDescTitle>
        <DetailContentDescCategory>
          가구/인테리어 ∙ {displayedAt(detailProduct.createdAt)}
        </DetailContentDescCategory>
        <DetailContentDescTime></DetailContentDescTime>
        <DetailContentDescPrice>
          {detailProduct.price} 원
        </DetailContentDescPrice>
        <DetailContentDescContent>
          {detailProduct.content}
        </DetailContentDescContent>
        <DetailContentDescEtc>관심 1 ∙ 채팅 0 ∙ 조회 80</DetailContentDescEtc>
      </DetailContentDesc>
    </DetailContentBox>
  );
}

const DetailContentBox = styled.div``;
const DetailContentProfile = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  padding-top: 15px;
  border-bottom: 1px solid #e9ecef;
`;

const DetailContentUserInfo = styled.div`
  width: 114px;
  height: 50px;
  display: flex;
`;

const DetailContentUserInfoWrapper = styled.div``;
const DetailContentUserInfoImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const DetailContentUserInfoNick = styled.div`
  width: 66px;
  height: 25px;
  margin-top: 3px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: #212529;
`;

const DetailContentUserInfoLoc = styled.div`
  width: 66px;
  height: 25px;
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: #212529;
`;

const DetailContentTemp = styled.div`
  width: 136px;
  height: 50px;
  font-size: 12px;
  line-height: 1;
  letter-spacing: -0.6px;
  color: #868e96;
`;

const DetailContentDesc = styled.div`
  padding: 32px 0;
  width: 500px;
  margin: 0 auto;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
`;

const DetailContentDescTitle = styled.h1`
  ont-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.6px;
`;

const DetailContentDescCategory = styled.p`
  margin-top: 4px;
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: #868e96;
`;

const DetailContentDescTime = styled.p`
  margin-top: 4px;
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: #868e96;
`;

const DetailContentDescPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 4px;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.76;
  letter-spacing: -0.6px;
`;

const DetailContentDescContent = styled.p`
  ont-size: 17px;
  line-height: 1.6;
  letter-spacing: -0.6px;
  margin: 16px 0;
  word-break: break-all;
`;

const DetailContentDescEtc = styled.p`
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: #868e96;
`;
