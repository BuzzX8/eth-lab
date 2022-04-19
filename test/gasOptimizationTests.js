const GasTest = artifacts.require("Gas_Test");

contract("Gas Test", () => {
    it("Display gas usage", async () => {
        const contract = await GasTest.new();

        await contract.optionA();
        await contract.optionB();
        await contract.optionC();
        await contract.optionD();
    });
});