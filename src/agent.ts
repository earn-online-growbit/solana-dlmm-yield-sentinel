import { DLMMRebalancer } from "./strategies/dlmm_rebalancer";
import { ImpermanentLossGuard } from "./strategies/impermanent_loss_guard";

export class DLMMYieldSentinel {
  private rebalancer = new DLMMRebalancer();
  private ilGuard = new ImpermanentLossGuard();

  public async runCycle() {
    console.log("⚡ [DLMM Yield Sentinel] Running Autonomous Liquidity Optimization Cycle...");
    const state = this.rebalancer.evaluatePoolState(8426, 212.45);
    console.log(`[Rebalancer] ${state.action}`);
  }
}

if (require.main === module) {
  new DLMMYieldSentinel().runCycle();
}
