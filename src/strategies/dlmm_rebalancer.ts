import { DLMM_CONFIG } from "../config";
import Decimal from "decimal.js";

export interface BinState {
  binId: number;
  price: Decimal;
  liquidityX: Decimal;
  liquidityY: Decimal;
  feeRate: number;
}

export class DLMMRebalancer {
  private currentActiveBin: number = 8420;

  public evaluatePoolState(activeBinId: number, currentPrice: number): { shouldRebalance: boolean; action: string } {
    const deviation = Math.abs(activeBinId - this.currentActiveBin);
    if (deviation >= DLMM_CONFIG.activeBinTolerance) {
      this.currentActiveBin = activeBinId;
      return {
        shouldRebalance: true,
        action: `Active bin shifted by ${deviation} bins. Migrating liquidity to concentrated range [${activeBinId - 5}, ${activeBinId + 5}].`
      };
    }
    return { shouldRebalance: false, action: "Pool within optimal fee accrual range." };
  }
}
