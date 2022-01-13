const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?', 
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        user_id: 2,
        post_id: 3
    },
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;