/**
 * Created by azu on 2014/03/13.
 * LICENSE : MIT
 *
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
var blackList = /(なぜ.*?不明)|(コピペ)/g;
module.exports = function (context) {
    function getCommentList(node) {
        return node.leading.map(function (comment) {
            return comment.value;
        }).concat(node.trailing.map(function (comment) {
            return comment.value;
        }));
    }

    function checkComment(node) {
        var comments = getCommentList(context.getComments(node));
        comments.forEach(function (comment) {
            if (blackList.test(comment)) {
                context.report(node, "✘ '{{comment}}'", { comment: comment });
            }
        });
    }

    return {
        "ExpressionStatement": checkComment,
        "CallExpression": checkComment,
        "Program": checkComment
    };

};