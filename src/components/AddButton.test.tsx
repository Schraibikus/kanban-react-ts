import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import AddButton from "./AddButton";
import React from "react";

describe("AddButton", () => {
  it("should render the button with the correct text", () => {
    render(<AddButton />);
    expect(screen.getByText("+ Add Card")).toBeInTheDocument();
  });

  it("should show the input when the button is clicked", () => {
    render(<AddButton />);
    fireEvent.click(screen.getByText("+ Add Card"));
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  it("should hide the input and show the button again when the input is empty and the button is clicked", async () => {
    render(<AddButton />);
    fireEvent.click(screen.getByText("+ Add Card"));
    fireEvent.click(screen.getByText("+ Add Card"));
    await waitFor(() => {
      expect(screen.queryByTestId("input")).not.toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(screen.getByText("+ Add Card")).toBeInTheDocument();
    });
  });

  it("should submit the task when the input is not empty and the button is clicked", async () => {
    const mockAddTask = jest.fn();
    jest.spyOn(React, "useContext").mockReturnValue({
      tasks: [],
      addTask: mockAddTask,
    });
    render(<AddButton />);
    fireEvent.click(screen.getByText("+ Add Card"));
    fireEvent.change(screen.getByTestId("input"), {
      target: { value: "New Task" },
    });
    fireEvent.click(screen.getByText("Submit"));
    await waitFor(() => {
      expect(mockAddTask).toHaveBeenCalledWith({
        id: 0,
        title: "New Task",
        status: "backlog",
        description: "",
      });
    });
  });

  it("should not submit the task when the input is empty and the button is clicked", async () => {
    const mockAddTask = jest.fn();
    jest.spyOn(React, "useContext").mockReturnValue({
      tasks: [],
      addTask: mockAddTask,
    });
    render(<AddButton />);
    fireEvent.click(screen.getByText("+ Add Card"));
    fireEvent.click(screen.getByText("Submit"));
    await waitFor(() => {
      expect(mockAddTask).not.toHaveBeenCalled();
    });
  });
});
