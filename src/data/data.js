const todoapp_data = {
  User: [
    {
      UserId: 1,
      UserName: "Hoang",
      Password: "1234567",
      Email: "hoangcanh@gmail.com",
    },

    {
      UserId: 2,
      UserName: "Du",
      Password: "1234567",
      Email: "hoangcanh@gmail.com",
    },

    {
      UserId: 3,
      UserName: "Canh",
      Password: "1234567",
      Email: "hoangcanh@gmail.com",
    },
  ],
  /**
   * List item pageSize
   *
   */
  MyStacks: [
    {
      StackId: 1,
      UserId: 1,
      TaskName: "Meeting",
      Description: "Meeting cùng các sếp",
      Dealine: "20/05/2024",
      Priority: "Important",
      Status: "Chưa hoàn thành",
    },
    {
      StackId: 2,
      UserId: 1,
      TaskName: "Learning",
      Description: "Learning cùng các sếp",
      Dealine: "20/05/2024",
      Priority: "Important",
      Status: "Chưa hoàn thành",
    },
    {
      StackId: 3,
      UserId: 1,
      TaskName: "Shopping",
      Description: "Shopping cùng các sếp",
      Dealine: "20/05/2024",
      Priority: "Important",
      Status: "Chưa hoàn thành",
    },
  ],
};

export default constants;
