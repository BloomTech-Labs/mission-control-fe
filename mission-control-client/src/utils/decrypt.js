import * as crypto from 'crypto-js';

const decrypt = () => {
  return crypto.AES.decrypt(localStorage.getItem("role"), process.env.REACT_APP_ROLE_KEY).toString(crypto.enc.Utf8)
}

export default decrypt;