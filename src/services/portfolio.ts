import transformer from '@/utils/transformer';
import yaml from 'js-yaml';

export default async function getPortfolio(lang: string) {
  const gistId = 'b5c23385c7af2b048581c18d1ddbac47';
  const lastCommitVersion = await fetch(`https://api.github.com/gists/${gistId}/commits`)
    .then((res) => res.json())
    .then((commits) => commits[0].version);

  const portfolio = await fetch(`https://gist.githubusercontent.com/DaniloSI/${gistId}/raw/${lastCommitVersion}/portfolio.yml`)
    .then((res) => res.blob())
    .then((blob) => blob.text())
    .then((yamlAsString) => yaml.load(yamlAsString))
    .then((json) => transformer(json, lang ?? 'pt-BR'));

  return portfolio;
}
