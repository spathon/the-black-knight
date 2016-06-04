
module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (req, reply) => reply({ message: 'None shall pass!' }),
    config: {
      description: 'The welcome message',
      notes: 'Just returns a messsage about visiting the api main route'
    }
  }
];
