const bip39 = require('bip39')
const hdkey = require("ethereumjs-wallet/hdkey");

// import hdkey from 'ethereumjs-wallet/hdkey'

exports.getMnemonic = async () => {
  // console.log('test')
  const mnemonic = await bip39.generateMnemonic()
  const seed = bip39.mnemonicToSeed(mnemonic)
  return {
    mnemonic,
    seed: seed.toString('hex')
  }  
}

exports.recoveryByMnemonic = async mnemonic => {
  const seed = await bip39.mnemonicToSeed(mnemonic); // seed === entropy
  const rootKey = hdkey.fromMasterSeed(seed);
  const hardenedKey = rootKey.derivePath("m/44'/60'/0'/0");
  const childKey = hardenedKey.deriveChild(0); // 값조정 가능
  const wallet = childKey.getWallet();
  const address = wallet.getAddress();
  const privateKey = wallet.getPrivateKey();

  return {
    address: address.toString("hex"),
    privateKey: privateKey.toString("hex")
  }
}

// exports.newAccount = (seed, index) => {
//   const rootKey = hdkey.fromMasterSeed(seed);
//   const hardenedKey = rootKey.derivePath("m/44'/60'/0'/0");
//   const childKey = hardenedKey.deriveChild(0); // 값조정 가능
//   const wallet = childKey.getWallet();
//   const address = wallet.getAddress();
//   const privateKey = wallet.getPrivateKey();

//   return {
//     address,
//     privateKey
//   }
// }