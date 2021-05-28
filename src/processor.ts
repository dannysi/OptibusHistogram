const sumDriveTimes = (driveTime: { startTime: number; endTime: number; }, counter: Map<number, number>): void  => {
    console.log(driveTime)
    for (let i=driveTime.startTime; i<=driveTime.endTime; i+=hourMillis) {
        console.log(i)  
        const val = counter.get(i)
        counter.set(i,val?val+1:1)
    }
}
const floorHourMillis = (time:string) => Math.floor(Date.parse(time)/hourMillis) * hourMillis
const ceilHourMillis = (time:string) => Math.floor(Date.parse(time)/hourMillis) * hourMillis
const findMaxVal = (myMap:Map<any,number>) => {
  let max = 0
  for (let val of myMap.values()) {
    if (val>max) max = val 
  }
  return max;
}
const hourMillis = 3600000
export const processDriveTimes = (jsonArray: Array<any>) => {
    console.log(jsonArray);
    const driveTimes = jsonArray.map(drive => ({startTime: floorHourMillis(drive.startTime), endTime: ceilHourMillis(drive.endTime)}))
    //console.log(driveTimes)
    let counter = new  Map<number, number> ()
    driveTimes.forEach(driveTime => sumDriveTimes(driveTime, counter))
    console.log(counter.size)
    let orderedCounter = new Map<number,number>([...counter.entries()].sort())
    const max = findMaxVal(orderedCounter)
    console.log(max)
    return [...orderedCounter.entries()].map(entry => ({time:entry[0], height:entry[1], max}))
}