const hre = require('hardhat');

async function main() {
  const CertWork = await hre.ethers.getContractFactory('CertWork');
  const certWork = await CertWork.deploy();

  await certWork.deployed();

  console.log('CertWork deployed to:', certWork.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
