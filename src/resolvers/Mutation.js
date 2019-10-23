const { prisma } = require('../prisma/generated/prisma-client')

const Mutation = {
  signup: async (parent, { email, password }, context) => {
    console.log('SIGNUP')

    const user = await prisma.createUser({
      email,
      password,
    })

    console.log(user)

    return user
  },
}

module.exports = Mutation
