const authCheck = (req, res, next) => {
  const { isAuthenticated } = req.session;
  if (isAuthenticated) {
    next();
  } else {
    res.render("error", { title: "403 Авторизуйтесь" });
  }
};

module.exports = authCheck;
