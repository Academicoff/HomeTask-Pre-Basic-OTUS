import {result} from "../1. DataTypes/first";
import {sum} from "../1. DataTypes/first";
import {prod} from "../1. DataTypes/first";

describe("DataTypes tests", () => {
    it('Sum function', () => {
        expect(sum(5, 10)).toBe(15);
        expect(sum(-5, 10)).toBe(5);
        expect(sum(0, 0)).toBe(0);
        expect(sum(-5, -10)).toBe(-15);
    });
    it('Prod function', () => {
        expect(prod(5, 10)).toBe(50);
        expect(prod(-5, 10)).toBe(-50);
        expect(prod(0, 0)).toBe(0);
        expect(prod(-5, -10)).toBe(50);
    })
    it('console.log the text "Product " + prod + " Sum " + sum', () => {
        console.log = jest.fn();
        console.log("Product " + prod(5, 10) + " Sum " + sum(5, 10));
    });
});