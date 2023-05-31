const hre = require('hardhat');

async function main() {
  const Chai = await hre.ethers.getContractFactory('Chai');
  const chai = await Chai.deploy();

  await chai.deployed();

  console.log(`deployed to ${chai.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
