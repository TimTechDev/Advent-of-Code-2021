import "mocha";
import { expect } from "chai";
import { main } from "./index";

describe("day18", () => {
    it("should return ???", () => {
        const result = main();
        expect(result).to.equal(undefined);
    });
});