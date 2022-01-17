const router = require('express').Router();
const res = require('express/lib/response');
const sequelize = require('../config/connection');
const { Post, User, Comment, Account} = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: [
      'id',
      'post_text',
      'title',
      'user_id',
      
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id',],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      // marks the page as logginIn for if statements handlebars. 
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Account Get
router.get('/leaderboard', (req,res)=>{
  Account.findAll({
    attributes: [
      'id',
      'stock_name',
      'stock_price',
      'shares',
      'user_id',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
    
  })
  .then(dbPostData => {
    const accounts = dbPostData.map(post => post.get({ plain: true }));
    console.log(accounts)
    // marks the page as logginIn for if statements handlebars. 
    res.render('leaderboard', {
      accounts,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

//Account Post
router.post('/createaccount', (req, res) => {
  Account.create({
    stock_name: req.body.stock_name,
    stock_price: req.body.stock_price,
    shares: req.body.shares,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Profile GET
router.get('/Profile', (req,res)=>{
  Account.findAll({
    attributes: [
      'id',
      'stock_name',
      'stock_price',
      'shares',
      'user_id',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
    
  })
  .then(dbPostData => {
    const profiles = dbPostData.map(post => post.get({ plain: true }));
    console.log(profiles)
    // marks the page as logginIn for if statements handlebars. 
    res.render('profile', {
      profiles,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

// Profile POST
router.post('/Profile', (req,res)=>{
  Account.create({
    stock_name: req.body.stock_name,
    stock_price: req.body.stock_price,
    shares: req.body.shares,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})


// get single post
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_url',
      'title',
      'user_id',
     
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id',],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });
      // pass a session variable to the template as shown below
      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// render sign up page 
router.get('/signup', (req,res)=>{
  // User.create({
  //   username: req.body.username,
  //   email: req.body.email,
  //   password: req.body.password
  // })
  // .then(dbPostData => res.json(dbPostData))
  // .catch(err => {
  //   console.log(err);
  //   res.status(500).json(err);
  // });
  res.render('signup')
})

module.exports = router;

