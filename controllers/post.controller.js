const getPosts = (req, res) => {
  res.status(200).send(`Get all posts filtered by "${req.query.title}"`);
};

const getPost = (req, res) => {
  res.status(201).send("A Post");
};

const createPost = (req, res) => {
  res.status(200).send("Create a Post");
};

const updatePost = (req, res) => {
  res.status(201).send(`Post with ID ${req.params.postId}`);
};

const deletePost = (req, res) => {
  res.status(200).send(`Delete with ID ${req.params.postId}`);
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
