const GasTest = artifacts.require("Gas_Test");

contract("Gas Test", () => {
    it("Display gas usage", async () => {
        const contract = await GasTest.new();

        let tx1 = await contract.optionA();
        let tx2 = await contract.optionB();
        let tx3 = await contract.optionC();
        let tx4 = await contract.optionD();
        
        console.log(`Option A: ${tx1.receipt.gasUsed}`);
        console.log(`Option B: ${tx2.receipt.gasUsed}`);
        console.log(`Option C: ${tx3.receipt.gasUsed}`);
        console.log(`Option D: ${tx4.receipt.gasUsed}`);
    });
});