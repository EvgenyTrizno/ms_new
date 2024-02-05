import { InputHTMLAttributes, useEffect, useRef } from "react";
import { IInput } from "@/shared/types";

import styles from "./styles.module.scss";
import { FieldValues, Path } from "react-hook-form";

export const Input = <T extends FieldValues>({
  type = "text",
  placeholder,
  width = "100%",
  borderColor,
  bt,
  br,
  bb,
  bl,
  btr,
  bbr,
  btl,
  bbl,
  bgcolor,
  disabled,
  onChange,
  onBlur,
  value,
  height,
  borderRadius,
  padding,
  name,
  className,
  onFocus,
  fz,
  border,
  hookFormData,
}: IInput<T> & InputHTMLAttributes<HTMLInputElement>) => {
  const ref = useRef<string[]>([]);

  useEffect(() => {
    const arr: string[] = [];

    if (className) {
      arr.push(className);
    }

    ref.current = arr;
  }, [className]);

  const combinedClassName = ref.current.join(" ");

  return (
    <>
      {hookFormData ? (
        <input
          className={`${styles.input} ${combinedClassName}`}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          style={{
            width: width,
            borderRadius: !borderRadius
              ? `${btr} ${bbr} ${bbl} ${btl}`
              : borderRadius,
            height,
            borderColor: borderColor,
            borderTop: bt,
            borderRight: br,
            borderBottom: bb,
            borderLeft: bl,
            backgroundColor: bgcolor,
            padding,
            fontSize: fz,
            border,
          }}
          onFocus={onFocus}
          value={value}
          {...hookFormData.register(
            hookFormData.registerName as Path<T>,
            hookFormData.options
          )}
        />
      ) : (
        <input
          className={`${styles.input} ${combinedClassName}`}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          style={{
            width: width,
            borderRadius: !borderRadius
              ? `${btr} ${bbr} ${bbl} ${btl}`
              : borderRadius,
            height,
            borderColor: borderColor,
            borderTop: bt,
            borderRight: br,
            borderBottom: bb,
            borderLeft: bl,
            backgroundColor: bgcolor,
            padding,
            fontSize: fz,
            border,
          }}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          name={name}
        />
      )}
    </>
  );
};
