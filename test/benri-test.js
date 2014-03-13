/**
 * Created by azu on 2014/03/13.
 * LICENSE : MIT
 */
"use strict";
var eslintTester = require("eslint-tester");

eslintTester.addRuleTest("./rules/benri", {

    // Examples of code that should not trigger the rule
    valid: [
            "// safe\n" +
            "$modalWindow.appendTo(document.body);"
    ],

    // Examples of code that should trigger the rule
    invalid: [
        {
            code: "// なぜやってるのか不明\n" +
                "$modalWindow.appendTo(document.body);",
            errors: [
                { message: "✘ ' なぜやってるのか不明'", type: "Program" }
            ]
        },
        {
            code: "// AmazonSearch からだいたいコピペしてきた\n" +
                "self.$keywordSubmit.click(function (event) {})",
            errors: [
                { message: "✘ ' AmazonSearch からだいたいコピペしてきた'", type: "Program" }
            ]
        }
    ]
});
