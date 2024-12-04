import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import RegisterView from "@/views/RegisterView.vue";

describe("當會員資料有缺漏時", () => {
  it("沒填帳號時，會出現錯誤訊息", async () => {
    const wrapper = mount(RegisterView);
    // Arrange
    const account = "";
    const accountInput = wrapper.find('[data-test="account"]');
    // Act
    await accountInput.setValue(account);
    await wrapper.find("form").trigger("submit");
    // Assert
    expect(wrapper.find('[data-test="error"]').text()).toBe("帳號未填寫");
  });

  it("沒填密碼時，會出現錯誤訊息", async () => {
    const wrapper = mount(RegisterView);
    // Arrange
    const password = "";
    const passwordInput = wrapper.find('[data-test="password"]');
    const account = "11111";
    const accountInput = wrapper.find('[data-test="account"]');
    let message = "";
    // Act
    await accountInput.setValue(account);
    await passwordInput.setValue(password);
    await wrapper.find("form").trigger("submit");
    message = await wrapper.find('[data-test="error"]').text();
    // Assert
    expect(wrapper.find('[data-test="error"]').text()).toBe("密碼未填寫");
    // assert.equal(message, "密碼未填寫");
  });

  it("沒填寫email時，會出現錯誤訊息", async () => {
    const wrapper = mount(RegisterView);
    // Arrange
    const email = "";
    const emailInput = wrapper.find('[data-test="email"]');
    const password = "aB222222";
    const passwordInput = wrapper.find('[data-test="password"]');
    const account = "11111";
    const accountInput = wrapper.find('[data-test="account"]');

    // Act
    await accountInput.setValue(account);
    await passwordInput.setValue(password);
    await emailInput.setValue(email);
    await wrapper.find("form").trigger("submit");

    // Assert
    expect(wrapper.find('[data-test="error"]').text()).to.equal("信箱未填寫");
  });
  it("沒有電話時，會出現錯誤訊息", async () => {
    const wrapper = mount(RegisterView);
    // Arrange
    const phone = "";
    const phoneInput = wrapper.find('[data-test="phone"]');
    const password = "aB222222";
    const passwordInput = wrapper.find('[data-test="password"]');
    const account = "11111";
    const accountInput = wrapper.find('[data-test="account"]');
    const email = "11111";
    const emailInput = wrapper.find('[data-test="email"]');
    // Act
    await accountInput.setValue(account);
    await passwordInput.setValue(password);
    await emailInput.setValue(email);
    await phoneInput.setValue(phone);
    await wrapper.find("form").trigger("submit");
    // Assert
    expect(wrapper.find('[data-test="error"]').text()).to.equal("手機未填寫");
  });
});

describe("會員密碼限制", () => {
  it("密碼需包含英文與數字", async () => {
    const wrapper = mount(RegisterView);
    // Arrange
    const password = "123123123";
    const passwordInput = wrapper.find('[data-test="password"]');
    const account = "11111";
    const accountInput = wrapper.find('[data-test="account"]');
    // Act
    await accountInput.setValue(account);
    await passwordInput.setValue(password);
    await wrapper.find("form").trigger("submit");
    // Assert
    expect(wrapper.find('[data-test="error"]').text()).to.equal(
      "密碼需包含英文與數字"
    );
  });
  it("密碼長度需超過 8 個字元", async () => {
    const wrapper = mount(RegisterView);
    // Arrange
    const password = "aB1234p";
    const passwordInput = wrapper.find('[data-test="password"]');
    const account = "11111";
    const accountInput = wrapper.find('[data-test="account"]');

    // Act
    await accountInput.setValue(account);
    await passwordInput.setValue(password);
    await wrapper.find("form").trigger("submit");
    // Assert
    expect(wrapper.find('[data-test="error"]').text()).to.equal(
      "密碼長度需超過 8 個字元"
    );
  });
});
describe("當會員的資料都有填寫且正確時", () => {
  it("會出現成功訊息", async () => {
    const wrapper = mount(RegisterView);
    // Arrange
    const password = "aB12312333";
    const passwordInput = wrapper.find('[data-test="password"]');
    const account = "11111";
    const accountInput = wrapper.find('[data-test="account"]');
    const email = "11111@gmail.com";
    const emailInput = wrapper.find('[data-test="email"]');
    const phone = "0912345678";
    const phoneInput = wrapper.find('[data-test="phone"]');
    // Act
    await accountInput.setValue(account);
    await passwordInput.setValue(password);
    await emailInput.setValue(email);
    await phoneInput.setValue(phone);
    await wrapper.find("form").trigger("submit");
    // Assert
    expect(wrapper.find('[data-test="success-message"]').text()).toBe(
      "註冊成功"
    );
  });
});
