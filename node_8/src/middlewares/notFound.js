const notFound = (req, res) => {
  const { isAuthenticated } = req.session;
  res.render("error", {
    title: "404 Page not found((",
    isAuth: isAuthenticated,
  });
};

module.exports = notFound;
