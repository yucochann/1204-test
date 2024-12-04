import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import UserProfileView from "@/views/UserProfileView.vue";

describe("當會員登入時", () => {
  it("畫面可顯示會員資料按鈕", () => {
    // Arrange
    const wrapper = mount(UserProfileView, {
      props: {
        isLoggedIn: true,
      },
    });

    // Assert
    expect(wrapper.find('[data-test="profile-btn"]').exists()).toBe(true);
  });
  it("需顯示正確的會員資料", () => {
    const wrapper = mount(UserProfileView, {
      props: {
        isLoggedIn: true,
        showProfileData: true,
      },
    });
  });
});
