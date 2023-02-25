import { useField } from "@unform/core";
import { ReactNode, useEffect, useRef } from "react";
import * as S from "./styles";
import { HTMLInputTypeAttribute } from "react";

interface IInputProps {
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  name: string;
  icon?: ReactNode;
}

export default function Input({ label, type, placeholder, name, icon, ...rest }: IInputProps) {
  const inputRef = useRef(null);
  const { registerField, defaultValue, fieldName } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);
  return (
    <S.InputWrapper>
      <label htmlFor={name}>{label}</label>
      <div className="inputContainer">
        {icon}
        <input type={type} placeholder={placeholder} name={name} ref={inputRef} {...rest} />
      </div>
    </S.InputWrapper>
  );
}
