const { prisma } = require('../prisma/generated/prisma-client')

const Mutation = {
  signup: async (parent, { email, password }, context) => {
    const user = await prisma.createUser({
      email,
      password,
    })
    const token = `someJWT123`
    return {
      user,
      token,
    }
  },
}

module.exports = Mutation
