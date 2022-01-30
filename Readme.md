## s3 dummy server

폼데이터 POST 요청을 공부하는 프론트엔드 개발자들이 마땅한 API 소스를 못 찾았을 때 가볍게 사용할 수 있도록 작성한 소스 코드입니다.

## 코드 사용 방법

### 1. AWS S3 스토리지 생성 및 키 발급받기

위에 적힌 내용 그대로 복사하셔서 구글에 검색하시면 좋은 자료가 많이 나옵니다!

### 2. .env 파일을 생성하고 .example.env에 있는 내용에 1에서 받은 키 값을 입력해주기

엑세스 키가 aaaa, 엑세스 시크릿 키가 bbbb라면

```
AWS_ACCESS_KEY=aaaa
AWS_ACCESS_SECRET_KEY=bbbb
```

### 3. upload.js의 bucket명을 자신이 생성한 bucket 이름으로 바꾸기

이것도 .env에 쓰고 싶으시면 그러시면 됩니다!

### 4. `npm install`

### 5. `npm start`

## API 사용 방법

### `http://localhost:4444/upload`

| 필드명 | 필드 값     | 유형 |
| ------ | ----------- | ---- |
| file   | 전송할 파일 | File |

포트 번호가 마음에 들지 않으면 바꾸셔도 됩니다
