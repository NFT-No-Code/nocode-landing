import { useField } from "@unform/core";
import { useEffect, useRef } from "react";
import * as S from "./styles";

interface ITextAreaProps {
  label: string;
  placeholder: string;
  name: string;
}

export default function TextArea({ label, placeholder, name, ...rest }: ITextAreaProps) {
  const textareaRef = useRef(null);
  const { registerField, error, fieldName } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef,
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
    <S.TextAreaWrapper>
      <label htmlFor={name}>{label}</label>
      <textarea
        placeholder={placeholder}
        name={name}
        ref={textareaRef}
        rows={6}
        {...rest}
        className={error && "error"}
      />
      {error && <small className="errorMessage">{error}</small>}
    </S.TextAreaWrapper>
  );
}
