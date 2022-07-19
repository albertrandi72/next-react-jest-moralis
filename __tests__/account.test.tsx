import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import Account from "../components/Account";
let account: { address: any } = { address: null };
let mockAuthFn = jest.fn();
jest.mock('react-moralis', () => {
  return {
    useMoralis: jest.fn(() => ({
      account: account.address,
      authenticate: mockAuthFn,
      logout: () => { account.address = null }
    }))
  }
})
describe("Home", () => {
  it("show connect button", () => {
    const { getByText } = render(<Account />);
    expect(getByText('connect')).toBeTruthy()
  });
  it("show show account address", () => {
    const { getByText } = render(<Account />);
    getByText('connect').click();
    expect(mockAuthFn).toBeCalled
  })
  it("show disconnect button", () => {
    account.address = "0xabc"
    const { getByText } = render(<Account />);
    expect(getByText('disconnect')).toBeTruthy()
  })
  it("show address", () => {
    account.address = "0xabc"
    const { getByText } = render(<Account />);
    expect(getByText('0xabc')).toBeTruthy()
  })
});
