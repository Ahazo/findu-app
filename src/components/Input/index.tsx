import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { TextInput, TextInputProps, ViewStyle } from 'react-native';
import { FieldErrors } from 'react-hook-form';
import { ContainerInput, InputText, InputError } from './styles';

import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

import { CEPMask, CellphoneMask, CPFMask } from '../../utils/mask';

export interface IInputHandle {
  focus: () => void;
}

interface IInputProps extends TextInputProps {
  iconName?: any;
  inputField: string;
  iconColor?: string;
  iconSize?: number;
  placeholder: string;
  isSecure?: boolean;
  inputValue: any;
	keyboardType?: "numeric" | "default" | "email-address";
  errors: FieldErrors;
	mask?: "cep" | "cpf" | "cellphone";
	inputMaskChange: any;	
	isMultiline?: boolean;
}

const Input: React.ForwardRefRenderFunction<
  IInputHandle,
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
		mask,
		inputMaskChange,
		isMultiline,
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

	function handleChange(value: string) {
		if (mask === 'cep') {
			value = CEPMask(value);
		} else if (mask === 'cpf') {
			value = CPFMask(value);
		} else if (mask === 'cellphone') {
			value = CellphoneMask(value);
		}

		inputMaskChange(value);
	}

  return (
    <>
      <ContainerInput error={Boolean(errors[inputField])} isMultiline={isMultiline}>
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
					onChangeText={text => handleChange(text)}
          {...rest}
          placeholderTextColor={
            errors[inputField] ? colors.red : colors.body_light
          }
					multiline={isMultiline}
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
