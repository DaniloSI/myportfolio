import portfolio from '@/data/portfolio.yml';
import transformer from '@/utils/transformer';

export default function getPortfolio(lang: string) {
  return transformer(portfolio, lang ?? 'pt-BR');
}
