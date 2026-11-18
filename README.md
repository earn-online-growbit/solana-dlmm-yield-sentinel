# Solana DLMM Yield Sentinel 🌊⚡

An institutional-grade, fully autonomous capital optimization agent designed for concentrated liquidity provisioning on **Meteora DLMM** and **Orca Whirlpools**.

## 🎯 Core Capabilities
1. **Dynamic Bin Migration:** Continuously monitors active DLMM bins and re-centers liquidity dynamically as SOL price fluctuates.
2. **Automated Impermanent Loss Guard:** Circuit breaker mechanism that auto-hedges into stablecoins if adverse price moves exceed acceptable thresholds.
3. **Compound Fee Harvester:** Periodically claims accrued swap fees and re-allocates them into the active bin distribution.

## 🛠️ Tech Stack
- **Solana Web3.js & Anchor SDK**
- **Meteora DLMM SDK & Decimal.js**
- **TypeScript & NodeJS**

## 🚀 Quickstart & Simulation
```bash
npm install
npm run simulate
```

Developed for the **OOBE Protocol Superteam Autonomous Capital Agent Challenge**.
