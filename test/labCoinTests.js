const LabCoin = artifacts.require("LabCoin");
const {
    expectEvent,
    expectRevert
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

        let tx = await tokenContract.transfer(bob, transferAmount);
        console.log(`Gas used: ${tx.receipt.gasUsed}`);

        const bobBalance = await tokenContract.balanceOf(bob);
        assert.equal(transferAmount, bobBalance);
        expectEvent(tx, 'Transfer', { from: alice, to: bob, value: transferAmount });
    });

    it("transfer reverts tx", async () => {
        let initialAmount = 1000;
        let tokenContract = await LabCoin.new(alice, initialAmount);

        let promise = tokenContract.transfer(bob, initialAmount + 1);

        await expectRevert.unspecified(promise);
        console.log(promise.tx);
    });
});