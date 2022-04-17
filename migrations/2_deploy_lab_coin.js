const LabCoin = artifacts.require("LabCoin");

module.exports = (deployer, network) => {

    if (network == 'test') {
        return;
    }

    deployer.deploy(LabCoin);
}