import axios from 'axios';
import { toast } from 'react-toastify';
var base64 = require('base-64');
var utf8 = require('utf8');

const notifySuccess = (msg) => {
  toast.success(msg, {
    toastId: 'custom_id-yes',
    position: 'bottom-right',
    theme: 'colored',
  });
};

const notifyError = (msg) => {
  toast.error(msg, {
    toastId: 'custom_id-yes',
    position: 'bottom-right',
    theme: 'colored',
  });
};

export async function getGitHubInfo(sha, gitHubUserInfo) {
  const config = {
    headers: { Authorization: `Bearer ${gitHubUserInfo?.github_token}` },
  };
  try {
    let { data } = await axios.get(
      `https://api.github.com/repos/${gitHubUserInfo?.repository_route}/contents/i18n/locales/pt-br.json`,
      config
    );
    if (sha) {
      return data.sha;
    }
    const bytes = base64.decode(data.content);
    const text = utf8.decode(bytes);
    return text;
  } catch (error) {
    return notifyError('Serviço indisponível no momento.');
  }
}

export async function updateGitHubJson(value, auth, message, gitHubUserInfo) {
  const objToJson = JSON.stringify(value, null, 2);
  const bytes = utf8.encode(objToJson);
  const encoded = base64.encode(bytes);
  const config = {
    headers: { Authorization: `Bearer ${gitHubUserInfo?.github_token}` },
  };
  const body = JSON.stringify({
    message: message,
    content: encoded,
    sha: auth,
  });
  try {
    let { data } = await axios.put(
      `https://api.github.com/repos/${gitHubUserInfo?.repository_route}/contents/i18n/locales/pt-br.json`,
      body,
      config
    );
    notifySuccess('Alterações salvas com sucesso!');
    return data;
  } catch (error) {
    return notifyError('Erro ao salvar, tente novamnete mais tarde.');
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
