/// <reference path="../typings/jest/jest.d.ts" />
describe("TypeScript", function () {
    describe("let", function () {
        it("use instead of var", function () {
            var x = 1;
            expect(x).toEqual(1);
        });
        it("assign in block scope not function scope", function () {
            var x = 2;
            if (true) {
                var x_1 = 1;
            }
            expect(x).toEqual(2);
        });
    });
    describe("const", function () {
        it("cannot reassign twice", function () {
            var CONSTANT = 1;
            // if we uncomment the line below, we will get the compile error
            // CONSTANT = 2;
            expect(CONSTANT).toEqual(1);
        });
    });
    describe("type", function () {
        it("is number", function () {
            var x = 0;
            expect(x).toEqual(0);
        });
        it("is string", function () {
            var word = "Hello TypeScript";
            expect(word).toEqual("Hello TypeScript");
        });
        describe("template string", function () {
            it("use for make string multiple line", function () {
                var word = "Line 1\nLine 2";
                expect(word).toEqual("Line 1\nLine 2");
            });
            it("use for embed variable to string", function () {
                var luckyNumber = 7;
                var word = "lucky number is " + luckyNumber;
                expect(word).toEqual("lucky number is 7");
            });
        });
        it("is boolean", function () {
            var tf = true;
            expect(tf).toEqual(true);
        });
        describe("array", function () {
            it("use type Array<type> for assign array", function () {
                var numbers = [1, 2, 3];
                expect(numbers).toEqual([1, 2, 3]);
            });
            it("use more than one type (union type): Array<type | another type> for assign array", function () {
                var numbers = ["hello", 1, 2, 3];
                expect(numbers).toEqual(["hello", 1, 2, 3]);
            });
            it("can use <type>[] instead of Array", function () {
                var numbers = [1, 2, 3];
                expect(numbers).toEqual([1, 2, 3]);
            });
        });
        describe("any", function () {
            it("can assign any type to variable", function () {
                var x = 1;
                // here we can reassign a different type to x
                x = "text";
                expect(x).toEqual("text");
            });
            it("implicit type any by default", function () {
                // but here we cannot reassign a different type to x, so we need to change the value to be of the type we want
                var x = "text";
                expect(x).toEqual("text");
            });
        });
    });
    describe("function", function () {
        describe("syntax", function () {
            it("use function keyword to declare function", function () {
                function something() {
                    return "word";
                }
                expect(something()).toEqual("word");
            });
            it("can declare type", function () {
                function something(x) {
                    return "word " + x;
                }
                expect(something("hello")).toEqual("word hello");
            });
        });
        describe("anonymous function", function () {
            it("declare with () =>", function () {
                var something = function () { return "word"; };
                expect(something()).toEqual("word");
            });
        });
    });
    describe("union", function () {
        function padLeft(value, padding) {
            if (typeof padding === "number") {
                return Array(padding + 1).join(" ") + value;
            }
            if (typeof padding === "string") {
                return padding + value;
            }
            throw new Error("Expected string or number, got \"" + padding + "\".");
        }
        // alternatively, we can define the type to the parameters and remove the exception
        // this way if we input a value of a different type, we will get the compile error
        //    function padLeft(value: string, padding: number | string) {
        //      if (typeof padding === "number") {
        //        return Array(padding + 1).join(" ") + value;
        //      }
        //      if (typeof padding === "string") {
        //        return padding + value;
        //      }
        //    }
        describe("with padLeft example", function () {
            it("should padding 4 space when input padding with type number", function () {
                expect(padLeft("hello world", 4)).toEqual("    hello world");
            });
            it("should padding with character when input padding with type string", function () {
                expect(padLeft("hello world", "\n")).toEqual("\nhello world");
            });
            it("should throw error when input padding with other type", function () {
                function padLeftError() {
                    padLeft("hello world", true);
                }
                expect(padLeftError).toThrow(new Error("Expected string or number, got \"true\"."));
            });
        });
    });
});
