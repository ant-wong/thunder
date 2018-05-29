exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function() {
      return knex('users').insert([
        {
          id: 1, 
          email: 'ant@gmail.com',
          hashed_password: 'igq47bygiwy3g4oq3y4bwrf',
          username: 'uncle a.',
          title: 'Rapper',
          genre: 'Hip-hop/Trap'
        },
        {
          id: 2, 
          email: 'basil@gmail.com',
          hashed_password: 'nvio4bqb4tsdgf4oq3y4b',
          username: 'b-easy.',
          title: 'DJ',
          genre: 'Norwegian Metal'
        }
      ])
    })
}