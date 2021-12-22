require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remain million good prize surge tray'; 
let testAccounts = [
"0x010468e3892ddc1f00c4a0e69c2b07f1407cc23eb8c0d398a07563627dd58c75",
"0x2229e024b1ab5f8eb6a02dc32859f6bd0af3ed631ee2b75801fc10a2e966a6d5",
"0x4bd9e6920dbd392f64ec9ff74d0c17c86083b92a5ee79cb2184551960066e941",
"0x41e36265de88ccc693dd802d56d737f2fa619529497a18bd90fa7cf03b2efa26",
"0xeb025f1e794a5f674dd50eca3346c3ebf38e1f026a29e4e47e8947bf38f646df",
"0xb2efb99a42301b795675efb78abbd0a97e7f19e2eb236f29aa0c51e0be13a7b0",
"0x92de79518407aafb720917a03542a2c3250c20c15996c8d30581044e3eded430",
"0xaa87ffbfc87dbdcecc31e186a45fdd53a00b68312c9c5f4661f5d7b83b1ef188",
"0x2de303f8bb25cc75e317704c92ea7d56b6598048b30f928abda012b4ca5d1631",
"0x9a5e63a199b930919e080662e41d4799645535d4490b0d852aee7ba0915e6d3b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

