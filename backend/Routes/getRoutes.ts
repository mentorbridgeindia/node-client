export const getRoutes = () => {
  // Fetch routes from Mongo DB

  return [
    {
      id: "1",
      applicationPath: "/stuPro",
      url: "/hello",
      method: "GET",
      response: { message: "Hello World!" },
    },
    {
      id: "2",
      applicationPath: "/stuPro",
      url: "/user",
      method: "POST",
      response: { message: "User created successfully" },
    },
    {
      id: "3",
      applicationPath: "/stuPro",
      url: "/user",
      method: "GET",
      response: { message: "User fetched successfully" },
    },
    {
      id: "4",
      applicationPath: "/stuPro",
      url: "/user",
      method: "PUT",
      response: { message: "User updated successfully" },
    },
    {
      id: "5",
      applicationPath: "/stuPro",
      url: "/user",
      method: "DELETE",
      response: { message: "User deleted successfully" },
    },
    {
      id: "6",
      applicationPath: "/stuPro",
      url: "/user/login",
      method: "POST",
      response: { message: "User logged in successfully" },
    },
  ];
};
