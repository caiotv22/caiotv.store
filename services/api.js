import axios from 'axios';
var base64 = require('base-64');
var utf8 = require('utf8');

const user = 'caiotv22/caiotv.store';
const token = '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';

export async function getGitHubInfo(sha) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    let { data } = await axios.get(`https://api.github.com/repos/${user}/contents/i18n/locales/pt-br.json`, config);
    if (sha) {
      return data.sha;
    }
    const bytes = base64.decode(data.content);
    const text = utf8.decode(bytes);
    return text;
  } catch (error) {
    console.log(error);
  }
}

export async function updateGitHubJson(value, auth, message) {
  const objToJson = JSON.stringify(value, null, 2);
  const bytes = utf8.encode(objToJson);
  const encoded = base64.encode(bytes);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const body = JSON.stringify({
    message: message,
    content: encoded,
    sha: auth,
  });
  try {
    let { data } = await axios.put(
      `https://api.github.com/repos/${user}/contents/i18n/locales/pt-br.json`,
      body,
      config
    );
    alert('Alterado com sucesso!');
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createGitHubFile(dir, img, auth, message) {
  return dir, img, auth, message;
  // // const objToJson = JSON.stringify(newObject, null, 2);
  // // const bytes = utf8.encode(objToJson);
  // const encoded = base64.encode(img);
  // console.log(encoded);
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };
  // const body = JSON.stringify({
  //   message: message,
  //   content: encoded,
  //   sha: auth,
  // });
  // try {
  //   let { data } = await axios.put(`https://api.github.com/repos/${user}/contents/${dir}`, body, config);
  //   alert('Alterado com sucesso!');
  //   return data;
  // } catch (error) {
  //   return;
  // }
}
