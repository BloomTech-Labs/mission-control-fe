import * as crypto from 'crypto-js';

const encrypt = (role, key) => {
  return crypto.AES.encrypt(role, key).toString()
}

export default encrypt;