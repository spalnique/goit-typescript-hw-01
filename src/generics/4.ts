type UserX = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserX>): void {}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});
