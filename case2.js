const comments = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          { commentId: 111, commentContent: "Haai juga hai jugaa" },
          { commentId: 112, commentContent: "Haai juga hai jugaa" },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [{ commentId: 121, commentContent: "Haai juga hai jugaa" }],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

// Fungsi rekursif untuk menghitung semua komentar
function countComments(commentsArray) {
  let total = 0;
  commentsArray.forEach((comment) => {
    total += 1;
    if (comment.replies) {
      total += countComments(comment.replies);
    }
  });
  return total;
}

console.log("Total komentar (termasuk balasan):", countComments(comments)); // Output: 7
