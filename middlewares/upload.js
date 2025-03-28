// const path = require('path')
// const multer = require('multer')

// // console.log(__dirname)
// // console.log(path.join(__dirname, '../upload-pic'))
// const storage = multer.diskStorage({
// 	destination : (req, file, cb) => cb(null, path.join(__dirname, '../upload-pic')),
// 	filename : (req, file, cb) => {
// 		const {id} = req.user

// 		const fullFilename = `${id}_${Date.now()}${path.extname(file.originalname)}`
// 		cb(null, fullFilename)
// 	}
// })

// module.exports = multer({storage : storage})


const multer = require("multer");

const storage = multer.memoryStorage();

module.exports = multer({ storage: storage });
