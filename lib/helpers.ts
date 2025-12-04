export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("pt-BR");
};

export const formatDateTime = (date: string, time: string): string => {
  return `${formatDate(date)} às ${time}`;
};

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
