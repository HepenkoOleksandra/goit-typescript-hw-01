type MyUser = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: MyUser, updateValue: Partial<MyUser>): MyUser {
    return { ...initialValues, ...updateValue };
}

const originalUser: MyUser = {
  name: 'Bob',
  surname: 'Rob',
  email: 'bobrob@gmail.com',
  password: '123654789',
}

const updateMyUser = createOrUpdateUser(originalUser, { 
  email: 'user@mail.com', 
  password: 'password123', 
});

// function createOrUpdateUser(initialValues: Partial<MyUser>): MyUser {
//   const defaultsUser = {
//     name: "",
//     surname: "",
//     email: "",
//     password: "",
// }

//   return { ... defaultsUser, ...initialValues };
// }


// createOrUpdateUser({
//   email: 'user@mail.com',
//   password: 'password123',
// });