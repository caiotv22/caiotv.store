import axios from 'axios';
import { toast } from 'react-toastify';

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

export async function Login(bodyContent) {
  let headersList = {
    Accept: '*/*',
    'Content-Type': 'application/json',
  };

  let reqOptions = {
    url: `${process.env.NEXT_PUBLIC_API_URL}/login`,
    method: 'POST',
    headers: headersList,
    data: bodyContent,
  };

  try {
    let { data } = await axios.request(reqOptions);
    notifySuccess('Logado com sucesso!');
    return data;
  } catch (error) {
    return notifyError('Usuário ou senha inválida!');
  }
}

export async function getGitHubUserInfo(token) {
  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
  };

  let reqOptions = {
    url: `${process.env.NEXT_PUBLIC_API_URL}/github_infos`,
    method: 'GET',
    headers: headersList,
  };

  try {
    let response = await axios.request(reqOptions);
    return response.data;
  } catch (error) {
    return notifyError('Serviço indisponível no momento.');
  }
}
