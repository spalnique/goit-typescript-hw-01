type UserX = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserX>): UserX {
  return { name: 'hello', surname: 'world', email: 'a@a.a', password: 'a' };
}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});
