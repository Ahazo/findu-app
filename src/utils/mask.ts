export const CPFMask = (value: string) => {
  value = value.replace(/\D/g, ''); //Remove tudo o que não é dígito
  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4'); //Coloca hifen depois do quinto dígito
  return value;
};

export const CellphoneMask = (value: string) => {
  value = value.replace(/\D/g, ''); //Remove tudo o que não é dígito
  value = value.replace(/^(\d{2})(\d{5})(\d{4})/g, '($1)$2-$3'); //Coloca hifen depois do quinto dígito
  return value;
};
