const Waifu = artifacts.require("Waifus");

module.exports = function(deployer) {
  deployer.deploy(Waifu);
};

