const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      next(res.redirect('/login'));
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  