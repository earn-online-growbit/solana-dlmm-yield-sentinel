import { DLMM_CONFIG } from "../config";

export class ImpermanentLossGuard {
  public checkCircuitBreaker(initialDepositUsd: number, currentPositionValueUsd: number): boolean {
    const drawdownBps = ((initialDepositUsd - currentPositionValueUsd) / initialDepositUsd) * 10000;
    if (drawdownBps >= DLMM_CONFIG.maxDrawdownBps) {
      console.warn(`[IL Guard] 🚨 Circuit Breaker Triggered! Drawdown: ${drawdownBps.toFixed(0)} bps.`);
      return true; // Emergency withdraw to USDC
    }
    return false;
  }
}
