export const DLMM_CONFIG = {
  rpcEndpoint: process.env.SOLANA_RPC_URL || "https://api.devnet.solana.com",
  targetPool: "AR1MTjnaFFVYrwZgBvS8A5i71L6iU6J41rS3k73UvW1e", // SOL/USDC DLMM
  binStep: 20, // 0.20% per bin
  activeBinTolerance: 4,
  maxDrawdownBps: 250, // 2.5% max IL stop-loss
  minYieldApyThreshold: 18.5 // Rebalance if APY drops below 18.5%
};
