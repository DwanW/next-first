const data = [1,2,3]

export default function handler(req,res) {
    res.status(200).json(data)
}