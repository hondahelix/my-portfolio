module.exports = function(app) {
      app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
      app.get("/contact", function(req, res) {
        if (req.user) {
         res.redirect("/jobs");
        }
        res.sendFile(path.join(__dirname, "../public/contact.html"));
      });
      app.get("/signup",  function(req, res) {
        res.sendFile(path.join(__dirname, "../public/portfolio.html"));
      });
    
    };