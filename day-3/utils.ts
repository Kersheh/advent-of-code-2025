export type BatteryBank = {
  batteryJoltageRatings: Array<number>;
}

export const parseBatteryBank = (batteryBank: string): BatteryBank => ({
  batteryJoltageRatings: [...batteryBank].map(Number)
})
