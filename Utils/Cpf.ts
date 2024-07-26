export default class Cpf {
  static formatar(cpf: string): string {
    // Verifica se o CPF tem mais de 14 caracteres
    if (cpf.length > 14) {
      return cpf.slice(0, 14);
    }

    // Remove todos os caracteres não numéricos
    const cpfLimpo = cpf.replace(/\D+/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpfLimpo.length !== 11) {
      return cpfLimpo;
    }

    // Formata o CPF
    const cpfFormatado = `${cpfLimpo.slice(0, 3)}.${cpfLimpo.slice(3, 6)}.${cpfLimpo.slice(6, 9)}-${cpfLimpo.slice(9, 11)}`;

    return cpfFormatado;
  }

  static desformatar(cpf: string): string {
    // Remove todos os caracteres não numéricos
    return cpf.replace(/\D+/g, '');
  }
}