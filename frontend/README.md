This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-fuels`](https://github.com/FuelLabs/fuels-ts/tree/master/packages/create-fuels).

## Getting Started

1. Start the Fuel development server. This server will start a local Fuel node and provide hot-reloading for your smart contracts.

```bash
npm run fuels:dev
```

2. Start the Next.js development server.

```bash
npm run dev
```

The dependency updates require Node.js 22.12+ (or Node.js 20.19.x), Fuel SDK 0.101.1, `forc` 0.68.1 and `fuel-core` 0.43.1. Install the pinned Fuel binaries via `fuelup` before `npm run build` or `npm test -- --run`; `npm run build` recompiles Sway contracts and regenerates the bindings. Use a local Fuel node for development and contract tests; never use a production wallet for local test transactions.

Both `frontend/yarn.lock` and the workspace `pnpm-lock.yaml` resolve patched WalletConnect URI, MetaMask UUID and Fuel CLI TOML dependencies. The Fuel CLI consumes only locally controlled `Forc.toml` files; the patched TOML parser remains compatible with `fuels build`. Check both dependency graphs before deploying: `pnpm audit --audit-level low` at the workspace root and `yarn audit --level low` here.

The included Sway settlement contract is not operational on a fresh deployment: `initialize` currently rejects the unset registry, and `register_filling` does not populate settlement order storage. The local checks above prove dependency, UI and SDK compatibility, not live trading readiness. Do not deploy this contract or enable live trades without separately completing and validating its settlement logic.

## Deploying to Testnet

To learn how to deploy your Fuel dApp to the testnet, you can follow our [Deploying to Testnet](https://docs.fuel.network/docs/fuels-ts/creating-a-fuel-dapp/deploying-a-dapp-to-testnet/) guide.

## Learn More

- [Fuel TS SDK docs](https://docs.fuel.network/docs/fuels-ts/)
- [Fuel Docs Portal](https://docs.fuel.network/)
