export const getNoteState = async (req, res, redis) => {
  const { noteId } = req.params;
  const content = await redis.get(`note:${noteId}`);
  res.json({
    status: "success",
    message: "Note state fetched",
    data: { noteId, content: content || "" }
  });
};