const LabCoin = artifacts.require("LabCoin");
const {
    expectEvent
} = require('@openzeppelin/test-helpers');

require('@openzeppelin/test-helpers/configure')({
    provider: web3.currentProvider,
    singletons: {
        abstraction: 'truffle',
    },
});

contract("LabCoin", addresses => {
    const [alice, bob] = addresses;
    let tokenContract;

    before(async () => tokenContract = await LabCoin.new(alice, 1_000_000));

    it("transfer token test", async () => {
        const transferAmount = '12345';

        let receipt = await tokenContract.transfer(bob, transferAmount);

        const bobBalance = await tokenContract.balanceOf(bob);
        assert.equal(transferAmount, bobBalance);
        expectEvent(receipt, 'Transfer', { from: alice, to: bob, value: transferAmount });
    });
});