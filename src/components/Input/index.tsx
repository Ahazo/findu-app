import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { TextInput, TextInputProps, ViewStyle } from 'react-native';
import { FieldErrors } from 'react-hook-form';
import { ContainerInput, InputText, InputError } from './styles';

import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

export interface InputHandleInterface {
  focus: () => void;
}

interface IInputProps extends TextInputProps {
  iconName?: any;
  inputField: string;
  iconColor: string;
  iconSize: number;
  placeholder: string;
  isSecure?: boolean;
  inputValue: any;
	keyboardType?: "numeric" | "default" | "email-address";
  errors: FieldErrors;
}

const Input: React.ForwardRefRenderFunction<
  InputHandleInterface,
  IInputProps
> = (
  {
    inputField,
    iconName,
    iconColor,
    iconSize,
    placeholder,
    inputValue,
    errors,
		keyboardType,
    ...rest
  },
  ref,
) => {
  const inputElementRef = useRef<TextInput>(null);

  // use that to use ref inside a child component
  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus();
    },
  }));

  return (
    <>
      <ContainerInput error={Boolean(errors[inputField])}>
        {iconName && (
          <Feather
            name={iconName}
            color={Boolean(errors[inputField]) ? '#fc5663' : iconColor}
            size={iconSize}
          />
        )}
        <InputText
					keyboardType={keyboardType ? keyboardType : "default"}
          placeholder={placeholder}
          value={inputValue}
          ref={inputElementRef}
          {...rest}
          placeholderTextColor={
            errors[inputField] ? colors.red : colors.body_light
          }
        />
      </ContainerInput>
      {/* Erro de input */}
      {errors[inputField] && (
        <InputError>{errors[inputField].message}</InputError>
      )}
    </>
  );
};

export default forwardRef(Input);
