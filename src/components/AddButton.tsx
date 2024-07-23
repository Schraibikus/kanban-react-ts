import { useContext, useEffect, useRef, useState } from "react";
import { TaskContext } from "../Context/context";
import { ITask } from "../mockData";

export const buttonStyleNormal: string =
  "w-[100px] h-[30px] bg-transparent rounded-lg p-1 text-sm text-secondary-gray-text cursor-pointer transition-all duration-300 hover:bg-white hover:text-black disabled:bg-transparent disabled:text-secondary-gray-text disabled:cursor-not-allowed";

export default function AddButton(): JSX.Element {
  const buttonStyleSubmit: string =
    "w-[100px] h-[30px] bg-primary-blue rounded-lg p-1 text-sm text-white cursor-pointer transition-all duration-300 hover:bg-secondary-blue hover:text-primary-gray disabled:bg-transparent disabled:text-secondary-gray-text disabled:cursor-not-allowed";
  const inputStyle: string =
    "w-full h-[38px] mb-[15px] bg-white rounded-lg p-2 text-sm text-secondary-gray-text outline-none  placeholder:border-solid placeholder:border-t-0 placeholder:border-l-0 placeholder:border-r-0 placeholder:border-b-1 placeholder:text-black";
  const inputRef = useRef<HTMLInputElement>(null);
  const { tasks, addTask } = useContext(TaskContext);
  const [isInputShowed, setIsInputShowed] = useState(false);
  const [buttonText, setButtonText] = useState("+ Add Card");
  const [buttonClassName, setButtonClassName] = useState(buttonStyleNormal);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        if (inputRef.current.value) return;
        setIsInputShowed(false);
        setButtonText("+ Add Card");
        setButtonClassName(buttonStyleNormal);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    changeButton();
    if (isInputShowed && inputRef.current) {
      inputRef.current.focus();
    }
  }, [changeButton, isInputShowed]);

  function toggleInputHandler(): void {
    setIsInputShowed((prev) => !prev);

    if (isInputShowed) {
      createNewTask();
      setInputValue("");
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function changeButton(): void {
    if (isInputShowed === true) {
      setButtonText("Submit");
      setButtonClassName(buttonStyleSubmit);
    } else {
      setButtonText("+ Add Card");
      setButtonClassName(buttonStyleNormal);
    }
  }

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.target.value);
  }

  function createNewTask(): void {
    const newTask: ITask = {
      id: tasks.length,
      title: inputValue,
      status: "backlog",
      description: "",
    };

    addTask(newTask);
  }

  return (
    <>
      {isInputShowed ? (
        <input
          ref={inputRef}
          className={inputStyle}
          type="text"
          placeholder=" "
          value={inputValue}
          onChange={changeHandler}
          data-testid="input"
        />
      ) : null}

      <button
        className={buttonClassName}
        onClick={toggleInputHandler}
        disabled={isInputShowed && inputValue.length === 0}
        data-testid="addButton"
      >
        {buttonText}
      </button>
    </>
  );
}
