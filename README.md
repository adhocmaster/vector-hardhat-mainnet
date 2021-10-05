# Mainnet fork for vector stack

The chain id is set to 1 for hardhat. To run:

    npx hardhat node --hostname 0.0.0.0  --port 8545




To connect to this node from your local apps, use 1 as the chain id and http://localhost:8545 as the url. For apps running on docker containers, you need to use http://host.docker.internal:8545 instead of localhost one.
