import { render } from "@testing-library/react";
import { Submit } from "./Submit";
import '@testing-library/jest-dom/extend-expect';

describe("Submit", () => {
  const type = "button";
  const id = "id";
  const name = "name";
  const value = "value";
  const disabled = false;
  it('tests rendering', () => {
    const { container } = render(
          <Submit  type={type} id={id} name={name} disabled={disabled} value={value} readOnly/>
    )
    expect(container).toBeTruthy();
    expect(container).toHaveTextContent(value);
    expect(container.querySelector("button")).toHaveAttribute("name", name);
    expect(container.querySelector("button")).toHaveAttribute("id", id);
    expect(container.querySelector("button")).toHaveAttribute("type", type);
  });
})