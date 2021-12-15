import crypto from 'crypto';
const pass = 'secret'

export class EncryptClass{

  static  generateKeys(){
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 520,
      publicKeyEncoding: {
          type: 'spki',
          format: 'pem'
      },
      privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
      cipher: 'aes-256-cbc',
      passphrase: pass,
      }
  });
    return {
      publicKey,
      privateKey
    }
  }

  static async encryptData() {
    const location = { teste: "teste de mesagem criptografada"}
    const {privateKey, publicKey} = this.generateKeys();  
    const encryptLocation = crypto.privateEncrypt({
        key: privateKey,
        passphrase: pass,
    }, Buffer.from(JSON.stringify(location), 'utf-8')).toString('base64')
    return { data: encryptLocation, publicKey: publicKey }
  }

  static async decript(data: any, key: any) {
    const decriptLocation = crypto.publicDecrypt(key, Buffer.from(data, 'base64'));
    return {
      location: JSON.parse(decriptLocation.toString('utf-8'))
    }
  }
}