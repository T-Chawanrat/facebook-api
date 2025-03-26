const bcrypt = require('bcryptjs')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const hashedPassword = bcrypt.hashSync('1111', 10)

const userData = [
	{
		firstName: 'Armin', lastName: 'Arlert', password: hashedPassword, email: 'aaa@gmail.com',
		profileImage: 'https://www.svgrepo.com/show/420364/avatar-male-man.svg'
	},
	{
		firstName: 'Reiner', lastName: 'Braun', password: hashedPassword, email: 'bbb@gmail.com',
		profileImage: 'https://www.svgrepo.com/show/420319/actor-chaplin-comedy.svg'
	},
	{
		firstName: 'Annie', lastName: 'Leonhart', password: hashedPassword, mobile: '0812345678',
		profileImage: 'https://www.svgrepo.com/show/420327/avatar-child-girl.svg'
	},
	{
		firstName: 'Eren', lastName: 'Yeager', password: hashedPassword, mobile: '0823456789',
		profileImage: 'https://www.svgrepo.com/show/420314/builder-helmet-worker.svg'
	},
]

console.log('DB seed...')

async function run() {
	await prisma.user.createMany({ data: userData })
}

run()
