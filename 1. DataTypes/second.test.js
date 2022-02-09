import {result} from "../1. DataTypes/second";

describe("Second task on DataTypes", () => {
    let a = "qweqwe"; //length 6
    let b = "qwertyui"; //length 8
    it("Console log sum length 'a' and 'b' string",() =>{
        console.log = jest.fn();
        console.log("Суммарное количество символов: " + (6 + 8));
        expect(console.log).toHaveBeenCalledWith('Суммарное количество символов: 14');
    });
});
