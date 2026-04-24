type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const user: User = {
  name: "John",
  surname: "Doe",
  email: "john.doe@example.com",
  password: "password123",
};

function createOrUpdateUser(initialValues: Partial<User>) {
  return {
    ...user,
    ...initialValues,
  };
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });
