type UserX = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserX>): UserX {
  return { name: 'hello', surname: 'world', email: 'a@a.a', password: 'a' };
}

// або так:

function createOrUpdateUser<T>(initialValues: T, newValues: Partial<T>): T {
  return { ...initialValues, ...newValues };
}

const testUser: UserX = { name: 'hello', surname: 'world', email: 'a@a.a', password: 'a' };

createOrUpdateUser<UserX>(testUser, {
  email: 'user@mail.com',
  password: 'password123',
});
