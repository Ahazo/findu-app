export const CPFMask = (value: string) => {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  return value;
};

export const CellphoneMask = (value: string) => {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d{5})(\d{4})/g, '($1)$2-$3'); 
  return value;
};

export const CEPMask = (value: string) => {
	value = value.replace(/\D/g, '');
	value = value.replace(/^(\d{5})(\d)/, "$1-$2")

	return value;
}
