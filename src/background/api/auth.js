const account = {
  username: 'user1', password: '123456'
}

export const authenticate = ({ username, password }) =>
  new Promise((resolve, reject) => {
    if (account.username === username && account.password === password) {
      setTimeout(resolve, 3000, {
        username: 'user 1',
        password: '123456'
      })
    } else {
      setTimeout(reject, 3000, 'invalid credentials')
    }
  })
