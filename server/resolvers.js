const { v4: uuid } = require('uuid');

const jobs = {};

module.exports = {
  Mutation: {
    convertFile: async (_, { file, target }) => {
      const id = uuid();
      jobs[id] = { id, status: 'PENDING', downloadUrl: null };
      // TODO: enqueue conversion task
      return jobs[id];
    },
  },
  Query: {
    job: (_, { id }) => jobs[id] || null,
  },
};