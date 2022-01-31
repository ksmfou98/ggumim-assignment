import axios from "axios";

test("api 응답 성공 테스트", async () => {
  const response = await axios.get(
    "https://cdn.ggumim.co.kr/test/image_product_link.json"
  );
  expect(response.status).toBe(200);
});
