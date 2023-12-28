const hre = require("hardhat");

async function main() {
  const latte = await hre.ethers.deployContract("Latte");

  await latte.waitForDeployment();

  console.log(
    `Smart Contract deployed to ${latte.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
