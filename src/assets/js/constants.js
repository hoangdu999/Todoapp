const constants = {
  /**
   * List item sidebar
   * Author : NVDuong (05/1/2023)
   */
  SidebarMenu: [
    {
      text: "My Day",
      classIcon: "icon-overview",
      path: "/myday",
    },

    {
      text: "Important",
      classIcon: "icon-cash",
      path: "/important",
    },

    {
      text: "calendar",
      classIcon: "icon-deposits",
      path: "/calendar",
    },
  ],
  /**
   * List item pageSize
   * Author : NVDuong (05/1/2023)
   */
  listNavigateNumber: [
    {
      id: 10,
      value: "10 bản ghi trên 1 trang",
    },
    {
      id: 20,
      value: "20 bản ghi trên 1 trang",
    },
    {
      id: 30,
      value: "30 bản ghi trên 1 trang",
    },
    {
      id: 50,
      value: "50 bản ghi trên 1 trang",
    },
    {
      id: 100,
      value: "100 bản ghi trên 1 trang",
    },
  ],
  /**
   * List item pageSize
   * Author : NVDuong (05/1/2023)
   */
  listStatusFilterImport: [
    {
      id: 3,
      value: "Tất cả",
    },
    {
      id: 1,
      value: "Không hợp lệ",
    },
    {
      id: 2,
      value: "Hợp lệ",
    },
  ],
  /**
   * Regex
   * Author : NVDuong (05/1/2023)
   */
  // regexConstants: {
  // 	EmployeeCode: /^NV-[0-9]{1,17}$/,
  // 	Email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  // 	PhoneNumber: /((09|03|07|08|05)+([0-9]{8})\b)/,
  // 	PhoneNumberFixed: /((09|03|07|08|05)+([0-9]{8})\b)/,
  // },
};

export default constants;
