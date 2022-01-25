import { extendJSCMatcher } from "../../../jestExt";
import { fetchPetId } from "../../../api/Pet/Pet";
import petSchema from "../../../__schema__/StocksSchema";
/**
 * File (파일과 폴더 트리)
 * % Stmts (구문 비율)
 * % Branch (if문 등의 분기점 비율)
 * % Func (함수 비율)
 * % Lines (코드 줄 수 비율)
 * Uncovered Line #s (커버되지 않은 줄 위치) 이다.
 * **/

extendJSCMatcher();
// params
const PET_ID = 1;

describe("Pet api Pet Group", () => {
  describe("pet/{petId} api", () => {
    it("정상 처리(200)", async () => {
      expect(PET_ID).toEqual(1);
      // const data = await fetchPetId(PET_ID);
      expect(petSchema).toMatchJSC({
        id: "ㅇㅇㅇ",
        category: {
          id: 0,
          name: "string",
        },
        name: "doggie",
        photoUrls: ["string"],
        tags: [
          {
            id: 0,
            name: "string",
          },
        ],
        status: "available",
      });
    });
    // it("param  acqTime =  null (200)", async () => {});
    // it("param  not turbine_id  = 5555 (200)", async () => {});
  });
});
