export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "Quais serviços oferece?",
    answer:
      "Controle de pragas, limpeza e desinfecção de reservatórios, limpeza e conservação de poços, serviços de ETA e ETE e análise de água.",
  },
  {
    question: "Como solicitar um orçamento?",
    answer:
      "Preencha o formulário com o serviço desejado e os detalhes do local. Essas informações ajudam a equipe a definir o escopo e a necessidade de avaliação técnica.",
  },
  {
    question: "Preciso preparar o local antes do atendimento?",
    answer:
      "A preparação varia conforme o serviço. Confirme com a equipe as orientações sobre acesso ao local, alimentos, animais, reservatórios e eventual interrupção do uso da água.",
  },
  {
    question: "A limpeza resolve qualquer alteração na água?",
    answer:
      "A limpeza e a desinfecção, isoladamente, não corrigem todas as alterações na qualidade da água. A origem da água, as instalações e o tratamento também precisam ser avaliados.",
  },
  {
    question: "Quais documentos acompanham o serviço?",
    answer:
      "Confirme na proposta a documentação incluída no atendimento, como relatório, certificado, análise de água e responsabilidade técnica, conforme o escopo contratado.",
  },
  {
    question: "Atendem empresas e condomínios?",
    answer:
      "Você pode solicitar uma avaliação para residências, empresas e condomínios. Informe a localização e as características do imóvel para confirmar a disponibilidade de atendimento.",
  },
];
