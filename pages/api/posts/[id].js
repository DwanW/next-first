const data = [{id:1}, {id:2}, {id:3}];

export default function handler({ query: { id } }, res) {
  const filtered = data.filter(data => data.id === Number(id))

  if(filtered.length > 0) {
      res.status(200).json(filtered[0])
  } else {
      res.status(404).json({message: `post with the id of ${id} is not found`})
  }
}
