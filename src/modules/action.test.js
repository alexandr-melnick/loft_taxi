import { register, REGISTER } from './actions';

describe("test actions", () => {
  it('test register action', () => {
    const payload = { email: "test@test.com", password: "qwerty", name: "Name", surname: "surname" };
    const result = register(payload)
    expect(result.type).toEqual(REGISTER);
    expect(result.payload).toEqual(payload);
  });
})
